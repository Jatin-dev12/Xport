import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, } from 'firebase/firestore';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function DataDisplay() {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const collectionRef = collection(db, 'Jatin' );
      const querySnapshot = await getDocs(collectionRef);
      const data = querySnapshot.docs.map((doc) => doc.data());
      setData(data);
      console.log(data)

     };

    fetchData();
  }, []);

  const cardLabels = ['Card 1'];
  const chartData = {
    labels: Array.from({ length: 12 }, (_, i) => `Q ${i + 1}`),
    datasets: cardLabels.map((cardLabel, index) => ({
      label: cardLabel,
      data: data.map((item) => item[`card${index + 1}`] || 0),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
    })),
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          crossAlign: 'far',
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="bro">

      <Bar data={chartData} options={options} />
    </div>
  );
}

export default DataDisplay;