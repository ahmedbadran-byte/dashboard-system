import clsx from 'clsx';
import { alertsData } from '@/lib/mock-data';

const severityStyles = {
  Low: 'bg-blue-50 text-blue-700 border-blue-100',
  Medium: 'bg-amber-50 text-amber-700 border-amber-100',
  High: 'bg-orange-50 text-orange-700 border-orange-100',
  Critical: 'bg-rose-50 text-rose-700 border-rose-100'
};

export function AlertsPanel() {
  return (
    <section className="card p-5">
      <h3 className="text-sm font-semibold text-slate-900">Alerts</h3>
      <div className="mt-4 space-y-3">
        {alertsData.map((alert) => (
          <article key={alert.id} className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-900">{alert.title}</p>
              <span className={clsx('rounded-full border px-2 py-1 text-xs font-semibold', severityStyles[alert.severity])}>
                {alert.severity}
              </span>
            </div>
            <p className="mt-1 text-xs font-medium text-slate-500">{alert.category}</p>
            <p className="mt-2 text-sm text-slate-600">{alert.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
