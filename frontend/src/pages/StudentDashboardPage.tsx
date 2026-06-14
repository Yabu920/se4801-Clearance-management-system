import { DashboardLayout } from '../components/DashboardLayout';
import { PageShell } from '../components/PageShell';

export function StudentDashboardPage() {
  return (
    <PageShell title="Student Dashboard" subtitle="Track one clearance request and each required office step.">
      <DashboardLayout
        role="STUDENT"
        heading="My clearance progress"
        description="Mock data shows the future student view before real APIs are connected."
        metrics={[
          { label: 'Active requests', value: '1' },
          { label: 'Approved offices', value: '2 / 5' },
          { label: 'Current status', value: 'In review' },
        ]}
        items={[
          { title: 'Library clearance', owner: 'Library Office', status: 'Approved' },
          { title: 'Finance clearance', owner: 'Finance Office', status: 'Pending' },
          { title: 'Department clearance', owner: 'Department Office', status: 'Approved' },
        ]}
      />
    </PageShell>
  );
}
