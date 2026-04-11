'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, FileText, Gauge, LayoutDashboard, Settings2, WalletCards } from 'lucide-react';
import clsx from 'clsx';

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/reports', label: 'Reports', icon: FileText },
  { href: '/kpis', label: 'KPIs', icon: Gauge },
  { href: '/financial-information', label: 'Financial Information', icon: WalletCards },
  { href: '/settings', label: 'Settings', icon: Settings2 }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-r border-slate-200 bg-white px-4 py-6 lg:w-64">
      <div className="mb-8 flex items-center gap-2 px-2">
        <BarChart3 className="h-6 w-6 text-brand-600" />
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">Internal</p>
          <h1 className="font-semibold text-slate-900">Kleen Exec Portal</h1>
        </div>
      </div>
      <nav className="space-y-1">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors',
              pathname === href
                ? 'bg-brand-50 text-brand-700'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
