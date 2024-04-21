import ComponentsChartsDonut from '@/components/charts/components-charts-donut';
import ComponentsDatatablesBasic from '@/components/datatables/components-datatables-basic';
import ComponentsDatatablesExpand from '@/components/datatables/components-datatables-expand';
import IconTrendingDown from '@/components/icon/icon-trending-down';
import IconTrendingUp from '@/components/icon/icon-trending-up';
import IconUser from '@/components/icon/icon-user';
import IconUsers from '@/components/icon/icon-users';
import IconWallet from '@/components/icon/icon-wallet';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'User dashboard',
};

const ManagedServiceFee = () => {


    const dataFreelancerLevel = {
        pageSize: [10, 20, 30, 50, 100],
        column: [
            { accessor: 'id', title: '#' },
            { accessor: 'serviceFeeName', title: 'Service fee name' },
            { accessor: 'price', title: 'Price' },
            { accessor: 'dateCreated', title: 'Date created', sortable: true },
            { accessor: 'dateApplication', title: 'Application date', sortable: true },
            { accessor: 'dateEnd', title: 'End date', sortable: true },
            { accessor: 'statusUserFee', title: 'User Fee', sortable: true },
            { accessor: 'action', title: '' }
        ],
        rowData: [
            {
                id: 1,
                serviceFeeName: "Payment Processing Fee",
                price: "500 v2p",
                dateCreated: {
                    date: '26 Jan 2024',
                    time: '14:55 PM'
                },
                dateApplication: {
                    date: '26 Jan 2024',
                    time: '00:00 AM'
                },
                dateEnd: {
                    date: '01/Feb/2024',
                    time: '00:00 AM'
                },
                statusUserFee: {
                    title: 'Free lancer',
                    color: 'warning'
                }
            },
            {
                id: 2,
                serviceFeeName: "Membership Fee",
                price: "500 v2p",
                dateCreated: {
                    date: '26 Jan 2024',
                    time: '14:55 PM'
                },
                dateApplication: {
                    date: '26 Jan 2024',
                    time: '00:00 AM'
                },
                dateEnd: {
                    date: '01/Feb/2024',
                    time: '00:00 AM'
                },
                statusUserFee: {
                    title: 'Free lancer',
                    color: 'warning'
                }
            },
            {
                id: 3,
                serviceFeeName: "Freelancer Plus",
                price: "500 v2p",
                dateCreated: {
                    date: '26 Jan 2024',
                    time: '14:55 PM'
                },
                dateApplication: {
                    date: '26 Jan 2024',
                    time: '00:00 AM'
                },
                dateEnd: {
                    date: '01/Feb/2024',
                    time: '00:00 AM'
                },
                statusUserFee: {
                    title: 'Free lancer',
                    color: 'warning'
                }
            },
            {
                id: 4,
                serviceFeeName: "Featured Job Fee",
                price: "500 v2p",
                dateCreated: {
                    date: '26 Jan 2024',
                    time: '14:55 PM'
                },
                dateApplication: {
                    date: '26 Jan 2024',
                    time: '00:00 AM'
                },
                dateEnd: {
                    date: '01/Feb/2024',
                    time: '00:00 AM'
                },
                statusUserFee: {
                    title: 'Client',
                    color: 'info'
                }
            },
            {
                id: 5,
                serviceFeeName: "Membership Fee",
                price: "500 v2p",
                dateCreated: {
                    date: '26 Jan 2024',
                    time: '14:55 PM'
                },
                dateApplication: {
                    date: '26 Jan 2024',
                    time: '00:00 AM'
                },
                dateEnd: {
                    date: '01/Feb/2024',
                    time: '00:00 AM'
                },
                statusUserFee: {
                    title: 'All user',
                    color: 'success'
                }
            }
        ],
        title: "Service fees history",
        showFooter: false
    }


    const dataRevenuebycategories = {
        series: [17, 12, 8, 11, 9, 17, 11, 5, 8, 2],
        label: [
            'Programming & Tech',
            'Video & Animation',
            'Graphics & Design',
            'Digital Marketing',
            'Writing & Translation',
            'Lifestyle',
            'Business',
            'Music & Audio',
            'Trending',
            'AI Services'
        ],
        colors: [
            '#2961CD',
            '#5CC8F2',
            '#1DC52E',
            '#EE5050',
            '#DD914A',
            '#710886',
            '#072C75',
            '#D1DFFA',
            '#F3C41E',
            '#A5A7AF'

        ],
        height: 200,
        total: 100,
        totallable: "Total revenue"
    }


    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl">Manage service fees</h2>
            </div>

            <div className="pt-5">
                <div className="grid grid-cols-1 gap-6 my-5">
                    <ComponentsDatatablesBasic data={dataFreelancerLevel} />
                </div>
            </div>

            <div className="pt-5">
                <div className="panel my-5">
                    <h3 className="text-xl">Total service fee</h3>
                    <div className="my-6 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 xl:grid-cols-3">
                        {/* Total service fee */}
                        <div className="panel ">
                            <div className="flex justify-between">
                                <div className='flex flex-wrap'>
                                    <IconWallet className='text-gray-600 bg-gray-300 w-8 h-8 rounded-full p-2'></IconWallet>
                                    <div className="text-md font-semibold ltr:mr-1 rtl:ml-1 text-gray-600 p-2">Total service fee</div>
                                </div>

                            </div>
                            <div className="mt-5 flex items-center">
                                <div className="text-3xl text-gray-600 font-bold ltr:mr-3 rtl:ml-3"> 9000 v2p </div>
                            </div>
                            <div className="flex items-center text-gray-600 mt-2  justify-between text-base font-bold">
                                In this month
                                <span className="flex text-sm font-normal text-danger bg-red-100 rounded-full p-1">
                                    <IconTrendingDown className='mx-2' />
                                    10%
                                </span>
                            </div>
                        </div>

                        {/* Client's service fee */}
                        <div className="panel">
                            <div className="flex justify-between">

                                <div className='flex flex-wrap'>
                                    <IconUser className='text-gray-600 bg-gray-300 w-8 h-8 rounded-full p-2' />
                                    <div className="text-md font-semibold ltr:mr-1 rtl:ml-1 text-gray-600 p-2">Client&rsquo;s service fee</div>
                                </div>

                            </div>
                            <div className="mt-5 flex items-center">
                                <div className="text-3xl text-gray-600 font-bold ltr:mr-3 rtl:ml-3"> 3000 v2p</div>
                            </div>
                            <div className="flex items-center text-gray-600 mt-2  justify-between text-base font-bold">
                                In this month
                                <span className="flex text-sm font-normal text-success bg-green-100 rounded-full p-1">
                                    <IconTrendingUp className='mx-2' />
                                    10%
                                </span>
                            </div>
                        </div>

                        {/*  Freelance's service fee */}
                        <div className="panel">
                            <div className="flex justify-between">

                                <div className='flex flex-wrap'>
                                    <IconUsers className='text-gray-600 bg-gray-300 w-8 h-8 rounded-full p-2' />
                                    <div className="text-md font-semibold ltr:mr-1 rtl:ml-1 text-gray-600 p-2">Freelance&rsquo;s service fee</div>
                                </div>

                            </div>
                            <div className="mt-5 flex items-center">
                                <div className="text-3xl text-gray-600 font-bold ltr:mr-3 rtl:ml-3"> 6000 v2p </div>
                            </div>
                            <div className="flex items-center text-gray-600 mt-2  justify-between text-base font-bold">
                                In this month
                                <span className="flex text-sm font-normal text-danger bg-red-100 rounded-full p-1">
                                    <IconTrendingDown className='mx-2' />
                                    10%
                                </span>
                            </div>
                        </div>

                    </div>
                </div>




            </div>

            <div className="pt-5">
                <ComponentsChartsDonut
                    title={'Revenue by freelancer level'}
                    data={dataRevenuebycategories}
                    position='right' />
            </div>

        </div>
    );
};

export default ManagedServiceFee;
