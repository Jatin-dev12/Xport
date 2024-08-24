import React, { useState, useEffect } from 'react';
import db from '../../../js/src/Show';

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    db.collection("Jatin")
      .get()
      .then((querySnapshot) => {
        const dataArray = [];
        querySnapshot.forEach((element) => {
          const data = element.data();
          dataArray.push(data);
          console.log(data);
        });
        setData(dataArray);
        console.log(dataArray);
      });
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;