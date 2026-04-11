import { redirect } from 'next/navigation';

export default function LegacyKpisRedirect() {
  redirect('/decision-center');
}
