import { Metadata } from 'next';
import Advanced from '../../datatables/advanced/page';


export const metadata: Metadata = {
    title: 'User dashboard',
};

const FreelancerLevel = () => {
    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl">Freelancer level</h2>
            </div>

            <div className="pt-5">
                <div className="grid grid-cols-1 gap-6 my-5">
                    <Advanced />
                </div>
            </div>
        </div>
    );
};

export default FreelancerLevel;
