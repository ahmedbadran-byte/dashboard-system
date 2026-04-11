import { adminModules } from '@/lib/mock-data';

export default function AdminTranslationsPage() {
  return (
    <section className="p-4 md:p-6">
      <article className="card overflow-x-auto p-5">
        <h3 className="text-lg font-semibold">Language & Translations</h3>
        <table className="mt-4 min-w-full text-sm">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="px-3 py-2">Key</th>
              <th className="px-3 py-2">English</th>
              <th className="px-3 py-2">Arabic</th>
            </tr>
          </thead>
          <tbody>
            {adminModules.translations.map((entry) => (
              <tr key={entry.key} className="border-t border-slate-100">
                <td className="px-3 py-2">{entry.key}</td>
                <td className="px-3 py-2">{entry.en}</td>
                <td className="px-3 py-2">{entry.ar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
