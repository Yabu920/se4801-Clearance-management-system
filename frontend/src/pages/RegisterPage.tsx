import { PageShell } from '../components/PageShell';

export function RegisterPage() {
  return (
    <PageShell
      title="Student Registration"
      subtitle="This form captures the fields students will need before clearance requests are available."
    >
      <form className="grid max-w-3xl gap-4 rounded border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
        {['Full name', 'Email', 'Student ID', 'Department', 'Program', 'Year of study'].map((label) => (
          <label key={label} className="block text-sm font-medium text-slate-700">
            {label}
            <input className="mt-1 w-full rounded border border-slate-300 px-3 py-2 text-sm" />
          </label>
        ))}
        <button className="rounded bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 md:col-span-2">
          Create account
        </button>
      </form>
    </PageShell>
  );
}
