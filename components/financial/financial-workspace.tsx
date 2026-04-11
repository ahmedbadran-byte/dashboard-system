'use client';

import { useMemo, useState } from 'react';
import { financialModules, type FinancialTabKey } from '@/lib/mock-data';
import clsx from 'clsx';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const tabs: Record<FinancialTabKey, string> = {
  cvp: 'CVP Analysis',
  breakEven: 'Break-Even Analysis',
  cba: 'Cost-Benefit Analysis',
  costAccounting: 'Cost Accounting'
};

export function FinancialWorkspace() {
  const [activeTab, setActiveTab] = useState<FinancialTabKey>('cvp');
  const data = useMemo(() => financialModules[activeTab], [activeTab]);

  return (
    <section className="space-y-4 p-4 md:p-6">
      <div className="card p-4">
        <div className="flex flex-wrap gap-2">
          {(Object.keys(tabs) as FinancialTabKey[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={clsx(
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                activeTab === tab ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              )}
            >
              {tabs[tab]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {data.cards.map((card) => (
          <article key={card.label} className="card p-5">
            <p className="text-sm text-slate-500">{card.label}</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{card.value}</p>
            <p className="mt-2 text-xs text-slate-600">{card.note}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.5fr_1fr]">
        <div className="card p-5">
          <h3 className="text-sm font-semibold text-slate-900">Actual vs Plan Trend</h3>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.chart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="actual" stroke="#1d5cff" strokeWidth={3} dot />
                <Line type="monotone" dataKey="plan" stroke="#f59e0b" strokeWidth={2} strokeDasharray="6 4" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-slate-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Item</th>
                <th className="px-4 py-3 font-semibold">Value</th>
                <th className="px-4 py-3 font-semibold">Comment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {data.table.map((row) => (
                <tr key={row.item}>
                  <td className="px-4 py-3 font-medium text-slate-900">{row.item}</td>
                  <td className="px-4 py-3">{row.value}</td>
                  <td className="px-4 py-3 text-slate-600">{row.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
