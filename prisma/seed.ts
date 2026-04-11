import { DecisionType, LanguageCode, PrismaClient, SeverityLevel } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.decisionItem.deleteMany();
  await prisma.kpiValue.deleteMany();
  await prisma.kpiDefinition.deleteMany();
  await prisma.reportInstance.deleteMany();
  await prisma.reportDefinition.deleteMany();
  await prisma.departmentTab.deleteMany();
  await prisma.structureRole.deleteMany();
  await prisma.department.deleteMany();
  await prisma.translation.deleteMany();
  await prisma.appSetting.deleteMany();
  await prisma.userPreference.deleteMany();
  await prisma.user.deleteMany();

  const [finance, operations, sales] = await prisma.$transaction([
    prisma.department.create({ data: { slug: 'finance', nameEn: 'Finance', nameAr: 'المالية', sortOrder: 1 } }),
    prisma.department.create({ data: { slug: 'operations', nameEn: 'Operations', nameAr: 'العمليات', sortOrder: 2 } }),
    prisma.department.create({ data: { slug: 'sales', nameEn: 'Sales', nameAr: 'المبيعات', sortOrder: 3 } })
  ]);

  for (const department of [finance, operations, sales]) {
    await prisma.departmentTab.createMany({
      data: [
        { departmentId: department.id, key: 'dashboard', labelEn: 'Dashboard', labelAr: 'لوحة المعلومات', sortOrder: 1 },
        { departmentId: department.id, key: 'kpis', labelEn: 'KPIs', labelAr: 'مؤشرات الأداء', sortOrder: 2 },
        { departmentId: department.id, key: 'reports', labelEn: 'Reports', labelAr: 'التقارير', sortOrder: 3 },
        { departmentId: department.id, key: 'structure', labelEn: 'Structure', labelAr: 'الهيكل التنظيمي', sortOrder: 4 }
      ]
    });
  }

  const reportDef = await prisma.reportDefinition.create({
    data: {
      departmentId: operations.id,
      name: 'Operational Productivity Report',
      type: 'Operational',
      frequency: 'Monthly',
      source: 'WMS + ERP',
      displayFormat: 'PDF + Table',
      usedInDashboard: true,
      usedInDecisionCenter: true
    }
  });

  const reportV2 = await prisma.reportInstance.create({
    data: {
      reportDefinitionId: reportDef.id,
      periodKey: '2026-Q2',
      version: 2,
      dataReference: 'storage://reports/operations/2026-q2-v2'
    }
  });

  const kpiDef = await prisma.kpiDefinition.create({
    data: {
      departmentId: operations.id,
      name: 'On-Time Fulfillment',
      description: 'Delivered orders within SLA',
      unit: '%',
      target: '93',
      frequency: 'Monthly',
      owner: 'Operations Manager'
    }
  });

  await prisma.kpiValue.create({
    data: {
      kpiDefinitionId: kpiDef.id,
      periodKey: '2026-04',
      actual: '90',
      trend: 'Down',
      status: 'At Risk'
    }
  });

  await prisma.structureRole.create({
    data: {
      departmentId: operations.id,
      roleName: 'Warehouse Supervisor',
      assignedPerson: 'J. Patel',
      headcount: 2,
      vacantPositions: 1,
      jobDescription: 'Leads warehouse planning and shift performance.'
    }
  });

  await prisma.decisionItem.createMany({
    data: [
      {
        type: DecisionType.ALERT,
        title: 'Fulfillment SLA breach risk',
        description: 'Backlog may push late deliveries above threshold next week.',
        severity: SeverityLevel.HIGH,
        periodKey: '2026-Q2',
        departmentId: operations.id,
        reportInstanceId: reportV2.id
      },
      {
        type: DecisionType.INSIGHT,
        title: 'Enterprise renewals supporting growth',
        description: 'Growth trend correlated with enterprise renewal contracts.',
        periodKey: '2026-04',
        departmentId: sales.id
      },
      {
        type: DecisionType.RECOMMENDATION,
        title: 'Redistribute overtime load',
        description: 'Shift overtime hours across two warehouses over next 14 days.',
        periodKey: '2026-Q2',
        departmentId: operations.id,
        reportInstanceId: reportV2.id
      }
    ]
  });

  await prisma.translation.createMany({
    data: [
      { key: 'decisionCenter', language: LanguageCode.EN, value: 'Decision Center', scope: 'ui' },
      { key: 'decisionCenter', language: LanguageCode.AR, value: 'مركز القرارات', scope: 'ui' }
    ]
  });

  await prisma.appSetting.createMany({
    data: [
      { key: 'defaultLanguage', value: 'en' },
      { key: 'dateFormat', value: 'YYYY-MM-DD' },
      { key: 'statusColor.good', value: '#16a34a' }
    ]
  });

  const admin = await prisma.user.create({
    data: { email: 'admin@kleen.internal', displayName: 'System Admin', isAdmin: true }
  });

  await prisma.userPreference.create({
    data: { userId: admin.id, language: LanguageCode.EN, dateFormat: 'YYYY-MM-DD', colorProfile: 'executive' }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
