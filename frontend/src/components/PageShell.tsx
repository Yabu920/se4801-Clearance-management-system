import type { ReactNode } from 'react';

type PageShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <main className="min-h-screen">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
              Student Clearance
            </p>
            <h1 className="mt-1 text-2xl font-bold text-slate-950">{title}</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">{subtitle}</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-8">{children}</section>
    </main>
  );
}
