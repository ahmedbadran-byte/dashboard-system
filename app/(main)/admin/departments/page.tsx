import { adminModules } from '@/lib/mock-data';

export default function AdminDepartmentsPage() {
  return (
    <section className="p-4 md:p-6">
      <article className="card p-5">
        <h3 className="text-lg font-semibold">Department Management</h3>
        <p className="mt-1 text-sm text-slate-500">Placeholder controls: add, edit, delete, reorder.</p>
        <ul className="mt-4 space-y-2 text-sm">
          {adminModules.departmentManagement.map((department) => (
            <li key={department.id} className="rounded-lg border border-slate-200 p-3">
              {department.nameEn} / {department.nameAr} (order: {department.order})
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
