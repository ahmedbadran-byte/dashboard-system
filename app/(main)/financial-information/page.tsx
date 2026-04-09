import { FinancialWorkspace } from '@/components/financial/financial-workspace';
import { TopBar } from '@/components/layout/top-bar';

export default function FinancialInformationPage() {
  return (
    <div>
      <TopBar title="Financial Information" subtitle="Scenario analysis and management accounting decision support" />
      <FinancialWorkspace />
    </div>
  );
}
