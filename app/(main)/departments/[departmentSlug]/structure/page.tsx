import { structureRoles } from '@/lib/mock-data';

export default async function DepartmentStructurePage({ params }: { params: Promise<{ departmentSlug: string }> }) {
  const { departmentSlug } = await params;
  const roles = structureRoles.filter((role) => role.departmentSlug === departmentSlug);

  return (
    <section className="space-y-4 p-4 md:p-6">
      <article className="card p-4">
        <h3 className="text-lg font-semibold">Org chart placeholder</h3>
        <div className="mt-3 rounded-xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">Organizational chart visualization area (placeholder)</div>
      </article>
      <article className="card p-4">
        <h3 className="text-lg font-semibold">Roles</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full text-sm"><thead className="bg-slate-50 text-left"><tr><th className="px-3 py-2">Role name</th><th className="px-3 py-2">Assigned person</th><th className="px-3 py-2">Headcount</th><th className="px-3 py-2">Vacant positions</th><th className="px-3 py-2">Job description</th></tr></thead><tbody>{roles.map((role) => (<tr key={role.id} className="border-t border-slate-100"><td className="px-3 py-2">{role.roleName}</td><td className="px-3 py-2">{role.assignedPerson}</td><td className="px-3 py-2">{role.headcount}</td><td className="px-3 py-2">{role.vacantPositions}</td><td className="px-3 py-2">{role.jobDescription}</td></tr>))}</tbody></table>
        </div>
      </article>
    </section>
  );
}
