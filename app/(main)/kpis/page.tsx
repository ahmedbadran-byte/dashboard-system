import { KpisWorkspace } from '@/components/kpis/kpis-workspace';
import { TopBar } from '@/components/layout/top-bar';

export default function KpisPage() {
  return (
    <div>
      <TopBar title="KPIs" subtitle="Department KPI cards with progress metrics and trend analytics" />
      <KpisWorkspace />
    </div>
  );
}
