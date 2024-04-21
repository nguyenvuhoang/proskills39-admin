'use client';
import Dropdown from '@/components/dropdown';
import { IRootState } from '@/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ComponentsChartsDonut from '../charts/components-charts-donut';
import IconCaretDown from '../icon/icon-caret-down';
import IconTrendingUp from '../icon/icon-trending-up';
import IconUser from '../icon/icon-user';
import IconUsers from '../icon/icon-users';
import IconWallet from '../icon/icon-wallet';
import ComponentsChartsBar from '../charts/components-charts-bar';

const ComponentsDashboardJob = () => {
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
        title: "Top categories"
    }
    const data = [3700, 2478, 1300, 1300, 500, 1500, 3200, 4300, 800, 2400]
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

    const categories = ['Programming & Tech', 'Graphics & Design', 'Digital Marketing', 'Writing & Translation', 'Lifestyle', 'Video & Animation', 'Music & Audio', 'Business', 'Trending','AI Service']
    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl">Job dashboard</h2>
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
                        <div className="flex items-center justify-center">
                            <button type="button" className="btn btn-primary rounded-full">
                                Download CV
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="pt-5">
                <div className="grid grid-cols-1 gap-6 my-5">
                    <ComponentsChartsBar
                        isHorizontal={false}
                        isVertical={true}
                        data={data}
                        categories={categories}
                        title="User count by Level"
                    />
                </div>


            </div>
        </div>
    );
};

export default ComponentsDashboardJob;
