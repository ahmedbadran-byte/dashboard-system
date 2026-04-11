import { adminModules } from '@/lib/mock-data';

export default function AdminKpisConfigPage() {
  return (
    <section className="p-4 md:p-6">
      <article className="card overflow-x-auto p-5">
        <h3 className="text-lg font-semibold">KPI Configuration</h3>
        <table className="mt-4 min-w-full text-sm">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="px-3 py-2">KPI name</th>
              <th className="px-3 py-2">Description</th>
              <th className="px-3 py-2">Unit</th>
              <th className="px-3 py-2">Target</th>
              <th className="px-3 py-2">Frequency</th>
            </tr>
          </thead>
          <tbody>
            {adminModules.kpiConfiguration.map((item) => (
              <tr key={item.id} className="border-t border-slate-100">
                <td className="px-3 py-2">{item.name}</td>
                <td className="px-3 py-2">{item.description}</td>
                <td className="px-3 py-2">{item.target.includes('%') ? '%' : 'unit'}</td>
                <td className="px-3 py-2">{item.target}</td>
                <td className="px-3 py-2">Monthly</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
