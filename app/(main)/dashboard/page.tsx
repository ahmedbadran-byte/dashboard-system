import { DepartmentKpiChart } from '@/components/charts/department-kpi-chart';
import { RevenueTrendChart } from '@/components/charts/revenue-trend-chart';
import { ExecutiveSummaryCardView } from '@/components/dashboard/executive-summary-card';
import { PrioritiesPanel } from '@/components/dashboard/priorities-panel';
import { TopBar } from '@/components/layout/top-bar';
import { departmentScoreData, executiveSummaryCards, revenueTrendData } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <div>
      <TopBar title="Executive Dashboard" subtitle="Consolidated view of strategic, operational, and financial performance" />
      <section className="space-y-6 p-4 md:p-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {executiveSummaryCards.map((card) => (
            <ExecutiveSummaryCardView key={card.title} card={card} />
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.8fr_1fr]">
          <RevenueTrendChart data={revenueTrendData} />
          <PrioritiesPanel />
        </div>

        <DepartmentKpiChart data={departmentScoreData} />
      </section>
    </div>
  );
}
