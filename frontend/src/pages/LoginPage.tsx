import { PageShell } from '../components/PageShell';

export function LoginPage() {
  return (
    <PageShell
      title="Login"
      subtitle="Sign in pages are prepared for the demo; backend authentication will be added in a later phase."
    >
      <form className="max-w-md space-y-4 rounded border border-slate-200 bg-white p-6 shadow-sm">
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input
            className="mt-1 w-full rounded border border-slate-300 px-3 py-2 text-sm"
            placeholder="student@example.edu"
            type="email"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Password
          <input
            className="mt-1 w-full rounded border border-slate-300 px-3 py-2 text-sm"
            placeholder="Password"
            type="password"
          />
        </label>
        <button className="w-full rounded bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
          Login
        </button>
      </form>
    </PageShell>
  );
}
