import ComponentsDashboardFinance from '@/components/dashboard/components-dashboard-finance';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Proskills Admin',
};

const Finance = () => {
    return <ComponentsDashboardFinance />;
};

export default Finance;
