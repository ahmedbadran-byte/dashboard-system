'use client';

import { useMemo, useState } from 'react';
import { financialTabs } from '@/lib/mock-data';
import clsx from 'clsx';

type TabKey = 'cvp' | 'breakEven' | 'cba' | 'costAccounting';

const tabLabels: Record<TabKey, string> = {
  cvp: 'CVP Analysis',
  breakEven: 'Break-Even Analysis',
  cba: 'Cost-Benefit Analysis',
  costAccounting: 'Cost Accounting'
};

export function FinancialTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>('cvp');

  const rows = useMemo(() => financialTabs[activeTab], [activeTab]);

  return (
    <div className="card p-5">
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
        {(Object.keys(tabLabels) as TabKey[]).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={clsx(
              'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              activeTab === tab ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            )}
          >
            {tabLabels[tab]}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {rows.map((row) => (
          <article key={row.metric} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">{row.metric}</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">{row.value}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
