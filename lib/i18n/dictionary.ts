export type Language = 'en' | 'ar';

export const dictionary = {
  en: {
    appTitle: 'Kleen Management System',
    decisionCenter: 'Decision Center',
    departments: 'Departments',
    adminPanel: 'Admin Panel',
    dashboard: 'Dashboard',
    kpis: 'KPIs',
    reports: 'Reports',
    structure: 'Structure',
    alerts: 'Alerts',
    insights: 'Insights',
    recommendations: 'Recommendations',
    language: 'Language'
  },
  ar: {
    appTitle: 'نظام كلين الإداري',
    decisionCenter: 'مركز القرارات',
    departments: 'الإدارات',
    adminPanel: 'لوحة الإدارة',
    dashboard: 'لوحة المعلومات',
    kpis: 'مؤشرات الأداء',
    reports: 'التقارير',
    structure: 'الهيكل التنظيمي',
    alerts: 'التنبيهات',
    insights: 'الرؤى',
    recommendations: 'التوصيات',
    language: 'اللغة'
  }
} as const;
