"use client";
import {
  Chart as ChartJS,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import TimePeriodSelector from "./TimePeriodSelector";
// import

ChartJS.register(
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Посетители",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "2022",
      data: labels.map(() => Math.random() * 100),
      borderColor: "rgb(99, 210, 132)",
      backgroundColor: "rgba(99, 210, 132, 0.5)",
    },
    {
      label: "2023",
      data: labels.map(() => Math.random() * 100),
      borderColor: "rgb(162, 52, 235)",
      backgroundColor: "rgba(162, 52, 235, 0.5)",
    },
  ],
};

const VisitorsChart = () => {
  return (
    <div className="p-2 border rounded-lg shadow flex flex-col">
      <div className="flex">
        <TimePeriodSelector />
      </div>
      <Line options={options} data={data} />
    </div>
  );
};

export default VisitorsChart;
