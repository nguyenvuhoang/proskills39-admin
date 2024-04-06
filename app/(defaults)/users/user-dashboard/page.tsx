import ComponentsChartsBar from '@/components/charts/components-charts-bar';
import ComponentsDatatablesExport from '@/components/datatables/components-datatables-export';
import Dropdown from '@/components/dropdown';
import IconCaretDown from '@/components/icon/icon-caret-down';
import IconClipboardText from '@/components/icon/icon-clipboard-text';
import IconDollarSignCircle from '@/components/icon/icon-dollar-sign-circle';
import IconListCheck from '@/components/icon/icon-list-check';
import IconTrendingDown from '@/components/icon/icon-trending-down';
import IconTrendingUp from '@/components/icon/icon-trending-up';
import IconUser from '@/components/icon/icon-user';
import IconMenuScrumboard from '@/components/icon/menu/icon-menu-scrumboard';
import UserAccountChart from '@/components/users/dashboard/UserAccountChart';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'User dashboard',
};

const UserDashboard = () => {
    const data = [290, 115, 270, 70, 30, 330]
    const categories = ['Rising talent', 'New Expert', 'Pro Expert', 'Pro+ Expert', 'Vip Certified Expert', 'No level']
    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl">User dashboard</h2>
                <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
                    <div className="flex gap-3">
                        <div className="dropdown">
                            <Dropdown
                                offset={[0, 1]}
                                placement={`bottom-start`}
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
                                Create a service
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="pt-5">
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 mb-5">
                    <div className="grid gap-6 xl:grid-flow-row">
                        {/*  User active  */}
                        <div className="panel overflow-hidden lg:col-span-1">
                            <div className="flex justify-between">
                                <div className='flex flex-wrap'>
                                    <IconUser className='text-gray-600 bg-gray-300 w-8 h-8 rounded-full p-2'></IconUser>
                                    <div className="text-md font-semibold ltr:mr-1 rtl:ml-1 text-gray-600 p-2">Users active</div>
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

                        {/*  User Inactive */}
                        <div className="panel overflow-hidden">
                            <div className="flex justify-between">
                                <div className='flex flex-wrap'>
                                    <IconUser className='text-gray-600 bg-gray-300 w-8 h-8 rounded-full p-2'></IconUser>
                                    <div className="text-md font-semibold ltr:mr-1 rtl:ml-1 text-gray-600 p-2">Users inactive</div>
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
                    </div>
                    {/*  User Account Chart */}
                    <UserAccountChart />
                </div>

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
                                <IconListCheck className='text-gray-600 bg-gray-300 w-8 h-8 rounded-full p-2' />
                                <div className="text-md font-semibold ltr:mr-1 rtl:ml-1 text-gray-600 p-2">User posting service</div>
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
                                <IconClipboardText className='text-gray-600 bg-gray-300 w-8 h-8 rounded-full p-2' />
                                <div className="text-md font-semibold ltr:mr-1 rtl:ml-1 text-gray-600 p-2">User ordering service</div>
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
                                <IconClipboardText className='text-gray-600 bg-gray-300 w-8 h-8 rounded-full p-2' />
                                <div className="text-md font-semibold ltr:mr-1 rtl:ml-1 text-gray-600 p-2">User with order</div>
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


                <div className="grid grid-cols-1 gap-6 my-5">
                    <ComponentsChartsBar
                        isHorizontal={false}
                        isVertical={true}
                        data={data}
                        categories={categories}
                        title="User count by Level"
                    />
                </div>

                <div className="grid grid-cols-1 gap-6 my-5">
                    <ComponentsDatatablesExport />
                </div>







            </div>
        </div>
    );
};

export default UserDashboard;
