import { departmentDashboardData, decisionItems } from '@/lib/mock-data';

export default async function DepartmentDashboardPage({ params }: { params: Promise<{ departmentSlug: string }> }) {
  const { departmentSlug } = await params;
  const alerts = decisionItems.alerts.filter((x) => x.departmentSlug === departmentSlug);
  const insights = decisionItems.insights.filter((x) => x.departmentSlug === departmentSlug);
  const recommendations = decisionItems.recommendations.filter((x) => x.departmentSlug === departmentSlug);

  return (
    <section className="space-y-4 p-4 md:p-6">
      <div className="grid gap-4 md:grid-cols-2">
        {departmentDashboardData.kpiSummary.map((item) => (
          <article key={item.name} className="card p-4">
            <p className="text-sm text-slate-500">{item.name}</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">{item.actual}</p>
            <p className="text-xs text-slate-500">Target {item.target} · {item.period}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <article className="card p-4">
          <h3 className="font-semibold">Alerts</h3>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">{alerts.map((x) => <li key={x.id}>{x.title}</li>)}</ul>
        </article>
        <article className="card p-4">
          <h3 className="font-semibold">Insights</h3>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">{insights.map((x) => <li key={x.id}>{x.summary}</li>)}</ul>
        </article>
        <article className="card p-4">
          <h3 className="font-semibold">Recommendations</h3>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">{recommendations.map((x) => <li key={x.id}>{x.action}</li>)}</ul>
        </article>
      </div>
    </section>
  );
}
