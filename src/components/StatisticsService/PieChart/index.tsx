import React from 'react';
import { Pie } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

defaults.global.defaultFontFamily = 'Plantaganet PT';

interface Props {
  data: {
    labels: string[];
    data: number[];
    backgroundColor: string[];
    hoverBackgroundColor?: string[];
  };
}

const PieChart = ({
  data: { labels, data, backgroundColor, hoverBackgroundColor = backgroundColor },
}: Props) => {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        hoverBackgroundColor,
      },
    ],
  };

  return (
    <div>
      <h2>Win/Loss Record</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
