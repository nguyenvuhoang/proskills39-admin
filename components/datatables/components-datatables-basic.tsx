'use client';
import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';

type PageProps = {
    data: {
        title: string
        pageSize: number[],
        column: any[],
        rowData: Object[]
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
                <DataTable
                    noRecordsText="No results match your search query"
                    highlightOnHover
                    className="table-hover whitespace-nowrap"
                    records={recordsData}
                    columns={data.column}
                    totalRecords={data.rowData.length}
                    recordsPerPage={pageSize}
                    page={page}
                    onPageChange={(p) => setPage(p)}
                    recordsPerPageOptions={PAGE_SIZES}
                    onRecordsPerPageChange={setPageSize}
                    minHeight={200}
                    paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                />
            </div>
        </div>
    );
};

export default ComponentsDatatablesBasic;
