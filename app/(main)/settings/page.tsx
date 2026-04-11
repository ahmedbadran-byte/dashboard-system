import { TopBar } from '@/components/layout/top-bar';

export default function SettingsPage() {
  return (
    <div>
      <TopBar title="Settings" subtitle="Dashboard controls, access roles, and display preferences" />
      <section className="grid gap-4 p-4 md:grid-cols-2 md:p-6">
        <article className="card p-5">
          <h3 className="text-sm font-semibold text-slate-900">Access Management</h3>
          <p className="mt-2 text-sm text-slate-600">Configure admin users, permission groups, and role templates.</p>
        </article>
        <article className="card p-5">
          <h3 className="text-sm font-semibold text-slate-900">Display Preferences</h3>
          <p className="mt-2 text-sm text-slate-600">Set regional formats, executive views, and dashboard defaults.</p>
        </article>
      </section>
    </div>
  );
}
