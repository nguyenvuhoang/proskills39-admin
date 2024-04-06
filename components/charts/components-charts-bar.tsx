'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import ReactApexChart from 'react-apexcharts';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

type PageProps = {
    isHorizontal: boolean
    isVertical: boolean
    data: number[]
    title: string
    categories: string[]
}
const ComponentsChartsBar = ({ isHorizontal, isVertical, data, title, categories }: PageProps) => {
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    // barChartOptions
    const barChart: any = {
        series: [
            {
                name: 'Sales',
                data: data,
            },
        ],
        options: {
            chart: {
                height: 300,
                type: 'bar',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 1,
            },
            colors: ['#4361ee'],
            xaxis: {
                categories: categories,
                axisBorder: {
                    color: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
            yaxis: {
                opposite: isRtl ? true : false,
                reversed: isRtl ? true : false,
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
            },
            plotOptions: {
                bar: {
                    horizontal: isHorizontal,
                    vertical: isVertical
                },
            },
            fill: {
                opacity: 0.8,
            },
        },
    };
    return (
        <div className="panel ">
            <div className="mb-5 flex items-center justify-between"></div>
            <h5 className="text-lg font-semibold dark:text-white-light">
                {title}
            </h5>
            <div className="mb-5">
                {isMounted && <ReactApexChart series={barChart.series} options={barChart.options} className="rounded-lg bg-white dark:bg-black" type="bar" height={300} width={'100%'} />}
            </div>

        </div >
    );
};

export default ComponentsChartsBar;
