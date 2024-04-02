'use client';
import Dropdown from '@/components/dropdown';
import IconBinance from '@/components/icon/icon-binance';
import IconBitcoin from '@/components/icon/icon-bitcoin';
import IconCircleCheck from '@/components/icon/icon-circle-check';
import IconEthereum from '@/components/icon/icon-ethereum';
import IconEye from '@/components/icon/icon-eye';
import IconHorizontalDots from '@/components/icon/icon-horizontal-dots';
import IconInfoCircle from '@/components/icon/icon-info-circle';
import IconLitecoin from '@/components/icon/icon-litecoin';
import IconSolana from '@/components/icon/icon-solana';
import IconTether from '@/components/icon/icon-tether';
import { IRootState } from '@/store';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import IconCaretDown from '../icon/icon-caret-down';
import Image from 'next/image';
import IconPlusCircle from '../icon/icon-plus-circle';
import IconUserPlus from '../icon/icon-user-plus';
import IconUser from '../icon/icon-user';
import IconTrendingUp from '../icon/icon-trending-up';
import IconMenuScrumboard from '../icon/menu/icon-menu-scrumboard';
import IconDollarSignCircle from '../icon/icon-dollar-sign-circle';
import IconTrendingDown from '../icon/icon-trending-down';
import ComponentsChartsDonut from '../charts/components-charts-donut';
import ComponentsDatatablesBasic from '../datatables/components-datatables-basic';

const ComponentsDashboardFinance = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    //bitcoinoption
    const bitcoin: any = {
        series: [
            {
                data: [21, 9, 36, 12, 44, 25, 59, 41, 25, 66],
            },
        ],
        options: {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#00ab55'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        },
    };

    //ethereumoption
    const ethereum: any = {
        series: [
            {
                data: [44, 25, 59, 41, 66, 25, 21, 9, 36, 12],
            },
        ],
        options: {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#e7515a'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        },
    };

    //litecoinoption
    const litecoin: any = {
        series: [
            {
                data: [9, 21, 36, 12, 66, 25, 44, 25, 41, 59],
            },
        ],
        options: {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#00ab55'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        },
    };

    //binanceoption
    const binance: any = {
        series: [
            {
                data: [25, 44, 25, 59, 41, 21, 36, 12, 19, 9],
            },
        ],
        options: {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#e7515a'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        },
    };

    //tetheroption
    const tether: any = {
        series: [
            {
                data: [21, 59, 41, 44, 25, 66, 9, 36, 25, 12],
            },
        ],
        options: {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#00ab55'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        },
    };

    //solanaoption
    const solana: any = {
        series: [
            {
                data: [21, -9, 36, -12, 44, 25, 59, -41, 66, -25],
            },
        ],
        options: {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#e7515a'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        },
    };

    const dataUserOverview = {
        series: [60, 40],
        label: ['Freelancer', 'Client'],
        colors: ['#1DC52E', '#2961CD'],
        height: 200
    }

    const dataRevenuebyorders = {
        series: [20, 40, 40],
        label: ['Dispute', 'Processing', 'Completed'],
        colors: ['#2961CD', '#710886', '#1DC52E'],
        height: 200
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

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

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
                    <ComponentsChartsDonut title={'User overview'} data={dataUserOverview} />
                    <ComponentsDatatablesBasic data={dataUserTable} />
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 my-5">
                    <ComponentsChartsDonut title={'Revenue by orders'} data={dataRevenuebyorders} />
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


            </div>
        </div>
    );
};

export default ComponentsDashboardFinance;
