import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend} from 'chart.js'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  )

const DonutChart = () => {
  const data = {
    labels: ['Above 90%', '75% to 90%', 'Below 75%'],
    datasets: [
                {
                  data: [55, 30, 15],
                  backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                  hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
                  hoverBorderColor: 'rgba(234, 236, 244, 1)',
                  hoverOffset: 5,
                  
                },
              ],
   
  }

return (
  <>
  <Doughnut data={data}/>
  </>
)
}

export default DonutChart