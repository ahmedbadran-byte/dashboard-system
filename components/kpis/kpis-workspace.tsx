'use client';

import { useMemo, useState } from 'react';
import { kpiRows, kpiTrendData } from '@/lib/mock-data';
import clsx from 'clsx';
import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const departments = ['All', ...new Set(kpiRows.map((kpi) => kpi.department))];

const trendKeyByDepartment = {
  Finance: 'finance',
  Operations: 'operations',
  Sales: 'sales',
  HR: 'hr',
  Technology: 'technology'
} as const;

const statusClass = {
  'On Track': 'bg-emerald-50 text-emerald-700',
  'At Risk': 'bg-amber-50 text-amber-700',
  'Off Track': 'bg-rose-50 text-rose-700'
};

export function KpisWorkspace() {
  const [activeDepartment, setActiveDepartment] = useState('All');

  const filtered = useMemo(
    () => (activeDepartment === 'All' ? kpiRows : kpiRows.filter((kpi) => kpi.department === activeDepartment)),
    [activeDepartment]
  );

  const trendData = useMemo(() => {
    if (activeDepartment === 'All') {
      return kpiTrendData.map((point) => ({
        month: point.month,
        value: Math.round((point.finance + point.operations + point.sales + point.hr + point.technology) / 5)
      }));
    }

    const key = trendKeyByDepartment[activeDepartment as keyof typeof trendKeyByDepartment];
    return kpiTrendData.map((point) => ({ month: point.month, value: point[key] }));
  }, [activeDepartment]);

  return (
    <section className="space-y-4 p-4 md:p-6">
      <div className="card p-4">
        <label className="space-y-1 text-sm">
          <span className="font-medium text-slate-700">Department</span>
          <select
            value={activeDepartment}
            onChange={(event) => setActiveDepartment(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm md:max-w-xs"
          >
            {departments.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((kpi) => {
          const achievement = Math.round((kpi.actual / kpi.target) * 100);
          return (
            <article key={kpi.id} className="card p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-500">{kpi.department}</p>
                  <h3 className="text-lg font-semibold text-slate-900">{kpi.name}</h3>
                </div>
                <span className={clsx('rounded-full px-2 py-1 text-xs font-semibold', statusClass[kpi.status])}>{kpi.status}</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <p>
                  <span className="text-slate-500">Target:</span> {kpi.target}
                  {kpi.unit}
                </p>
                <p>
                  <span className="text-slate-500">Actual:</span> {kpi.actual}
                  {kpi.unit}
                </p>
                <p>
                  <span className="text-slate-500">Achievement:</span> {achievement}%
                </p>
                <p>
                  <span className="text-slate-500">Trend:</span> {kpi.trend}
                </p>
              </div>

              <p className="mt-3 text-xs text-slate-500">Last update: {kpi.lastUpdated}</p>
            </article>
          );
        })}
      </div>

      <div className="card p-5">
        <h3 className="text-sm font-semibold text-slate-900">KPI Trend ({activeDepartment})</h3>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[75, 100]} />
              <Tooltip formatter={(value: number) => `${value}%`} />
              <Line type="monotone" dataKey="value" stroke="#1d5cff" strokeWidth={3} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
