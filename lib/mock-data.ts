export type ExecutiveSummaryCard = {
  title: string;
  value: string;
  delta: string;
  tone: 'positive' | 'neutral' | 'warning';
  insight: string;
};

export type ReportRow = {
  id: string;
  title: string;
  department: string;
  type: 'Operational' | 'Strategic' | 'Compliance' | 'Financial';
  period: 'Q1 2026' | 'Q2 2026' | 'March 2026' | 'April 2026';
  status: 'Draft' | 'In Review' | 'Submitted' | 'Approved';
  owner: string;
  summary: string;
  fileUrl: string;
};

export type KpiRow = {
  id: string;
  department: 'Finance' | 'Operations' | 'Sales' | 'HR' | 'Technology';
  name: string;
  target: number;
  actual: number;
  trend: 'Up' | 'Down' | 'Flat';
  status: 'On Track' | 'At Risk' | 'Off Track';
  unit: '%' | 'days' | 'score';
  lastUpdated: string;
};

export type KpiTrendPoint = {
  month: string;
  finance: number;
  operations: number;
  sales: number;
  hr: number;
  technology: number;
};

export type FinancialTabKey = 'cvp' | 'breakEven' | 'cba' | 'costAccounting';

export const executiveSummaryCards: ExecutiveSummaryCard[] = [
  {
    title: 'Revenue Run Rate',
    value: '$51.8M',
    delta: '+7.8% YoY',
    tone: 'positive',
    insight: 'Driven by enterprise contract renewals and cross-sell growth.'
  },
  {
    title: 'EBITDA Margin',
    value: '21.9%',
    delta: '+1.2 pts QoQ',
    tone: 'positive',
    insight: 'Operating leverage improved after procurement optimization.'
  },
  {
    title: 'Cash Conversion Cycle',
    value: '42 days',
    delta: '-3 days vs plan',
    tone: 'neutral',
    insight: 'Collections are improving while inventory stays within policy.'
  },
  {
    title: 'Strategic Initiatives On Track',
    value: '15 / 19',
    delta: '2 flagged items',
    tone: 'warning',
    insight: 'Automation rollout and hiring plan require steering committee review.'
  }
];

export const executivePriorities = [
  {
    title: 'Gross Margin Stabilization',
    owner: 'Finance + Operations',
    progress: 78,
    note: 'Material cost variance narrowed to 1.9% against baseline.'
  },
  {
    title: 'Q2 Sales Expansion Plan',
    owner: 'Sales',
    progress: 64,
    note: 'Pipeline quality improved; conversion lagging in two regions.'
  },
  {
    title: 'Shared Services Efficiency',
    owner: 'HR + Technology',
    progress: 52,
    note: 'Process redesign complete, rollout starts next sprint.'
  }
];

export const revenueTrendData = [
  { month: 'Jan', revenue: 7.6 },
  { month: 'Feb', revenue: 7.9 },
  { month: 'Mar', revenue: 8.1 },
  { month: 'Apr', revenue: 8.4 },
  { month: 'May', revenue: 8.6 },
  { month: 'Jun', revenue: 8.9 }
];

export const departmentScoreData = [
  { department: 'Finance', score: 91 },
  { department: 'Operations', score: 84 },
  { department: 'Sales', score: 88 },
  { department: 'HR', score: 81 },
  { department: 'Technology', score: 86 }
];

export const reportsData: ReportRow[] = [
  {
    id: 'rep-001',
    title: 'Monthly Financial Performance Review',
    department: 'Finance',
    type: 'Financial',
    period: 'April 2026',
    status: 'Submitted',
    owner: 'Alice Morgan',
    summary: 'Highlights margin expansion and variance commentary across business units.',
    fileUrl: '#'
  },
  {
    id: 'rep-002',
    title: 'Operational Productivity Report',
    department: 'Operations',
    type: 'Operational',
    period: 'Q2 2026',
    status: 'In Review',
    owner: 'Jay Patel',
    summary: 'Tracks throughput, downtime, and efficiency improvements by site.',
    fileUrl: '#'
  },
  {
    id: 'rep-003',
    title: 'Commercial Pipeline & Forecast',
    department: 'Sales',
    type: 'Strategic',
    period: 'Q2 2026',
    status: 'Approved',
    owner: 'Lena Brooks',
    summary: 'Summarizes weighted pipeline, win rates, and regional demand outlook.',
    fileUrl: '#'
  },
  {
    id: 'rep-004',
    title: 'People Capacity & Hiring Plan',
    department: 'HR',
    type: 'Strategic',
    period: 'Q2 2026',
    status: 'Draft',
    owner: 'Nora Kim',
    summary: 'Reviews attrition, hiring lead time, and workforce planning gaps.',
    fileUrl: '#'
  },
  {
    id: 'rep-005',
    title: 'Information Security Compliance Log',
    department: 'Technology',
    type: 'Compliance',
    period: 'March 2026',
    status: 'Submitted',
    owner: 'Rahul Desai',
    summary: 'Details SOC control evidence status and remediation milestones.',
    fileUrl: '#'
  }
];

export const kpiRows: KpiRow[] = [
  {
    id: 'kpi-001',
    department: 'Finance',
    name: 'Forecast Accuracy',
    target: 95,
    actual: 97,
    trend: 'Up',
    status: 'On Track',
    unit: '%',
    lastUpdated: '2026-04-08'
  },
  {
    id: 'kpi-002',
    department: 'Operations',
    name: 'On-Time Fulfillment',
    target: 93,
    actual: 90,
    trend: 'Down',
    status: 'At Risk',
    unit: '%',
    lastUpdated: '2026-04-09'
  },
  {
    id: 'kpi-003',
    department: 'Sales',
    name: 'Customer Retention',
    target: 90,
    actual: 92,
    trend: 'Up',
    status: 'On Track',
    unit: '%',
    lastUpdated: '2026-04-09'
  },
  {
    id: 'kpi-004',
    department: 'HR',
    name: 'Time to Hire',
    target: 28,
    actual: 26,
    trend: 'Flat',
    status: 'On Track',
    unit: 'days',
    lastUpdated: '2026-04-06'
  },
  {
    id: 'kpi-005',
    department: 'Technology',
    name: 'Platform Reliability',
    target: 99,
    actual: 98,
    trend: 'Up',
    status: 'At Risk',
    unit: '%',
    lastUpdated: '2026-04-07'
  }
];

export const kpiTrendData: KpiTrendPoint[] = [
  { month: 'Jan', finance: 94, operations: 89, sales: 88, hr: 82, technology: 85 },
  { month: 'Feb', finance: 95, operations: 90, sales: 89, hr: 83, technology: 86 },
  { month: 'Mar', finance: 96, operations: 89, sales: 90, hr: 84, technology: 87 },
  { month: 'Apr', finance: 97, operations: 90, sales: 91, hr: 84, technology: 87 },
  { month: 'May', finance: 97, operations: 91, sales: 92, hr: 85, technology: 88 },
  { month: 'Jun', finance: 98, operations: 92, sales: 92, hr: 86, technology: 89 }
];

type FinancialModule = {
  cards: Array<{ label: string; value: string; note: string }>;
  chart: Array<{ month: string; actual: number; plan: number }>;
  table: Array<{ item: string; value: string; comment: string }>;
};

export const financialModules: Record<FinancialTabKey, FinancialModule> = {
  cvp: {
    cards: [
      { label: 'Contribution Margin Ratio', value: '42.3%', note: 'Above annual plan by 1.1 pts' },
      { label: 'Projected Unit Volume', value: '152,000', note: 'Reflects current booked demand' },
      { label: 'Projected Operating Income', value: '$1.46M', note: 'Assumes stable overhead profile' }
    ],
    chart: [
      { month: 'Jan', actual: 1.1, plan: 1.0 },
      { month: 'Feb', actual: 1.2, plan: 1.05 },
      { month: 'Mar', actual: 1.26, plan: 1.1 },
      { month: 'Apr', actual: 1.31, plan: 1.2 },
      { month: 'May', actual: 1.38, plan: 1.25 },
      { month: 'Jun', actual: 1.46, plan: 1.32 }
    ],
    table: [
      { item: 'Average Selling Price', value: '$42.10', comment: 'Stable against prior month' },
      { item: 'Variable Cost per Unit', value: '$24.30', comment: 'Improved from supply contracts' },
      { item: 'Total Fixed Costs', value: '$2.7M', comment: 'Includes centralized shared services' }
    ]
  },
  breakEven: {
    cards: [
      { label: 'Break-Even Units', value: '99,200', note: 'Down 4.6% from last quarter' },
      { label: 'Break-Even Revenue', value: '$4.17M', note: 'At current price and mix assumptions' },
      { label: 'Margin of Safety', value: '31%', note: 'Healthy cushion against downside case' }
    ],
    chart: [
      { month: 'Jan', actual: 110, plan: 114 },
      { month: 'Feb', actual: 108, plan: 112 },
      { month: 'Mar', actual: 105, plan: 109 },
      { month: 'Apr', actual: 103, plan: 106 },
      { month: 'May', actual: 101, plan: 103 },
      { month: 'Jun', actual: 99.2, plan: 101 }
    ],
    table: [
      { item: 'Fixed Cost Baseline', value: '$2.68M', comment: 'No material change expected' },
      { item: 'Weighted Contribution / Unit', value: '$17.8', comment: 'Positive product mix shift' },
      { item: 'Volume Buffer', value: '44,000 units', comment: 'Current forecast above break-even' }
    ]
  },
  cba: {
    cards: [
      { label: 'Program Investment', value: '$920K', note: '12-month transformation scope' },
      { label: 'Expected Financial Benefit', value: '$1.63M', note: 'Cost savings + revenue lift' },
      { label: 'Benefit-Cost Ratio', value: '1.77', note: 'Above internal approval threshold' }
    ],
    chart: [
      { month: 'Jan', actual: 0.12, plan: 0.1 },
      { month: 'Feb', actual: 0.23, plan: 0.2 },
      { month: 'Mar', actual: 0.38, plan: 0.3 },
      { month: 'Apr', actual: 0.56, plan: 0.45 },
      { month: 'May', actual: 0.74, plan: 0.62 },
      { month: 'Jun', actual: 0.93, plan: 0.8 }
    ],
    table: [
      { item: 'Labor Efficiency Savings', value: '$420K', comment: 'Automation + process redesign' },
      { item: 'Error Cost Reduction', value: '$260K', comment: 'Defect and rework improvements' },
      { item: 'Incremental Revenue Impact', value: '$950K', comment: 'Customer response improvements' }
    ]
  },
  costAccounting: {
    cards: [
      { label: 'Overhead Absorption', value: '129%', note: 'Within finance policy guardrails' },
      { label: 'Standard Cost Variance', value: '-1.7%', note: 'Lower unfavorable variance trend' },
      { label: 'Inventory Carrying Cost', value: '$198K', note: 'Improvement from stock policy tuning' }
    ],
    chart: [
      { month: 'Jan', actual: 2.4, plan: 2.6 },
      { month: 'Feb', actual: 2.35, plan: 2.55 },
      { month: 'Mar', actual: 2.28, plan: 2.5 },
      { month: 'Apr', actual: 2.2, plan: 2.45 },
      { month: 'May', actual: 2.12, plan: 2.38 },
      { month: 'Jun', actual: 2.05, plan: 2.3 }
    ],
    table: [
      { item: 'Direct Material Variance', value: '-$82K', comment: 'Purchase pricing favorable' },
      { item: 'Direct Labor Variance', value: '+$21K', comment: 'Overtime spikes in two sites' },
      { item: 'Overhead Variance', value: '-$34K', comment: 'Utility costs below seasonal assumptions' }
    ]
  }
};
