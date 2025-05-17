"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Sales",
      data: [120, 190, 300, 500, 400],
      backgroundColor: "rgba(59, 130, 246, 0.5)",
      borderColor: "rgba(59, 130, 246, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Monthly Sales Data" },
  },
};

export default function ChartDemo() {
  return (
    <div
      style={{ padding: "30px", paddingLeft: "100px", paddingRight: "100px" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card p-6"
      >
        <h3
          className="text-3xl sm:text-4xl font-bold mb-8 text-center tracking-wide uppercase"
          style={{
            letterSpacing: "2px",
            textTransform: "uppercase",
            padding: "20px",
            fontSize: "1.5rem", // 2xl in Tailwind is 1.5rem
          }}
        >
          Sales Chart Demo
        </h3>
        <Bar data={data} options={options} />
      </motion.div>
    </div>
  );
}
