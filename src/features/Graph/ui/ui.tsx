"use client"
import React, { useEffect, useState } from 'react';
import styles from './ui.module.scss';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const ChartComponent = ({ title, graphData }) => {
    const options = {
        chart: {
            type: 'column',
        },
        title: {
            text: title,
            align: 'left',
            x: 15,
        },
        subtitle: {
            text: '',
        },
        xAxis: {
            type: 'category',
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: '',
            },
            max: 100,
        },
        series: [
            {
                name: 'Тесты',
                data: graphData,
                color: '#3579f8',
                dataLabels: {
                    enabled: true,
                    align: 'center',
                    inside: false,
                    verticalAlign: 'bottom',
                    format: '{y}',
                    style: {
                        fontSize: '10px',
                    },
                },
            },
            {
                name: 'Пробники',
                data: graphData,
                color: '#FA6900',
                dataLabels: {
                    enabled: true,
                    align: 'center',
                    inside: false,
                    verticalAlign: 'bottom',
                    format: '{y}',
                    style: {
                        fontSize: '10px',
                    },
                },
            },
        ],
        plotOptions: {
            column: {
                borderRadius: 20,
                zIndex: 2,
            },
        },
        legend: {
            itemStyle: {
                width: '30px',
            },
        },
    };

    return (
        <div className={styles.container}>
            <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ style: { borderRadius: '20px', zIndex: '1', } }}/>
        </div>
    );
};
