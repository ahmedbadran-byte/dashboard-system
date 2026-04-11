export type Department = { id: string; slug: string; nameEn: string; nameAr: string; order: number; active: boolean };

export const departments: Department[] = [
  { id: 'dep-fin', slug: 'finance', nameEn: 'Finance', nameAr: 'المالية', order: 1, active: true },
  { id: 'dep-ops', slug: 'operations', nameEn: 'Operations', nameAr: 'العمليات', order: 2, active: true },
  { id: 'dep-sales', slug: 'sales', nameEn: 'Sales', nameAr: 'المبيعات', order: 3, active: true }
];

export const departmentTabs = ['dashboard', 'kpis', 'reports', 'structure'] as const;


export type DecisionItemCollection = {
  alerts: Array<{ id: string; title: string; description: string; departmentSlug: string; period: string; severity: string; reportRef: string }>;
  insights: Array<{ id: string; summary: string; departmentSlug: string; period: string; reportRef: string }>;
  recommendations: Array<{ id: string; action: string; departmentSlug: string; period: string; reportRef: string }>;
};

export const decisionItems: DecisionItemCollection = {
  alerts: [
    {
      id: 'a1',
      title: 'Fulfillment SLA breach risk',
      description: 'Pending backlog may push late deliveries above threshold next week.',
      departmentSlug: 'operations',
      period: 'Q2-2026',
      severity: 'High',
      reportRef: 'Operational Productivity Report v2'
    }
  ],
  insights: [
    {
      id: 'i1',
      summary: 'Revenue growth in April was led by enterprise account expansions.',
      departmentSlug: 'sales',
      period: 'April-2026',
      reportRef: 'Commercial Pipeline & Forecast v3'
    }
  ],
  recommendations: [
    {
      id: 'r1',
      action: 'Prioritize overtime balancing across two warehouses within 14 days.',
      departmentSlug: 'operations',
      period: 'Q2-2026',
      reportRef: 'Operational Productivity Report v2'
    }
  ]
};

export const departmentDashboardData = {
  kpiSummary: [
    { name: 'Forecast Accuracy', target: '95%', actual: '97%', period: 'Q2-2026' },
    { name: 'On-Time Fulfillment', target: '93%', actual: '90%', period: 'Q2-2026' }
  ],
  trends: [
    { month: 'Jan', value: 84 },
    { month: 'Feb', value: 86 },
    { month: 'Mar', value: 87 },
    { month: 'Apr', value: 89 },
    { month: 'May', value: 90 },
    { month: 'Jun', value: 91 }
  ]
};

export const kpiRecords = [
  {
    id: 'kpi1',
    departmentSlug: 'finance',
    name: 'Forecast Accuracy',
    description: 'Monthly forecast vs actual alignment',
    target: '95%',
    actual: '97%',
    trend: 'Up',
    status: 'On Track',
    period: 'Q2-2026',
    owner: 'Finance Controller'
  }
];

export const reportDefinitions = [
  {
    id: 'def1',
    departmentSlug: 'finance',
    name: 'Monthly Financial Performance Review',
    type: 'Financial',
    frequency: 'Monthly',
    source: 'ERP + Finance Workbook',
    format: 'PDF + Tables',
    usedInDashboard: true,
    usedInDecisionCenter: true
  }
];

export const reportInstances = [
  {
    id: 'ins1',
    departmentSlug: 'finance',
    reportName: 'Monthly Financial Performance Review',
    period: 'April-2026',
    version: 3,
    createdDate: '2026-04-08',
    fileReference: 'storage://reports/finance/apr-2026-v3'
  },
  {
    id: 'ins2',
    departmentSlug: 'finance',
    reportName: 'Monthly Financial Performance Review',
    period: 'April-2026',
    version: 2,
    createdDate: '2026-04-04',
    fileReference: 'storage://reports/finance/apr-2026-v2'
  }
];

export const structureRoles = [
  {
    id: 'role1',
    departmentSlug: 'finance',
    roleName: 'Finance Manager',
    assignedPerson: 'A. Morgan',
    headcount: 1,
    vacantPositions: 0,
    jobDescription: 'Leads planning, reporting, and control cadence.'
  }
];

export const adminModules = {
  departmentManagement: departments,
  reportsConfiguration: reportDefinitions,
  kpiConfiguration: kpiRecords,
  decisionRules: [
    { id: 'rule1', trigger: 'KPI below target 2 consecutive periods', output: 'Generate alert + recommendation' }
  ],
  translations: [
    { key: 'decisionCenter', en: 'Decision Center', ar: 'مركز القرارات' }
  ],
  generalSettings: [
    { key: 'defaultLanguage', value: 'en' },
    { key: 'dateFormat', value: 'YYYY-MM-DD' },
    { key: 'statusColor.good', value: '#16a34a' }
  ]
};


export function getDecisionItems(): DecisionItemCollection {
  return {
    alerts: decisionItems?.alerts ?? [],
    insights: decisionItems?.insights ?? [],
    recommendations: decisionItems?.recommendations ?? []
  };
}
