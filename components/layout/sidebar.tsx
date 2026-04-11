'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { departments } from '@/lib/mock-data';
import { useLanguage } from '@/components/providers/language-provider';

const tabs = [
  { key: 'dashboard', path: 'dashboard' },
  { key: 'kpis', path: 'kpis' },
  { key: 'reports', path: 'reports' },
  { key: 'structure', path: 'structure' }
] as const;

export function Sidebar() {
  const pathname = usePathname();
  const { t, language } = useLanguage();

  return (
    <aside className="w-full border-r border-slate-200 bg-white px-4 py-6 lg:w-80">
      <div className="mb-6 rounded-2xl bg-gradient-to-r from-brand-700 to-cyan-600 px-3 py-4 text-white">
        <p className="text-xs uppercase tracking-wide text-white/80">Kleen</p>
        <h1 className="text-lg font-semibold">{t('appTitle')}</h1>
      </div>

      <nav className="space-y-6">
        <section>
          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{t('decisionCenter')}</p>
          <Link
            href="/decision-center"
            className={clsx('block rounded-lg px-3 py-2 text-sm', pathname === '/decision-center' ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100')}
          >
            {t('decisionCenter')}
          </Link>
        </section>

        <section>
          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{t('departments')}</p>
          <div className="space-y-3">
            {departments
              .sort((a, b) => a.order - b.order)
              .map((department) => (
                <div key={department.id} className="rounded-xl border border-slate-200 p-2">
                  <p className="px-2 text-sm font-semibold text-slate-800">{language === 'ar' ? department.nameAr : department.nameEn}</p>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    {tabs.map((tab) => {
                      const href = `/departments/${department.slug}/${tab.path}`;
                      return (
                        <Link
                          key={tab.key}
                          href={href}
                          className={clsx('rounded-md px-2 py-1 text-xs', pathname === href ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100')}
                        >
                          {t(tab.key)}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>
        </section>

        <section>
          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{t('adminPanel')}</p>
          <Link
            href="/admin"
            className={clsx('block rounded-lg px-3 py-2 text-sm', pathname.startsWith('/admin') ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100')}
          >
            {t('adminPanel')}
          </Link>
        </section>
      </nav>
    </aside>
  );
}
