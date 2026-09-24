export type ProficiencyStage = 
  | 'Project Experience' 
  | 'Practicing' 
  | 'Familiar' 
  | 'Currently Learning';

export interface SkillItem {
  name: string;
  stage: ProficiencyStage;
  description: string;
  tags?: string[];
}

export interface SkillCategory {
  title: string;
  categoryKey: 'programming' | 'dataAnalysis' | 'database' | 'visualization' | 'spreadsheet' | 'statistics' | 'tools';
  description: string;
  skills: SkillItem[];
}

export const dataAnalystSkillTree: SkillCategory[] = [
  {
    title: 'Programming',
    categoryKey: 'programming',
    description: 'Foundational programming language for writing reproducible data processing workflows and data pipelines.',
    skills: [
      {
        name: 'Python',
        stage: 'Project Experience',
        description: 'Writing clean scripts for data parsing, loops, function modularization, and automating ETL pipelines.',
        tags: ['Python 3', 'Jupyter', 'Scripts'],
      },
    ],
  },
  {
    title: 'Data Analysis & Manipulation',
    categoryKey: 'dataAnalysis',
    description: 'Cleaning malformed datasets, reshaping data frames, handling missing values, and exploratory feature analysis.',
    skills: [
      {
        name: 'Pandas',
        stage: 'Project Experience',
        description: 'DataFrame operations, grouping/aggregations, date-time indexing, merge/join handling, and anomaly detection.',
      },
      {
        name: 'NumPy',
        stage: 'Practicing',
        description: 'Vectorized math operations, matrix transformations, and numerical array computing.',
      },
      {
        name: 'Data Cleaning',
        stage: 'Project Experience',
        description: 'Detecting nulls, deduplication, standardizing categorical values, type casting, and outlier isolation.',
      },
      {
        name: 'Exploratory Data Analysis (EDA)',
        stage: 'Project Experience',
        description: 'Univariate and bivariate statistical exploration, correlation matrices, and distribution profiling.',
      },
    ],
  },
  {
    title: 'Database & Querying',
    categoryKey: 'database',
    description: 'Relational data querying, joins, nested subqueries, aggregations, and window functions.',
    skills: [
      {
        name: 'SQL (PostgreSQL / MySQL)',
        stage: 'Project Experience',
        description: 'Complex multi-table INNER/LEFT JOINs, GROUP BY, HAVING, CASE WHEN conditional logic, and subqueries.',
      },
      {
        name: 'Database Schema Design',
        stage: 'Practicing',
        description: 'Primary/foreign key relationships, normalization (1NF-3NF), and index optimization basics.',
      },
    ],
  },
  {
    title: 'Visualization & Business Intelligence',
    categoryKey: 'visualization',
    description: 'Communicating metrics through clean charts, interactive dashboards, and business KPI cards.',
    skills: [
      {
        name: 'Power BI',
        stage: 'Practicing',
        description: 'Data modeling, Star Schema implementation, basic DAX measures, and drill-through interactive pages.',
      },
      {
        name: 'Tableau',
        stage: 'Currently Learning',
        description: 'Building worksheet views, calculated fields, dashboard layouts, and interactive filters.',
      },
      {
        name: 'Matplotlib',
        stage: 'Project Experience',
        description: 'Histograms, scatter plots, subplots customization, labels, and figure formatting in notebooks.',
      },
      {
        name: 'Seaborn',
        stage: 'Project Experience',
        description: 'Heatmaps for correlation matrices, violin plots, box plots, and regression trendlines.',
      },
    ],
  },
  {
    title: 'Spreadsheet Analytics',
    categoryKey: 'spreadsheet',
    description: 'Quick-turnaround ad-hoc data analysis, formula auditing, and business models.',
    skills: [
      {
        name: 'Microsoft Excel',
        stage: 'Project Experience',
        description: 'XLOOKUP, VLOOKUP, INDEX/MATCH, nested IF logic, Pivot Tables, Pivot Charts, and conditional formatting.',
      },
    ],
  },
  {
    title: 'Statistics & Math',
    categoryKey: 'statistics',
    description: 'Mathematical intuition required to separate authentic trends from random noise.',
    skills: [
      {
        name: 'Descriptive Statistics',
        stage: 'Practicing',
        description: 'Mean, median, mode, variance, standard deviation, interquartile ranges (IQR), and skewness.',
      },
      {
        name: 'Basic Statistical Analysis',
        stage: 'Currently Learning',
        description: 'Probability distributions, sampling, hypothesis testing intuition, and correlation vs causation analysis.',
      },
    ],
  },
  {
    title: 'Tools & Environments',
    categoryKey: 'tools',
    description: 'Version control and environments that ensure reproducible analytical work.',
    skills: [
      {
        name: 'Git',
        stage: 'Practicing',
        description: 'Branch management, commit hygiene, conflict resolution, and feature versioning.',
      },
      {
        name: 'GitHub',
        stage: 'Project Experience',
        description: 'Repository documentation, Markdown READMEs, collaboration, and open-source project management.',
      },
    ],
  },
];

export interface DetailedCaseStudy {
  id: string;
  slug: string;
  title: string;
  category: 'SQL' | 'Python' | 'Excel' | 'Power BI';
  problem: string;
  objective: string;
  dataset: string;
  cleaningProcess: string[];
  analysisProcess: string[];
  visualizationsUsed: string[];
  keyInsights: string[];
  techStack: string[];
  resultsAndImpact: string;
  githubUrl: string;
  liveDemoUrl?: string;
}

export const verifiedCaseStudies: DetailedCaseStudy[] = [
  {
    id: 'case-1',
    slug: 'sql-retail-sales',
    title: 'Retail Sales Performance & Customer Segment Analysis',
    category: 'SQL',
    problem: 'An omni-channel retail business observed fluctuating margins across product categories without clear visibility into customer lifetime repeat frequency or high-margin sales periods.',
    objective: 'Write modular SQL scripts to extract monthly recurring sales, compute average order value (AOV), and classify customers using RFM (Recency, Frequency, Monetary) segmentation.',
    dataset: 'Retail transaction log comprising 50,000+ orders with timestamps, customer identifiers, item unit costs, and transaction margins.',
    cleaningProcess: [
      'Identified and excluded 320 cancelled/refunded transactions to prevent distorted revenue summaries.',
      'Casted textual timestamps to standard ISO-8601 UTC date formats for accurate monthly cohorting.',
      'Handled null values in discount column by imputing zero.',
    ],
    analysisProcess: [
      'Aggregated revenue by calendar month using DATE_TRUNC to isolate seasonality peaks.',
      'Constructed window functions (DENSE_RANK and NTILE) to bucket customers into top 20% high-value tiers.',
      'Computed gross margin percentage by subtracting total cost from invoice totals across 8 product categories.',
    ],
    visualizationsUsed: [
      'Monthly revenue trend line with year-over-year comparative overlays.',
      'RFM customer distribution matrix highlighting high-churn-risk segments.',
    ],
    keyInsights: [
      'Top 12% of repeat customers generated 58% of cumulative net profits.',
      'Q4 holiday seasonality accounted for 41% of annual sales, but exhibited a 22% spike in product return rates.',
      'Two product sub-categories were operating at negative gross margins once promotional discounts were applied.',
    ],
    techStack: ['PostgreSQL', 'SQL', 'DBeaver', 'Git'],
    resultsAndImpact: 'Provided management with ready-to-run SQL queries that eliminated manual spreadsheet consolidation and surfaced actionable margin leaks.',
    githubUrl: 'https://github.com/officialankush090-sys/sql-retail-sales-analysis',
  },
  {
    id: 'case-2',
    slug: 'telecom-customer-churn',
    title: 'Telecom Customer Churn Exploratory Data Analysis',
    category: 'Python',
    problem: 'A telecommunications provider experienced elevated monthly churn rates among subscribers, with unclear correlation to contract duration, billing type, or technical support tickets.',
    objective: 'Perform comprehensive exploratory data analysis (EDA) in Python to uncover primary drivers of churn and recommend data-driven retention triggers.',
    dataset: '7,043 subscriber records containing demographic variables, subscribed services, account tenure, payment methods, and monthly charges.',
    cleaningProcess: [
      'Discovered whitespace characters masquerading as nulls in TotalCharges column; converted to float with pd.to_numeric.',
      'Verified zero duplicate subscriber IDs across the primary index.',
      'Transformed binary string categories (Yes/No) into integer flags for correlation matrix computation.',
    ],
    analysisProcess: [
      'Conducted univariate distribution analysis to observe tenure skewness.',
      'Measured churn percentage across contract tiers: Month-to-month vs One-year vs Two-year.',
      'Calculated Pearson correlation coefficients across tenure, monthly spend, and customer support contact frequency.',
    ],
    visualizationsUsed: [
      'Seaborn Heatmap illustrating correlation between contract length and churn likelihood.',
      'Kernel Density Estimate (KDE) plot comparing tenure distributions between retained and churned cohorts.',
      'Grouped bar charts displaying payment method versus churn rate.',
    ],
    keyInsights: [
      'Month-to-month contract holders exhibited a 42.7% churn rate compared to only 2.8% for two-year contract subscribers.',
      'Subscribers paying via electronic checks churned at nearly 2x the rate of those with automated bank transfers.',
      'Highest churn concentration occurred in the first 1 to 5 months of tenure, pinpointing onboarding as the critical risk window.',
    ],
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    resultsAndImpact: 'Identified the 90-day onboarding window as the highest leverage intervention point, saving analytical teams hours of unstructured exploratory work.',
    githubUrl: 'https://github.com/officialankush090-sys/customer-churn-eda-python',
  },
  {
    id: 'case-3',
    slug: 'financial-kpi-excel',
    title: 'Executive Financial & Operational KPI Dashboard',
    category: 'Excel',
    problem: 'Business leaders lacked a centralized, non-technical dashboard to track department budget variance and actual versus forecasted expenditure across quarters.',
    objective: 'Construct a clean, dynamic Microsoft Excel dashboard that requires zero code and automatically recalculates metrics when monthly transaction raw files are pasted.',
    dataset: 'Multi-department expense ledger with 12 months of budget allocations and actual ledger vouchers across 6 operational cost centers.',
    cleaningProcess: [
      'Removed trailing spaces in department department naming using TRIM and PROPER functions.',
      'Utilized Power Query to unpivot monthly columns into a clean normalized tabular structure.',
      'Built data validation rules to restrict input errors for expense categories.',
    ],
    analysisProcess: [
      'Engineered nested XLOOKUP formulas to map accounts to parent ledger categories dynamically.',
      'Created dynamic Pivot Tables calculating Quarter-over-Quarter percentage variance.',
      'Integrated conditional formatting rules with soft color alert thresholds (variance > 10%).',
    ],
    visualizationsUsed: [
      'Actual vs Budget target bullet charts.',
      'Interactive department slicers allowing executive drill-down.',
      'Mini sparklines showing expense trajectory within each category.',
    ],
    keyInsights: [
      'Marketing department consistently exceeded allocated budget by 14% in Q2 due to uncontracted digital ad spend.',
      'Operational travel costs decreased by 28% year-over-year following remote client meeting adoption.',
    ],
    techStack: ['Microsoft Excel', 'Pivot Tables', 'XLOOKUP', 'Power Query'],
    resultsAndImpact: 'Transformed 14 disconnected spreadsheets into a single unified executive workbook with instant refresh capabilities.',
    githubUrl: 'https://github.com/officialankush090-sys/excel-kpi-financial-dashboard',
  },
];
