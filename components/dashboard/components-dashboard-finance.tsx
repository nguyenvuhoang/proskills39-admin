'use client';
import Dropdown from '@/components/dropdown';
import { IRootState } from '@/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ComponentsChartsBar from '../charts/components-charts-bar';
import ComponentsChartsDonut from '../charts/components-charts-donut';
import ComponentsDatatablesBasic from '../datatables/components-datatables-basic';
import IconCaretDown from '../icon/icon-caret-down';
import IconDollarSignCircle from '../icon/icon-dollar-sign-circle';
import IconTrendingDown from '../icon/icon-trending-down';
import IconTrendingUp from '../icon/icon-trending-up';
import IconUser from '../icon/icon-user';
import IconMenuScrumboard from '../icon/menu/icon-menu-scrumboard';

const ComponentsDashboardFinance = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);


    const dataUserOverview = {
        series: [60, 40],
        label: ['Freelancer', 'Client'],
        colors: ['#1DC52E', '#2961CD'],
        height: 200,
        total: 100,
        totallable: "Total User"
    }

    const dataRevenuebyfreelancerlevel
        = {
        series: [325, 681, 681, 325, 325],
        label: [
            'New expert',
            'Vip certified expert',
            'Pro expert',
            'Pro + Expert',
            'Rising talent'
        ],
        colors: ['#1DC52E', '#F3C41E', '#710886', '#EE5050', '#5CC8F2'],
        height: 200,
        total: 2012,
        totallable: "Total revenue"
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

    const dataRevenuebyorders = {
        series: [20, 40, 40],
        label: ['Dispute', 'Processing', 'Completed'],
        colors: ['#2961CD', '#710886', '#1DC52E'],
        height: 200,
        total: 100,
        totallable: "Revenue"
    }

    const dataUserTable = {
        pageSize: [10, 20, 30, 50, 100],
        column: [
            { accessor: 'category', title: 'CATEGORY' },
            { accessor: 'order', title: 'ORDER' },
            { accessor: 'revenue', title: 'REVENUE' }
        ],
        rowData: [
            {
                id: 1,
                category: "Programming & Tech",
                order: "125 orders",
                revenue: "1.517 v2p"
            },
            {
                id: 2,
                category: "Graphics & Design",
                order: "125 orders",
                revenue: "1.517 v2p"
            },
            {
                id: 3,
                category: "Digital Marketing",
                order: "125 orders",
                revenue: "1.517 v2p"
            }
        ],
        title: "Top categories",
        showFooter: false
    }

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const datadash = {
        data: [290, 115, 270, 70, 30, 330, 100]
    }
    const categories = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl">Dashboard overview</h2>
                <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
                    <div className="flex gap-3">
                        <div className="dropdown">
                            <Dropdown
                                offset={[0, 1]}
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="rounded-full btn btn-outline-dark btn-sm dropdown-toggle"
                                button={
                                    <>
                                        Last week
                                        <span className='ml-2'>
                                            <IconCaretDown></IconCaretDown>
                                        </span>
                                    </>
                                }
                            >
                                <ul className="whitespace-nowrap">
                                    <li>
                                        <button type="button" className="w-full">
                                            Last month
                                        </button>
                                    </li>

                                </ul>
                            </Dropdown>
                        </div>

                    </div>
                </div>
            </div>
            <div className="pt-5">
                <div className="mb-6 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 xl:grid-cols-4">
                    <div className="panel ">
                        <div className="flex justify-between">

                            <div className='flex flex-wrap'>
                                <IconUser className='text-gray-600 bg-gray-300 w-8 h-8 rounded-full p-2'></IconUser>
                                <div className="text-md font-semibold ltr:mr-1 rtl:ml-1 text-gray-600 p-2">Users</div>
                            </div>

                        </div>
                        <div className="mt-5 flex items-center">
                            <div className="text-3xl text-gray-600 font-bold ltr:mr-3 rtl:ml-3"> 7.024 </div>
                        </div>
                        <div className="flex items-center text-gray-600 mt-2  justify-between text-base font-bold">
                            In this month
                            <span className="flex text-sm font-normal text-success bg-green-100 rounded-full p-1">
                                <IconTrendingUp className='mx-2' />
                                10%
                            </span>
                        </div>
                    </div>

                    {/* Order */}
                    <div className="panel">
                        <div className="flex justify-between">

                            <div className='flex flex-wrap'>
                                <IconMenuScrumboard className='text-gray-600 bg-gray-300 w-8 h-8 rounded-full p-2' />
                                <div className="text-md font-semibold ltr:mr-1 rtl:ml-1 text-gray-600 p-2">Order</div>
                            </div>

                        </div>
                        <div className="mt-5 flex items-center">
                            <div className="text-3xl text-gray-600 font-bold ltr:mr-3 rtl:ml-3"> 1.456 </div>
                        </div>
                        <div className="flex items-center text-gray-600 mt-2  justify-between text-base font-bold">
                            In this month
                            <span className="flex text-sm font-normal text-success bg-green-100 rounded-full p-1">
                                <IconTrendingUp className='mx-2' />
                                10%
                            </span>
                        </div>
                    </div>

                    {/*  Revenue */}
                    <div className="panel">
                        <div className="flex justify-between">

                            <div className='flex flex-wrap'>
                                <IconDollarSignCircle className='text-gray-600 bg-gray-300 w-8 h-8 rounded-full p-2' />
                                <div className="text-md font-semibold ltr:mr-1 rtl:ml-1 text-gray-600 p-2">Revenue</div>
                            </div>

                        </div>
                        <div className="mt-5 flex items-center">
                            <div className="text-3xl text-gray-600 font-bold ltr:mr-3 rtl:ml-3"> 5.768 v2p </div>
                        </div>
                        <div className="flex items-center text-gray-600 mt-2  justify-between text-base font-bold">
                            In this month
                            <span className="flex text-sm font-normal text-success bg-green-100 rounded-full p-1">
                                <IconTrendingUp className='mx-2' />
                                10%
                            </span>
                        </div>
                    </div>

                    {/* Profit */}
                    <div className="panel">
                        <div className="flex justify-between">

                            <div className='flex flex-wrap'>
                                <IconDollarSignCircle className='text-gray-600 bg-gray-300 w-8 h-8 rounded-full p-2' />
                                <div className="text-md font-semibold ltr:mr-1 rtl:ml-1 text-gray-600 p-2">Profit</div>
                            </div>

                        </div>
                        <div className="mt-5 flex items-center">
                            <div className="text-3xl text-gray-600 font-bold ltr:mr-3 rtl:ml-3"> 3.123 v2p </div>
                        </div>
                        <div className="flex items-center text-gray-600 mt-2  justify-between text-base font-bold">
                            In this month
                            <span className="flex text-sm font-normal text-red-600 bg-red-100 rounded-full p-1">
                                <IconTrendingDown className='mx-2' />
                                10%
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <ComponentsChartsDonut title={'User overview'} data={dataUserOverview} position="right" />
                    <ComponentsDatatablesBasic data={dataUserTable} />
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 my-5">
                    <ComponentsChartsDonut title={'Revenue by orders'} data={dataRevenuebyorders} position='right' />
                    <div className="panel">
                        <p className='text-gray-700'>Average value of orders</p>
                        <div className="mt-5 flex items-center">
                            <div className="text-3xl text-gray-600 font-bold ltr:mr-3 rtl:ml-3"> 125 v2p/order </div>
                        </div>
                        <div className="flex items-center text-gray-600 mt-2  justify-between text-base font-bold">
                            <span className="flex text-sm font-normal text-success bg-green-100 rounded-full p-1">
                                <IconTrendingUp className='mx-2' />
                                10%
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 my-5">
                    <ComponentsChartsBar
                        isHorizontal={false}
                        isVertical={true}
                        data={datadash.data}
                        categories={categories}
                        title="Revenue"
                    />
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <ComponentsChartsDonut
                        title={'Revenue by categories'}
                        data={dataRevenuebycategories}
                        position='bottom' />
                    <ComponentsChartsDonut title={'Revenue by freelancer level'} data={dataRevenuebyfreelancerlevel} position='bottom' />
                </div>


            </div>
        </div>
    );
};

export default ComponentsDashboardFinance;
