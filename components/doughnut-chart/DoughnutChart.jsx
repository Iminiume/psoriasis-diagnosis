import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const DoughnutChart = ({ stats, label }) => {
  const labels = stats.map((item) => item.label);
  const dataValues = stats.map((item) => item.percentage);

  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: dataValues,
        backgroundColor: [
          "#5A3FFF",
          "#268AFF",
          "#1ED6FF",
          "#3DFFDC",
          "#36F097",
        ],
        borderColor: ["#ffffff50"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 20,
    },
    plugins: {
      title: {
        display: true,
        text: label,
        font: {
          size: 26,
          weight: "bold",
          family: "Yekan-Bakh-FaN-Medium",
        },
        color: "#ffffff",
      },
      legend: {
        position: "top",
        labels: {
          color: "#99a8c9",
          font: {
            size: 14,
            family: "Yekan-Bakh-FaN-Medium",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context?.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
