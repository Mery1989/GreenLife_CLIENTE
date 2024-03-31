
import "./formChart.css";
import { Chart as ChartJS, BarElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, Tooltip, Legend);

function formChart() {

    

  return (
    <div>

      <div style={{ width:"100%" , height:"100%", padding:"10px 0" }}>
        <Bar
          data={{
            labels: ["Transporte", "Reciclaje", "Energía"],
            datasets: [
              {
                label: "Puntaje",
                data: [
                  results.transporte * 100,
                  results.reciclaje * 100,
                  results.energia * 100,
                ],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 206, 86, 0.6)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            scales: {
              x: [
                {
                  ticks: {
                    beginAtZero: true, // Inicia el eje X en 0
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
}

export default formChart;
