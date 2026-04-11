import { keyInsights } from '@/lib/mock-data';

export function KeyInsights() {
  return (
    <section className="card p-5">
      <h3 className="text-sm font-semibold text-slate-900">Key Insights</h3>
      <ul className="mt-4 space-y-3">
        {keyInsights.map((insight) => (
          <li key={insight} className="rounded-xl border border-brand-100 bg-brand-50/40 p-4 text-sm text-slate-700">
            {insight}
          </li>
        ))}
      </ul>
    </section>
  );
}
