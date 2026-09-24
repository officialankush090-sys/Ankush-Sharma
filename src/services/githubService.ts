/**
 * Official GitHub API Integration Service
 * STRICT RULES:
 * 1. ONLY fetch repositories for the verified username: 'officialankush090-sys'
 * 2. Filter every repository: repository.owner.login === 'officialankush090-sys'
 * 3. Never display repositories belonging to other accounts.
 * 4. Never invent placeholder repositories if the API fails; show a transparent error state.
 */

export interface GitHubOwner {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  owner: GitHubOwner;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  fork: boolean;
  default_branch: string;
}

export const VERIFIED_GITHUB_CONFIG = {
  username: 'officialankush090-sys',
  profileUrl: 'https://github.com/officialankush090-sys',
  apiUrl: 'https://api.github.com/users/officialankush090-sys/repos?sort=updated&per_page=100',
  cacheKey: 'verified_github_repos_officialankush090_sys',
  cacheTTL: 1000 * 60 * 15, // 15 minutes
};

export interface FetchResult {
  repos: GitHubRepo[];
  verifiedOwner: string;
  isCached: boolean;
  error: string | null;
  status: 'SUCCESS' | 'RATE_LIMITED' | 'ERROR' | 'UNVERIFIED';
}

/**
 * Validates that every repository belongs strictly to the expected owner
 */
export function filterAndVerifyRepos(rawRepos: any[], expectedOwner: string): GitHubRepo[] {
  if (!Array.isArray(rawRepos)) return [];

  return rawRepos.filter((repo) => {
    const ownerLogin = repo?.owner?.login;
    const matchesOwner = typeof ownerLogin === 'string' && ownerLogin.toLowerCase() === expectedOwner.toLowerCase();
    
    if (!matchesOwner) {
      console.warn(`[GitHub Filter] Rejected repository '${repo?.full_name}' because owner '${ownerLogin}' !== '${expectedOwner}'`);
    }
    return matchesOwner;
  });
}

/**
 * Fetch verified repositories from GitHub API
 */
export async function fetchVerifiedUserRepositories(): Promise<FetchResult> {
  const expectedOwner = VERIFIED_GITHUB_CONFIG.username;

  // 1. Check verified localStorage cache
  try {
    const cached = localStorage.getItem(VERIFIED_GITHUB_CONFIG.cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < VERIFIED_GITHUB_CONFIG.cacheTTL && Array.isArray(parsed.repos)) {
        const verifiedCached = filterAndVerifyRepos(parsed.repos, expectedOwner);
        return {
          repos: verifiedCached,
          verifiedOwner: expectedOwner,
          isCached: true,
          error: null,
          status: 'SUCCESS',
        };
      }
    }
  } catch (err) {
    console.warn('[GitHub Cache] Read warning:', err);
  }

  // 2. Fetch directly from official GitHub endpoint
  try {
    const response = await fetch(VERIFIED_GITHUB_CONFIG.apiUrl, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });

    // Handle 404 (Account not found)
    if (response.status === 404) {
      return {
        repos: [],
        verifiedOwner: expectedOwner,
        isCached: false,
        error: 'GitHub account verification required. Profile not found on GitHub.',
        status: 'UNVERIFIED',
      };
    }

    // Handle 403 (Rate limited)
    if (response.status === 403) {
      // Try to recover cached data if available even if stale
      try {
        const staleCached = localStorage.getItem(VERIFIED_GITHUB_CONFIG.cacheKey);
        if (staleCached) {
          const parsed = JSON.parse(staleCached);
          if (Array.isArray(parsed.repos)) {
            const verified = filterAndVerifyRepos(parsed.repos, expectedOwner);
            return {
              repos: verified,
              verifiedOwner: expectedOwner,
              isCached: true,
              error: 'GitHub API rate limit reached. Showing previously verified snapshot.',
              status: 'RATE_LIMITED',
            };
          }
        }
      } catch (e) {
        // ignore
      }

      return {
        repos: [],
        verifiedOwner: expectedOwner,
        isCached: false,
        error: 'GitHub projects are temporarily unavailable due to API rate limits. Please try again later.',
        status: 'RATE_LIMITED',
      };
    }

    if (!response.ok) {
      throw new Error(`GitHub API returned status ${response.status}`);
    }

    const data = await response.json();
    const strictlyVerifiedRepos = filterAndVerifyRepos(data, expectedOwner);

    // Cache verified repos
    try {
      localStorage.setItem(
        VERIFIED_GITHUB_CONFIG.cacheKey,
        JSON.stringify({
          timestamp: Date.now(),
          repos: strictlyVerifiedRepos,
        })
      );
    } catch (e) {
      console.warn('[GitHub Cache] Save warning:', e);
    }

    return {
      repos: strictlyVerifiedRepos,
      verifiedOwner: expectedOwner,
      isCached: false,
      error: null,
      status: 'SUCCESS',
    };
  } catch (err: any) {
    console.error('[GitHub API] Request failed:', err);
    return {
      repos: [],
      verifiedOwner: expectedOwner,
      isCached: false,
      error: 'GitHub projects are temporarily unavailable. Please try again later.',
      status: 'ERROR',
    };
  }
}
