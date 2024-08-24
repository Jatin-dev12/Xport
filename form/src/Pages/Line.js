  import { useState, useEffect } from 'react'; import { getFirestore, collection, getDocs } from 'firebase/firestore';
 function DataDisplay() {
  const [data, setData] = useState([]);

   useEffect(() => {
     const db = getFirestore();
     const collectionRef = collection(db, 'Jatin');

     getDocs(collectionRef).then((querySnapshot) => {
       const dataArray = [];
       querySnapshot.forEach((doc) => {
        dataArray.push({ id: doc.id, ...doc.data() });
       });       setData(dataArray);
     });
   }, []);
   return (
    <div>
       <h1>Data Display</h1>
      <ul>
        {data.map((item) => (
           <li key={item.id}>
            <p>Card 1: {item.card1}</p> <br></br>
            <p>Card 2: {item.card2}</p> <br></br>
             <p>Card 3: {item.card3}</p> <br></br>
             <p>Card 4: {item.card4}</p> <br></br>
             <p>Card 5: {item.card5}</p>  <br></br>
             <p>Card 6: {item.card6}</p>  <br></br>
             <p>Card 7: {item.card7}</p><br></br>
             <p>Card 8: {item.card8}</p><br></br>
             <p>Card 9: {item.card9}</p> <br></br>
             <p>Card 10: {item.card10}</p><br></br>
             <p>Card 11: {item.card11}</p><br></br>
             <p>Card 12: {item.card12}</p>  <br></br>          
             
              </li>
     ))}
     </ul>
     </div>
   ); }

export default DataDisplay;