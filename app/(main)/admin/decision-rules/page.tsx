import { adminModules } from '@/lib/mock-data';

export default function AdminDecisionRulesPage() {
  return (
    <section className="p-4 md:p-6">
      <article className="card p-5">
        <h3 className="text-lg font-semibold">Decision Rules</h3>
        <p className="mt-1 text-sm text-slate-500">Rules engine placeholder for alerts, insights, recommendations.</p>
        <ul className="mt-4 space-y-2 text-sm">
          {adminModules.decisionRules.map((rule) => (
            <li key={rule.id} className="rounded-lg border border-slate-200 p-3">
              <p><strong>Trigger:</strong> {rule.trigger}</p>
              <p><strong>Output:</strong> {rule.output}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
