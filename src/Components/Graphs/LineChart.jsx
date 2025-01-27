import React from 'react'
import { Chart as ChartJS, registerables } from "chart.js";
import {Line,} from "react-chartjs-2";

ChartJS.register(...registerables);
const LineChart = () => {

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Income per month ($3,000)",
        data: [5000, 7000, 6000, 8000, 9000, 10000],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4,
      },
    ],
  };
  return (
    <div style={{flex: 1}}>
      <Line data={lineData} options={{ responsive: true }} />
    </div>
  )
}

export default LineChart