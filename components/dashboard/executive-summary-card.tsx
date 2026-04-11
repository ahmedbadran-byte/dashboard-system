import clsx from 'clsx';
import type { ExecutiveKpiCard } from '@/lib/mock-data';

const statusStyles: Record<ExecutiveKpiCard['status'], string> = {
  Good: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  Warning: 'bg-amber-50 text-amber-700 border-amber-100',
  Critical: 'bg-rose-50 text-rose-700 border-rose-100'
};

function formatValue(value: number, unit: ExecutiveKpiCard['unit']) {
  if (unit === '$M') return `$${value.toFixed(1)}M`;
  return `${value}${unit}`;
}

export function ExecutiveSummaryCardView({ card }: { card: ExecutiveKpiCard }) {
  const delta = card.value - card.previous;
  const isUnderperforming = card.value < card.target;

  return (
    <article className={clsx('card p-5', isUnderperforming && 'border-rose-300 bg-rose-50/30')}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">{card.department}</p>
          <h3 className="text-base font-semibold text-slate-900">{card.label}</h3>
        </div>
        <span className={clsx('rounded-full border px-2 py-1 text-xs font-semibold', statusStyles[card.status])}>{card.status}</span>
      </div>

      <p className={clsx('mt-4 text-3xl font-bold', isUnderperforming ? 'text-rose-700' : 'text-slate-900')}>
        {formatValue(card.value, card.unit)}
      </p>
      <p className="mt-1 text-xs text-slate-500">
        Target: {formatValue(card.target, card.unit)}
      </p>
      <p className={clsx('mt-2 text-sm font-medium', delta >= 0 ? 'text-emerald-700' : 'text-rose-700')}>
        {card.comparisonLabel}: {delta >= 0 ? '+' : ''}
        {delta.toFixed(1)}
        {card.unit}
      </p>
      <p className="mt-2 text-sm text-slate-600">{card.insight}</p>
    </article>
  );
}
