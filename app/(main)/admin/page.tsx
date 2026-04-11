import Link from 'next/link';
import { TopBar } from '@/components/layout/top-bar';

const modules = [
  { href: '/admin/departments', label: 'Department Management' },
  { href: '/admin/reports-config', label: 'Reports Configuration' },
  { href: '/admin/kpis-config', label: 'KPI Configuration' },
  { href: '/admin/decision-rules', label: 'Decision Rules' },
  { href: '/admin/translations', label: 'Language & Translations' },
  { href: '/admin/settings', label: 'General Settings' }
];

export default function AdminPage() {
  return (
    <div>
      <TopBar title="Admin Panel" subtitle="Configuration-first modules for dynamic departments, reports, KPIs, decisions, and translations" />
      <section className="grid gap-4 p-4 md:grid-cols-2 md:p-6">
        {modules.map((module) => (
          <Link key={module.href} href={module.href} className="card p-5 transition hover:border-brand-300">
            <h3 className="font-semibold text-slate-900">{module.label}</h3>
            <p className="mt-1 text-sm text-slate-500">Open module</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
