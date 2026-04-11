'use client';

import { useMemo, useState } from 'react';
import { reportsData } from '@/lib/mock-data';

const departments = ['All Departments', ...new Set(reportsData.map((report) => report.department))];
const periods = ['All Periods', ...new Set(reportsData.map((report) => report.period))];

export function ReportsWorkspace() {
  const [department, setDepartment] = useState('All Departments');
  const [period, setPeriod] = useState('All Periods');

  const filteredReports = useMemo(
    () =>
      reportsData.filter(
        (report) =>
          (department === 'All Departments' || report.department === department) &&
          (period === 'All Periods' || report.period === period)
      ),
    [department, period]
  );

  return (
    <section className="space-y-4 p-4 md:p-6">
      <div className="card p-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-1 text-sm">
            <span className="font-medium text-slate-700">Department</span>
            <select
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
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
            <span className="font-medium text-slate-700">Period</span>
            <select
              value={period}
              onChange={(event) => setPeriod(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            >
              {periods.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {filteredReports.map((report) => (
          <article key={report.id} className="card p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-slate-900">{report.title}</h3>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">{report.status}</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{report.summary}</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-600 sm:grid-cols-3">
              <p>
                <span className="font-semibold text-slate-700">Department:</span> {report.department}
              </p>
              <p>
                <span className="font-semibold text-slate-700">Type:</span> {report.type}
              </p>
              <p>
                <span className="font-semibold text-slate-700">Period:</span> {report.period}
              </p>
              <p>
                <span className="font-semibold text-slate-700">Owner:</span> {report.owner}
              </p>
              <a href={report.fileUrl} className="font-semibold text-brand-700 underline">
                View file
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="card overflow-x-auto">
        <table className="min-w-[1000px] divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-slate-600">
            <tr>
              <th className="px-4 py-3 font-semibold">Title</th>
              <th className="px-4 py-3 font-semibold">Department</th>
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="px-4 py-3 font-semibold">Period</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Owner</th>
              <th className="px-4 py-3 font-semibold">Summary</th>
              <th className="px-4 py-3 font-semibold">File</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {filteredReports.map((report) => (
              <tr key={`row-${report.id}`}>
                <td className="px-4 py-3 font-medium text-slate-900">{report.title}</td>
                <td className="px-4 py-3">{report.department}</td>
                <td className="px-4 py-3">{report.type}</td>
                <td className="px-4 py-3">{report.period}</td>
                <td className="px-4 py-3">{report.status}</td>
                <td className="px-4 py-3">{report.owner}</td>
                <td className="px-4 py-3">{report.summary}</td>
                <td className="px-4 py-3">
                  <a href={report.fileUrl} className="font-semibold text-brand-700 underline">
                    Open
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
