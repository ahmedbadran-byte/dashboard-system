import clsx from 'clsx';
import type { ExecutiveSummaryCard } from '@/lib/mock-data';

const toneClassMap: Record<ExecutiveSummaryCard['tone'], string> = {
  positive: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  neutral: 'text-blue-700 bg-blue-50 border-blue-100',
  warning: 'text-amber-700 bg-amber-50 border-amber-100'
};

export function ExecutiveSummaryCardView({ card }: { card: ExecutiveSummaryCard }) {
  return (
    <article className="card p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-slate-900">{card.title}</h3>
        <span className={clsx('rounded-full border px-2 py-1 text-xs font-semibold', toneClassMap[card.tone])}>{card.delta}</span>
      </div>
      <p className="mt-4 text-3xl font-bold text-slate-900">{card.value}</p>
      <p className="mt-2 text-sm text-slate-600">{card.insight}</p>
    </article>
  );
}
