import ComponentsDashboardOrder from '@/components/dashboard/components-dashboard-order';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order dashboard',
};

const OrderDashboard = () => {
  return (
    <ComponentsDashboardOrder />
  )
}

export default OrderDashboard
