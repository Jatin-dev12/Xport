import React, { useEffect, useState } from 'react';

import { getDocs, collection } from 'firebase/firestore';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DataDisplay = ({ db }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "userSelections"));
      const fetchedData = [];
      querySnapshot.forEach((doc) => {
        fetchedData.push({ id: doc.id, ...doc.data() });
      });
      setData(fetchedData);
    };

    fetchData();
  }, [db]);

  return (
    <div>
      <h1>Data Display</h1>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="id" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="card1" stroke="#8884d8" />
        <Line type="monotone" dataKey="card2" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default DataDisplay;
