import { adminModules } from '@/lib/mock-data';

export default function AdminReportsConfigPage() {
  return (
    <section className="p-4 md:p-6">
      <article className="card overflow-x-auto p-5">
        <h3 className="text-lg font-semibold">Reports Configuration</h3>
        <table className="mt-4 min-w-full text-sm">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="px-3 py-2">Report name</th>
              <th className="px-3 py-2">Frequency</th>
              <th className="px-3 py-2">Source</th>
              <th className="px-3 py-2">Format</th>
              <th className="px-3 py-2">Used in dashboard?</th>
              <th className="px-3 py-2">Used in decision center?</th>
            </tr>
          </thead>
          <tbody>
            {adminModules.reportsConfiguration.map((item) => (
              <tr key={item.id} className="border-t border-slate-100">
                <td className="px-3 py-2">{item.name}</td>
                <td className="px-3 py-2">{item.frequency}</td>
                <td className="px-3 py-2">{item.source}</td>
                <td className="px-3 py-2">{item.format}</td>
                <td className="px-3 py-2">{item.usedInDashboard ? 'Yes' : 'No'}</td>
                <td className="px-3 py-2">{item.usedInDecisionCenter ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
