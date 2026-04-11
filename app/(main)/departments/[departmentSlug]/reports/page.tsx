import { reportDefinitions, reportInstances } from '@/lib/mock-data';

export default async function DepartmentReportsPage({ params }: { params: Promise<{ departmentSlug: string }> }) {
  const { departmentSlug } = await params;
  const defs = reportDefinitions.filter((item) => item.departmentSlug === departmentSlug);
  const instances = reportInstances.filter((item) => item.departmentSlug === departmentSlug);

  return (
    <section className="space-y-4 p-4 md:p-6">
      <article className="card p-4">
        <h3 className="text-lg font-semibold">Report Definitions</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full text-sm"><thead className="bg-slate-50 text-left"><tr><th className="px-3 py-2">Report name</th><th className="px-3 py-2">Type</th><th className="px-3 py-2">Frequency</th><th className="px-3 py-2">Source</th><th className="px-3 py-2">Display format</th><th className="px-3 py-2">Used in dashboard?</th><th className="px-3 py-2">Used in decision center?</th></tr></thead><tbody>{defs.map((item) => (<tr key={item.id} className="border-t border-slate-100"><td className="px-3 py-2">{item.name}</td><td className="px-3 py-2">{item.type}</td><td className="px-3 py-2">{item.frequency}</td><td className="px-3 py-2">{item.source}</td><td className="px-3 py-2">{item.format}</td><td className="px-3 py-2">{item.usedInDashboard ? 'Yes' : 'No'}</td><td className="px-3 py-2">{item.usedInDecisionCenter ? 'Yes' : 'No'}</td></tr>))}</tbody></table>
        </div>
      </article>

      <article className="card p-4">
        <h3 className="text-lg font-semibold">Report History / Instances</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full text-sm"><thead className="bg-slate-50 text-left"><tr><th className="px-3 py-2">Report name</th><th className="px-3 py-2">Period</th><th className="px-3 py-2">Version</th><th className="px-3 py-2">Created date</th><th className="px-3 py-2">File/data reference</th></tr></thead><tbody>{instances.map((item) => (<tr key={item.id} className="border-t border-slate-100"><td className="px-3 py-2">{item.reportName}</td><td className="px-3 py-2">{item.period}</td><td className="px-3 py-2">v{item.version}</td><td className="px-3 py-2">{item.createdDate}</td><td className="px-3 py-2">{item.fileReference}</td></tr>))}</tbody></table>
        </div>
      </article>
    </section>
  );
}
