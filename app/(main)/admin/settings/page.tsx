import { adminModules } from '@/lib/mock-data';

export default function AdminSettingsPage() {
  return (
    <section className="p-4 md:p-6">
      <article className="card p-5">
        <h3 className="text-lg font-semibold">General Settings</h3>
        <ul className="mt-4 space-y-2 text-sm">
          {adminModules.generalSettings.map((setting) => (
            <li key={setting.key} className="rounded-lg border border-slate-200 p-3">
              <strong>{setting.key}</strong>: {setting.value}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
