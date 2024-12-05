import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Telefonica', 'Entel', 'Claro', 'VTR', 'Huawei', 'BHP', 'Schneider', 'Sacyr', 'Komatsu', 'Siemens'],
    datasets: [
      {
        label: '# de alumnos',
        data: [3, 2, 1, 2, 3, 4, 2, 3, 1, 1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(223, 90, 52, 0.2)',
          'rgba(132, 207, 52, 0.2)', 
          'rgba(54, 127, 154, 0.2)',
          'rgba(19, 200, 163, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(223, 90, 52, 1)',
          'rgba(132, 207, 52, 1)', 
          'rgba(54, 127, 154, 1)',
          'rgba(19, 200, 163, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  return <Pie data={data} />;
};

export default PieChart;
