import { kpiRecords } from '@/lib/mock-data';

export default async function DepartmentKpisPage({ params }: { params: Promise<{ departmentSlug: string }> }) {
  const { departmentSlug } = await params;
  const items = kpiRecords.filter((kpi) => kpi.departmentSlug === departmentSlug);

  return (
    <section className="p-4 md:p-6">
      <div className="card overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="px-4 py-3">KPI name</th><th className="px-4 py-3">Description</th><th className="px-4 py-3">Target</th><th className="px-4 py-3">Actual</th><th className="px-4 py-3">Trend</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Period</th><th className="px-4 py-3">Owner</th>
            </tr>
          </thead>
          <tbody>
            {items.map((kpi) => (
              <tr key={kpi.id} className="border-t border-slate-100">
                <td className="px-4 py-3">{kpi.name}</td><td className="px-4 py-3">{kpi.description}</td><td className="px-4 py-3">{kpi.target}</td><td className="px-4 py-3">{kpi.actual}</td><td className="px-4 py-3">{kpi.trend}</td><td className="px-4 py-3">{kpi.status}</td><td className="px-4 py-3">{kpi.period}</td><td className="px-4 py-3">{kpi.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
