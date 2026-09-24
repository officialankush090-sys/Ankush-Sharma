export interface Project {
  id: string;
  title: string;
  status: 'In Progress' | 'Completed' | 'Beta';
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  metrics: string;
}

export const activeProjects: Project[] = [
  {
    id: 'repo-officialankush090-sys',
    title: 'officialankush090-sys (Profile Repository)',
    status: 'Completed',
    description: 'Official GitHub profile README and configuration showcasing data analytics tools, skills, and projects.',
    tags: ['Profile', 'Markdown', 'Data Analytics', 'Portfolio'],
    githubUrl: 'https://github.com/officialankush090-sys/officialankush090-sys',
    metrics: 'Verified Profile Repository',
  },
  {
    id: 'repo-sql-retail',
    title: 'Retail Sales Performance & Customer Segment Analysis',
    status: 'Completed',
    description: 'Modular PostgreSQL queries extracting sales trends, AOV, and RFM customer segmentation on retail orders.',
    tags: ['SQL', 'PostgreSQL', 'Data Analytics'],
    githubUrl: 'https://github.com/officialankush090-sys/sql-retail-sales-analysis',
    metrics: '50k+ records analyzed',
  },
  {
    id: 'repo-customer-churn',
    title: 'Telecom Customer Churn Exploratory Data Analysis',
    status: 'Completed',
    description: 'Exploratory data analysis using Python, Pandas, Matplotlib, and Seaborn identifying key churn drivers.',
    tags: ['Python', 'Pandas', 'Data Analytics', 'Seaborn'],
    githubUrl: 'https://github.com/officialankush090-sys/customer-churn-eda-python',
    metrics: '7,043 subscriber cohort',
  },
  {
    id: 'repo-excel-kpi',
    title: 'Executive Financial & Operational KPI Dashboard',
    status: 'Completed',
    description: 'Interactive Microsoft Excel workbook leveraging XLOOKUP, Pivot Tables, and dynamic slicers for expense variance.',
    tags: ['Excel', 'Data Analytics', 'Spreadsheet'],
    githubUrl: 'https://github.com/officialankush090-sys/excel-kpi-financial-dashboard',
    metrics: '14 spreadsheets consolidated',
  },
];

export const contributionStats = {
  growth: '+120%',
  totalCommitsThisYear: 1482,
  longestStreakDays: 146,
  repositoriesContributed: 28,
  primaryLanguages: [
    { name: 'Python', percentage: 44, color: '#38bdf8' },
    { name: 'TypeScript / React', percentage: 34, color: '#a78bfa' },
    { name: 'SQL & Database', percentage: 16, color: '#34d399' },
    { name: 'Other (Shell, C++)', percentage: 6, color: '#f472b6' },
  ],
  monthlyTrend: [
    { month: 'Oct', commits: 78 },
    { month: 'Nov', commits: 95 },
    { month: 'Dec', commits: 112 },
    { month: 'Jan', commits: 138 },
    { month: 'Feb', commits: 164 },
    { month: 'Mar', commits: 196 },
  ],
};

export const resumeDetails = {
  name: 'Ankush',
  title: 'Aspiring Data Analyst',
  email: 'officialankush090@gmail.com',
  github: 'https://github.com/officialankush090-sys',
  linkedin: 'https://www.linkedin.com/in/ankush-sharma-688290376',
  education: {
    institution: 'State Institute of Engineering & Technology (SIET), Nilokheri',
    degree: 'Bachelor of Technology (B.Tech)',
    timeline: '2023 – Present',
    coursework: [
      'Database Management Systems (DBMS / SQL)',
      'Python Programming',
      'Data Structures & Algorithms',
      'Probability & Statistics',
      'Computer Networks',
    ],
  },
  skills: {
    languages: ['Python', 'SQL', 'TypeScript', 'JavaScript'],
    frontend: ['React', 'Tailwind CSS', 'HTML5/CSS3'],
    backendData: ['PostgreSQL', 'Pandas', 'NumPy', 'FastAPI', 'Supabase'],
    tools: ['Git', 'GitHub', 'Excel', 'Docker', 'Linux', 'VS Code'],
  },
  highlights: [
    'Student at SIET Nilokheri focusing on practical Data Analytics, Python, and SQL.',
    'Hands-on experience conducting Exploratory Data Analysis (EDA) and querying relational databases.',
    'Active open-source contributor on GitHub (officialankush090-sys) with continuous development momentum.',
    'Aspiring Data Analyst eager to solve real-world business intelligence problems.',
  ],
};
