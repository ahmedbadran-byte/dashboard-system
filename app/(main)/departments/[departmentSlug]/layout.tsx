import Link from 'next/link';
import { departments } from '@/lib/mock-data';
import { notFound } from 'next/navigation';

const tabs = [
  { href: 'dashboard', label: 'Dashboard' },
  { href: 'kpis', label: 'KPIs' },
  { href: 'reports', label: 'Reports' },
  { href: 'structure', label: 'Structure' }
];

export default async function DepartmentLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ departmentSlug: string }>;
}) {
  const { departmentSlug } = await params;
  const department = departments.find((item) => item.slug === departmentSlug);
  if (!department) notFound();

  return (
    <div>
      <div className="border-b border-slate-200 bg-white px-4 py-4 md:px-6">
        <h2 className="text-2xl font-semibold text-slate-900">{department.nameEn}</h2>
        <p className="text-sm text-slate-500">Template-driven department workspace</p>
        <nav className="mt-4 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <Link key={tab.href} href={`/departments/${departmentSlug}/${tab.href}`} className="rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700">
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
      {children}
    </div>
  );
}
