import React from 'react';
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

defaults.global.defaultFontFamily = 'Plantaganet PT';

interface Props {
  data: {
    label: string;
    fill: boolean;
    lineTension: number;
    backgroundColor: string;
    borderColor: string;
    borderCapStyle: string;
    borderDash: number[];
    borderDashOffset: number;
    borderJoinStyle: string;
    pointBorderColor: string;
    pointBackgroundColor: string;
    pointBorderWidth: number;
    pointHoverRadius: number;
    pointHoverBackgroundColor: string;
    pointHoverBorderColor: string;
    pointHoverBorderWidth: number;
    pointRadius: number;
    pointHitRadius: number;
    data: number[];
  };
}

const LineGraph = ({
  data: {
    label,
    fill,
    lineTension,
    backgroundColor,
    borderColor,
    borderCapStyle,
    borderDash,
    borderDashOffset,
    borderJoinStyle,
    pointBorderColor,
    pointBackgroundColor,
    pointBorderWidth,
    pointHoverRadius,
    pointHoverBackgroundColor,
    pointHoverBorderColor,
    pointHoverBorderWidth,
    pointRadius,
    pointHitRadius,
    data,
  },
}: Props) => {
  const chartData = {
    labels: [1, 2, 3, 4, 5, 6],
    datasets: [
      {
        label,
        fill,
        lineTension,
        backgroundColor,
        borderColor,
        borderCapStyle,
        borderDash,
        borderDashOffset,
        borderJoinStyle,
        pointBorderColor,
        pointBackgroundColor,
        pointBorderWidth,
        pointHoverRadius,
        pointHoverBackgroundColor,
        pointHoverBorderColor,
        pointHoverBorderWidth,
        pointRadius,
        pointHitRadius,
        data,
      },
    ],
  };
  console.log(data, 'data');
  return (
    <div>
      <h2>Line Example</h2>
      {/* <Line data={chartData} /> */}
    </div>
  );
};

export default LineGraph;
