import { DashboardLayout } from '../components/DashboardLayout';
import { PageShell } from '../components/PageShell';

export function OfficeStaffDashboardPage() {
  return (
    <PageShell title="Office Staff Dashboard" subtitle="Review only clearance steps assigned to the staff office.">
      <DashboardLayout
        role="OFFICE_STAFF"
        heading="Assigned clearance steps"
        description="This view will later load steps by office assignment from the backend."
        metrics={[
          { label: 'Waiting review', value: '4' },
          { label: 'Approved today', value: '3' },
          { label: 'Rejected today', value: '1' },
        ]}
        items={[
          { title: 'Graduation request', owner: 'Student A', status: 'Waiting' },
          { title: 'Transfer request', owner: 'Student B', status: 'Needs comment' },
          { title: 'Withdrawal request', owner: 'Student C', status: 'Reviewed' },
        ]}
      />
    </PageShell>
  );
}
