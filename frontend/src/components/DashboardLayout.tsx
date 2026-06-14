import type { ClearanceItem, DashboardMetric, UserRole } from '../types';

type DashboardLayoutProps = {
  role: UserRole;
  heading: string;
  description: string;
  metrics: DashboardMetric[];
  items: ClearanceItem[];
};

const roleLabels: Record<UserRole, string> = {
  ADMIN: 'Admin',
  STUDENT: 'Student',
  OFFICE_STAFF: 'Office Staff',
  REGISTRAR: 'Registrar',
};

export function DashboardLayout({ role, heading, description, metrics, items }: DashboardLayoutProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="rounded bg-brand-50 px-2 py-1 text-xs font-semibold text-brand-700">
            {roleLabels[role]}
          </span>
          <h2 className="mt-3 text-xl font-semibold text-slate-950">{heading}</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">{description}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm text-slate-500">{metric.label}</p>
            <p className="mt-2 text-2xl font-bold text-slate-950">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-4 py-3">
          <h3 className="font-semibold text-slate-950">Recent clearance activity</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {items.map((item) => (
            <div key={`${item.title}-${item.owner}`} className="grid gap-2 px-4 py-4 md:grid-cols-3">
              <p className="font-medium text-slate-900">{item.title}</p>
              <p className="text-sm text-slate-600">{item.owner}</p>
              <p className="text-sm font-semibold text-brand-700">{item.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
