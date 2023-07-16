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
import ProductSelector from "./ProductSelector";
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
      text: "Продажи",
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
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "2023",
      data: labels.map(() => Math.random() * 100),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const SalesChart = () => {
  return (
    <div className="p-2 border rounded-lg shadow flex flex-col">
      <div className="flex gap-4">
        <TimePeriodSelector />
        <ProductSelector />
      </div>
      <Line options={options} data={data} />
    </div>
  );
};

export default SalesChart;
