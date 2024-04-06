import ComponentsDashboardHome from '@/components/dashboard/components-dashboard-home';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Proskills Admin',
};

const Finance = () => {
    return <ComponentsDashboardHome />;
};

export default Finance;
