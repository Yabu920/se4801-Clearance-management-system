import { DashboardLayout } from '../components/DashboardLayout';
import { PageShell } from '../components/PageShell';

export function RegistrarDashboardPage() {
  return (
    <PageShell title="Registrar Dashboard" subtitle="Finalize requests only after all required offices approve.">
      <DashboardLayout
        role="REGISTRAR"
        heading="Ready for final decision"
        description="Registrar review is intentionally separate from office approval in the workflow."
        metrics={[
          { label: 'Ready requests', value: '2' },
          { label: 'Finalized this week', value: '6' },
          { label: 'Returned requests', value: '1' },
        ]}
        items={[
          { title: 'Graduation clearance', owner: 'Student D', status: 'Ready for final approval' },
          { title: 'Transfer clearance', owner: 'Student E', status: 'Ready for final approval' },
          { title: 'Withdrawal clearance', owner: 'Student F', status: 'Office review pending' },
        ]}
      />
    </PageShell>
  );
}
