'use client';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

type PageProps = {
    title: string
    data: {
        series: number[]
        label: string[]
        colors: string[]
        height: number
    }
}

const ComponentsChartsDonut = ({ title, data }: PageProps) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    // donutChartOptions
    const donutChart: any = {
        series: data.series,
        options: {
            chart: {
                height: data.height ,
                type: 'donut',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            stroke: {
                show: false,
            },
            labels: data.label,
            colors: data.colors,
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                    },
                },
            ],
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                name: {
                                    fontSize: '22px',
                                },
                                value: {
                                    fontSize: '16px',
                                },
                                formatter: function (w: any) {
                                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                    return w;
                                },
                            },
                        },
                    }

                },
            },
            legend: {
                position: 'right',
            },
        },
    };
    return (
        <div className='panel'>
            <div className='mb-5 flex items-center justify-between'></div>
            <h5 className="text-lg font-semibold dark:text-white-light">
                {title}
            </h5>
            <div className="mb-5">
                {isMounted &&
                    <ReactApexChart
                        series={donutChart.series}
                        options={donutChart.options}
                        className="rounded-lg bg-white dark:bg-black"
                        type="donut"
                        height={300}
                        width={'100%'}
                    />}
            </div>
        </div>
    );
};

export default ComponentsChartsDonut;
