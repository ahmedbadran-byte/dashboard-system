import { executivePriorities } from '@/lib/mock-data';

export function PrioritiesPanel() {
  return (
    <section className="card p-5">
      <h3 className="text-sm font-semibold text-slate-900">Executive Priority Tracker</h3>
      <div className="mt-4 space-y-4">
        {executivePriorities.map((priority) => (
          <article key={priority.title} className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center justify-between gap-3">
              <h4 className="font-medium text-slate-900">{priority.title}</h4>
              <span className="text-sm font-semibold text-slate-700">{priority.progress}%</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Owner: {priority.owner}</p>
            <div className="mt-3 h-2 rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-brand-600" style={{ width: `${priority.progress}%` }} />
            </div>
            <p className="mt-2 text-sm text-slate-600">{priority.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
