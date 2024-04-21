'use client';
import Dropdown from '@/components/dropdown';
import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import IconHorizontalDots from '../icon/icon-horizontal-dots';

type PageProps = {
    data: {
        title: string
        pageSize: number[],
        column: any[],
        rowData: Object[],
        showFooter: boolean | undefined
    }
}

const ComponentsDatatablesBasic = ({ data }: PageProps) => {
    const [page, setPage] = useState(1);
    const PAGE_SIZES = data.pageSize;
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const initialRecords = data.rowData.slice(0, pageSize);
    const [recordsData, setRecordsData] = useState(initialRecords);

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData(data.rowData.slice(from, to));
    }, [data.rowData, page, pageSize]);


    return (
        <div className="panel">
            <h5 className="mb-5 text-lg font-semibold dark:text-white-light">{data.title}</h5>
            <div className="datatables">
                {data.showFooter ?
                    <DataTable
                        noRecordsText="No results match your search query"
                        highlightOnHover
                        className="table-hover whitespace-nowrap"
                        records={recordsData}
                        columns={data.column}
                        defaultColumnRender={(row, _, accessor) => {
                            const data = row[accessor as keyof typeof row];
                            if (accessor === 'status') {
                                return (
                                    <label className="w-12 h-6 relative">
                                        <input type="checkbox"
                                            readOnly
                                            checked={data.toString() === 'Active' ? true : false}
                                            className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer"
                                            id="custom_switch_checkbox1"
                                        />
                                        <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                    </label>
                                )
                            }
                            if (accessor === 'action') {
                                return (
                                    <div className="dropdown">
                                        <Dropdown offset={[0, 5]} button={<IconHorizontalDots className="m-auto opacity-70" />}>
                                            <ul>
                                                <li>
                                                    <button type="button">Edit</button>
                                                </li>
                                                <li>
                                                    <button type="button">Delete</button>
                                                </li>
                                            </ul>
                                        </Dropdown>
                                    </div>
                                )
                            }
                            if (accessor.toString().startsWith('date')) {
                                const dataJson = typeof data === 'object' ? Object(data) : null;
                                return (
                                    <>
                                        <div className='text-medium font-bold'>
                                            {dataJson?.date}
                                        </div>
                                        <div className='text-[#5C6876]'>
                                            {dataJson?.time}
                                        </div>
                                    </>
                                )
                            }
                            if (accessor.toString().startsWith('status')) {
                                const dataJson = typeof data === 'object' ? Object(data) : null;
                                return (
                                    <span className={`badge badge-outline-${dataJson?.color} `}>{dataJson?.title}</span>
                                )
                            }

                            return typeof data === 'string' ? data : '#' + data;
                        }}
                        minHeight={200}
                        totalRecords={data.rowData.length}
                        recordsPerPage={pageSize}
                        page={page}
                        onPageChange={(p) => setPage(p)}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPageSize}
                    />
                    :
                    <DataTable
                        noRecordsText="No results match your search query"
                        highlightOnHover
                        className="table-hover whitespace-nowrap"
                        records={recordsData}
                        columns={data.column}
                        defaultColumnRender={(row, _, accessor) => {
                            const data = row[accessor as keyof typeof row];
                            if (accessor === 'status') {
                                return (
                                    <label className="w-12 h-6 relative">
                                        <input type="checkbox"
                                            readOnly
                                            checked={data.toString() === 'Active' ? true : false}
                                            className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer"
                                            id="custom_switch_checkbox1"
                                        />
                                        <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                    </label>
                                )
                            }
                            if (accessor === 'action') {
                                return (
                                    <div className="dropdown">
                                        <Dropdown offset={[0, 5]} button={<IconHorizontalDots className="m-auto opacity-70" />}>
                                            <ul>
                                                <li>
                                                    <button type="button">Edit</button>
                                                </li>
                                                <li>
                                                    <button type="button">Delete</button>
                                                </li>
                                            </ul>
                                        </Dropdown>
                                    </div>
                                )
                            }
                            if (accessor.toString().startsWith('date')) {
                                const dataJson = typeof data === 'object' ? Object(data) : null;
                                return (
                                    <>
                                        <div className='text-medium font-bold'>
                                            {dataJson?.date}
                                        </div>
                                        <div className='text-[#5C6876]'>
                                            {dataJson?.time}
                                        </div>
                                    </>
                                )
                            }
                            if (accessor.toString().startsWith('status')) {
                                const dataStatusJson = typeof data === 'object' ? Object(data) : null;
                                return (
                                    <span className={`badge badge-outline-${dataStatusJson?.color} `}>{dataStatusJson?.title}</span>
                                )
                            }

                            return typeof data === 'string' ? data : '#' + data;
                        }}
                        minHeight={200}
                    />
                }
            </div>
        </div>
    );
};

export default ComponentsDatatablesBasic;
