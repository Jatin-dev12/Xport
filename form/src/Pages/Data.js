import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, 'Jatin');
    getDocs(collectionRef).then((querySnapshot) => {
      const dataArray = [];
      querySnapshot.forEach((doc) => {
        dataArray.push({ id: doc.id, ...doc.data() });
      });
      setData(dataArray);
    });
  }, []);

  const chartData = {
    labels: data.map(item => item.id), 
    datasets: [
      {
        label: 'Results',
        data: data.map(item => [item.card1, item.card2, item.card3, item.card4, item.card5]),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default DataDisplay;


