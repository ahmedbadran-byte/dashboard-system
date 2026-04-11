import { DecisionCenterWorkspace } from '@/components/decision-center/decision-center-workspace';
import { TopBar } from '@/components/layout/top-bar';

export default function DecisionCenterPage() {
  return (
    <div>
      <TopBar title="Decision Center" subtitle="Global executive outputs grouped by department, period, and report context" />
      <DecisionCenterWorkspace />
    </div>
  );
}
