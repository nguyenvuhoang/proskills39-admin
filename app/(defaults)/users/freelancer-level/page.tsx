import ComponentsDatatablesBasic from '@/components/datatables/components-datatables-basic';
import ComponentsDatatablesExpand from '@/components/datatables/components-datatables-expand';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'User dashboard',
};

const FreelancerLevel = () => {


    const dataFreelancerLevel = {
        pageSize: [10, 20, 30, 50, 100],
        column: [
            { accessor: 'id', title: '#' },
            { accessor: 'levelName', title: 'Level Name' },
            { accessor: 'status', title: 'Status'},
            { accessor: 'action', title: ''}
        ],
        rowData: [
            {
                id: 1,
                levelName: "Rising talent",
                status: "Active"
            },
            {
                id: 2,
                levelName: "New Expert",
                status: "Active",
            },
            {
                id: 3,
                levelName: "Pro Expert",
                status: "Active",
            },
            {
                id: 4,
                levelName: "Pro Expert+",
                status: "Active",
            },
            {
                id: 5,
                levelName: "VIP Certified Expert",
                status: "Active",
            },
            {
                id: 6,
                levelName: "Level 6",
                status: "InActive",
            },
            {
                id: 7,
                levelName: "Level 7",
                status: "InActive",
            }
        ],
        title: "",
        showFooter: false
    }

    const dataFreelancerLevelDetail = {
        pageSize: [10, 20, 30, 50, 100],
        column: [
            { accessor: 'id', title: '#' },
            { accessor: 'requirement', title: 'Requirement' },
            { accessor: 'risingtalent', title: 'Rising talent'},
            { accessor: 'newxpert', title: 'New Expert'},
            { accessor: 'proxpert', title: 'Pro Expert'},
            { accessor: 'proplusxpert', title: 'Pro+ Expert'},
            { accessor: 'vipcertifiedexpert', title: ' VIP Certified Expert'}
           
        ],
        rowData: [
            {
                id: 1,
                levelName: "Rising talent",
                status: "Active"
            },
            {
                id: 2,
                levelName: "New Expert",
                status: "Active",
            },
            {
                id: 3,
                levelName: "Pro Expert",
                status: "Active",
            },
            {
                id: 4,
                levelName: "Pro Expert+",
                status: "Active",
            },
            {
                id: 5,
                levelName: "VIP Certified Expert",
                status: "Active",
            },
            {
                id: 6,
                levelName: "Level 6",
                status: "InActive",
            },
            {
                id: 7,
                levelName: "Level 7",
                status: "InActive",
            }
        ],
        title: "",
        showFooter: false
    }

    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl">Freelancer level</h2>
            </div>

            <div className="pt-5">
                <div className="grid grid-cols-1 gap-6 my-5">
                    <ComponentsDatatablesBasic data={dataFreelancerLevel} />
                </div>
            </div>
            
            <div className="pt-5">
                <div className="grid grid-cols-1 gap-6 my-5">
                    <ComponentsDatatablesExpand data={dataFreelancerLevelDetail} />
                </div>
            </div>
        </div>
    );
};

export default FreelancerLevel;
