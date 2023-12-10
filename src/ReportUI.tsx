import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function ReportUI(props) {
    // Use state to initialize your variables
    const [totalDurationList, setTotalDurationList] = useState([]);
    const [totalRevenueList, setTotalRevenueList] = useState([]);
    const [practitionerNameList, setPractitionerNameList] = useState([]);

    useEffect(() => {
        if (props.summary.length > 0) {
            // Use the set functions to update state
            setTotalDurationList(props.summary.map(entry => entry.totalDuration));
            setTotalRevenueList(props.summary.map(entry => entry.totalRevenue));
            setPractitionerNameList(props.summary.map(entry => entry.practitionerName));
        }
    }, [props.summary]) // Include props.summary as a dependency

    const data = {
        datasets: [
            {
                label: 'Duration',
                data: totalDurationList,
                backgroundColor: 'rgba(161, 98,7, 0.6)', // Dark yellow
                borderColor: 'rgba(161, 98,7, 1)',
                borderWidth: 1,
            },
            {
                label: 'Revenue',
                data: totalRevenueList,
                backgroundColor: 'rgba(128, 128, 128, 0.6)', // Dark gray
                borderColor: 'rgba(128, 128, 128, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                labels: practitionerNameList,
            },
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'end',
                display: true,
            },
        },
    };

    return (
        <div className='w-full'>
            <div className='w-full bg-gray-200 mt-5 rounded p-3'>
                <Bar options={options} data={data} height={30} />
            </div>
        </div>
    );
}
