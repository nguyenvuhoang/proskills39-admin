import ComponentsDatatablesAdvanced from '@/components/datatables/components-datatables-advanced';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Advanced Table',
};

const Advanced = () => {
    return (
        <div>
            <ComponentsDatatablesAdvanced />
        </div>
    );
};

export default Advanced;
