'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export function DepartmentKpiChart({ data }: { data: Array<{ department: string; score: number }> }) {
  return (
    <div className="card p-5">
      <h3 className="text-sm font-semibold text-slate-900">Department Execution Score</h3>
      <div className="mt-5 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" stroke="#64748b" fontSize={12} />
            <YAxis domain={[70, 100]} stroke="#64748b" fontSize={12} />
            <Tooltip formatter={(value: number) => `${value} / 100`} />
            <Bar dataKey="score" fill="#1847eb" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
