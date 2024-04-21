import ComponentsDashboardJob from '@/components/dashboard/components-dashboard-job';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job dashboard',
};

const JobDashboard = () => {
  return (
    <ComponentsDashboardJob />
  )
}

export default JobDashboard
