export type UserRole = 'ADMIN' | 'STUDENT' | 'OFFICE_STAFF' | 'REGISTRAR';

export type DashboardMetric = {
  label: string;
  value: string;
};

export type ClearanceItem = {
  title: string;
  status: string;
  owner: string;
};
