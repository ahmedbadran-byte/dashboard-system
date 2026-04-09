'use client';

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export function RevenueTrendChart({ data }: { data: Array<{ month: string; revenue: number }> }) {
  return (
    <div className="card p-5">
      <h3 className="text-sm font-semibold text-slate-900">Revenue Trend (in $M)</h3>
      <div className="mt-5 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3379ff" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#3379ff" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
            <YAxis stroke="#64748b" fontSize={12} />
            <Tooltip formatter={(value: number) => `$${value.toFixed(2)}M`} />
            <Area type="monotone" dataKey="revenue" stroke="#1d5cff" fill="url(#revenueFill)" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
