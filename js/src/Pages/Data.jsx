import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, "Jatin");

    getDocs(collectionRef).then((querySnapshot) => {
      const dataArray = [];
      querySnapshot.forEach((doc) => {
        dataArray.push({ id: doc.id, ...doc.data() });
      });
      setData(dataArray);
      console.log(dataArray[0].card1)
      // console.log(dataArray [0].card2)
    });
  }, []);

  const chartData = {
    labels: Array.from({ length: 12 }, (_, i) => `Q ${i + 1}`),
     datasets: [
      {
        label: "Results",
        data: data.map((item) => [
          item.card1,
          // item.card2,
          // item.card3,
          // item.card4,
          // item.card5,
          // item.card6,
          // item.card7,
          // item.card8,
          // item.card9,
          // item.card10,
          // item.card11,
          // item.card12,
        ]),
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgb(54, 162, 235)",
          "rgb(75, 192, 192)",
          "rgb(255, 99, 132)",
        ],
        borderWidth: 1,
        borderRadius: 1,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    layout: {
      padding: 20
  },
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      
      y: {
        beginAtone: true,
        min: 1,
        max: 5,
        ticks: {
          crossAlign: 'far',
          stepSize: 1,
        },
       
      },
    },
  
  };

  return (
    <div className="bro">
      <Bar height={"100vh"} data={chartData} options={options} />
    </div>
  );
}

export default DataDisplay;
