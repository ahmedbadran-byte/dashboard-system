import { TopBar } from '@/components/layout/top-bar';
import { ReportsWorkspace } from '@/components/reports/reports-workspace';

export default function ReportsPage() {
  return (
    <div>
      <TopBar title="Reports" subtitle="Department reporting center with filters, cards, and tabular detail" />
      <ReportsWorkspace />
    </div>
  );
}
