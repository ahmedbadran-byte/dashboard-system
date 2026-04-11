'use client';

import { LanguageSwitcher } from '@/components/layout/language-switcher';
import { useLanguage } from '@/components/providers/language-provider';

export function TopBar({ title, subtitle }: { title: string; subtitle: string }) {
  const { t } = useLanguage();

  return (
    <header className="border-b border-slate-200 bg-white px-4 py-4 md:px-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">{title}</h2>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">{t('language')}</span>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
