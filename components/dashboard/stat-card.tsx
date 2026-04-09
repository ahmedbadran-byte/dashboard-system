export function StatCard({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <article className="card p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-xs font-medium text-emerald-600">{trend}</p>
    </article>
  );
}
