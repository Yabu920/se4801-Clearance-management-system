import { DashboardLayout } from '../components/DashboardLayout';
import { PageShell } from '../components/PageShell';

export function AdminDashboardPage() {
  return (
    <PageShell title="Admin Dashboard" subtitle="Manage offices, users, and monitor clearance requests.">
      <DashboardLayout
        role="ADMIN"
        heading="System overview"
        description="Administrative placeholders keep Phase 1 focused on project structure."
        metrics={[
          { label: 'Active offices', value: '5' },
          { label: 'Registered users', value: '24' },
          { label: 'Open requests', value: '8' },
        ]}
        items={[
          { title: 'Office setup', owner: 'Registrar', status: 'Ready' },
          { title: 'User management', owner: 'Admin', status: 'Planned' },
          { title: 'Request monitoring', owner: 'Admin', status: 'Prepared' },
        ]}
      />
    </PageShell>
  );
}
