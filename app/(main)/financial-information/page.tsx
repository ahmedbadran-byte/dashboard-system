import { redirect } from 'next/navigation';

export default function LegacyFinancialRedirect() {
  redirect('/decision-center');
}
