import { PrismaClient, ReportStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.report.deleteMany();
  await prisma.kpi.deleteMany();
  await prisma.department.deleteMany();
  await prisma.financialCvp.deleteMany();
  await prisma.financialBreakEven.deleteMany();
  await prisma.financialCba.deleteMany();
  await prisma.costAccounting.deleteMany();

  const departments = await prisma.$transaction([
    prisma.department.create({ data: { name: 'Finance', owner: 'Alice Morgan' } }),
    prisma.department.create({ data: { name: 'Operations', owner: 'Jay Patel' } }),
    prisma.department.create({ data: { name: 'Sales', owner: 'Lena Brooks' } }),
    prisma.department.create({ data: { name: 'HR', owner: 'Nora Kim' } })
  ]);

  await prisma.report.createMany({
    data: [
      { title: 'Monthly Financial Review', status: ReportStatus.SUBMITTED, departmentId: departments[0].id },
      { title: 'Operations Efficiency Review', status: ReportStatus.DRAFT, departmentId: departments[1].id },
      { title: 'Sales Pipeline Summary', status: ReportStatus.SUBMITTED, departmentId: departments[2].id },
      { title: 'Talent Acquisition Metrics', status: ReportStatus.IN_REVIEW, departmentId: departments[3].id }
    ]
  });

  await prisma.kpi.createMany({
    data: [
      { name: 'Forecast Accuracy', currentValue: '96%', targetValue: '94%', departmentId: departments[0].id },
      { name: 'Unit Cost Reduction', currentValue: '6.2%', targetValue: '5%', departmentId: departments[1].id },
      { name: 'Customer Retention', currentValue: '92%', targetValue: '90%', departmentId: departments[2].id },
      { name: 'Time to Hire', currentValue: '24 days', targetValue: '28 days', departmentId: departments[3].id }
    ]
  });

  await prisma.financialCvp.createMany({
    data: [
      { metric: 'Contribution Margin Ratio', value: '41%', periodLabel: 'Q2 2026' },
      { metric: 'Expected Sales Volume', value: '145,000 units', periodLabel: 'Q2 2026' },
      { metric: 'Projected Net Income', value: '$1.3M', periodLabel: 'Q2 2026' }
    ]
  });

  await prisma.financialBreakEven.createMany({
    data: [
      { metric: 'Break-Even Units', value: '98,500', periodLabel: 'Q2 2026' },
      { metric: 'Break-Even Revenue', value: '$2.95M', periodLabel: 'Q2 2026' },
      { metric: 'Safety Margin', value: '28%', periodLabel: 'Q2 2026' }
    ]
  });

  await prisma.financialCba.createMany({
    data: [
      { metric: 'Project Cost', value: '$860K', periodLabel: 'Q2 2026' },
      { metric: 'Expected Benefit', value: '$1.47M', periodLabel: 'Q2 2026' },
      { metric: 'Benefit-Cost Ratio', value: '1.71', periodLabel: 'Q2 2026' }
    ]
  });

  await prisma.costAccounting.createMany({
    data: [
      { metric: 'Overhead Absorption Rate', value: '132%', periodLabel: 'Q2 2026' },
      { metric: 'Standard Cost Variance', value: '-2.4%', periodLabel: 'Q2 2026' },
      { metric: 'Inventory Carrying Cost', value: '$210K', periodLabel: 'Q2 2026' }
    ]
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
