import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const MonthlySalesCard = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null); // Track the chart instance

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    // Destroy existing chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new chart instance and store it in the chartRef
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy the chart on unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="card flex flex-grow w-full">
      <div className="card-header p-4 border-b">
        <h5 className="card-title text-lg font-semibold mb-0">Monthly Sales</h5>
      </div>
      <div className="card-body flex w-full p-4">
        <div className="self-center chart w-full h-64">
          <canvas ref={canvasRef} id="chartjs-dashboard-bar"></canvas>
        </div>
      </div>
    </div>
  );
};

export default MonthlySalesCard;
