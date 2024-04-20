import ComponentsDatatablesExport from '@/components/datatables/components-datatables-export';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'User list',
};



const UserList = () => {

    const rowData = [
        {
            id: 1,
            username: 'Anh Ben',
            avatar: '/assets/images/profile-14.jpeg',
            email: 'nguyenvuhoangz@gmail.com',
            level: {
                title: 'New expert',
                iconlevel: '/assets/images/level/new-expert.png'
            },
            join: {
                date: '2024-04-20',
                time: '14:55 PM'
            },
            status: { tooltip: 'Active', color: 'success' },
            rate: 5,
            location: 'Vietnam'
        },
        {
            id: 2,
            username: 'Lena Le Thi',
            avatar: '/assets/images/profile-14.jpeg',
            email: 'capi@gmai.com',
            level: {
                title: 'New expert',
                iconlevel: '/assets/images/level/new-expert.png'
            },
            join: {
                date: '2024-04-20',
                time: '14:55 PM'
            },
            status: { tooltip: 'InActive', color: 'danger' },
            rate: 5,
            location: 'Vietnam'
        }
    ];

    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl">User list</h2>
                <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
                    <div className="flex gap-3">
                        <div className="flex items-center justify-center">
                            <button type="button" className="btn btn-primary rounded-full">
                                Add User
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="pt-5">
                <div className="grid grid-cols-1 gap-6 my-5">
                    <ComponentsDatatablesExport rowData = {rowData}/>
                </div>
            </div>
        </div>
    );
};

export default UserList;
