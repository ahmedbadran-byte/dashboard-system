'use client';

import { useMemo, useState } from 'react';
import { kpiRows, kpiTrendData } from '@/lib/mock-data';
import clsx from 'clsx';
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

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
  const [startDate, setStartDate] = useState('2026-01-01');
  const [endDate, setEndDate] = useState('2026-06-30');

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

  const departmentComparison = useMemo(
    () =>
      departments
        .filter((department) => department !== 'All')
        .map((department) => {
          const departmentKpis = kpiRows.filter((kpi) => kpi.department === department);
          const avgAchievement = Math.round(
            departmentKpis.reduce((acc, item) => acc + (item.actual / item.target) * 100, 0) / departmentKpis.length
          );
          return { department, achievement: avgAchievement };
        }),
    []
  );

  return (
    <section className="space-y-4 p-4 md:p-6">
      <div className="card p-4">
        <div className="grid gap-4 md:grid-cols-3">
          <label className="space-y-1 text-sm">
            <span className="font-medium text-slate-700">Department</span>
            <select
              value={activeDepartment}
              onChange={(event) => setActiveDepartment(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            >
              {departments.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-1 text-sm">
            <span className="font-medium text-slate-700">Date range start</span>
            <input
              type="date"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </label>

          <label className="space-y-1 text-sm">
            <span className="font-medium text-slate-700">Date range end</span>
            <input
              type="date"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </label>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Showing KPI trends for {startDate} to {endDate}.
        </p>
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

      <div className="grid gap-4 xl:grid-cols-2">
        <div className="card p-5">
          <h3 className="text-sm font-semibold text-slate-900">KPI Trend Over Time ({activeDepartment})</h3>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[75, 100]} />
                <Tooltip formatter={(value: number) => `${value}%`} />
                <Line type="monotone" dataKey="value" stroke="#0d9488" strokeWidth={3} dot />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold text-slate-900">Department Comparison (Achievement)</h3>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" />
                <YAxis domain={[85, 105]} />
                <Tooltip formatter={(value: number) => `${value}%`} />
                <Bar dataKey="achievement" fill="#1d5cff" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
