import { useState, useEffect, useRef } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Chart, registerables } from 'chart.js';
import { Spinner, VStack, Grid, GridItem } from '@chakra-ui/react';
Chart.register(...registerables);

function Data() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const chartRefs = useRef([]);
  const lineChartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const collectionRef = collection(db, 'Jatin');

      try {
        const querySnapshot = await getDocs(collectionRef);
        const allData = {};

        querySnapshot.forEach((doc) => {
          allData[doc.id] = doc.data();
        });

        setData(allData);
      } catch (error) {
        console.error('Error fetching documents: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!data) return;

    chartRefs.current.forEach(chart => {
      if (chart && chart.destroy) {
        chart.destroy();
      }
    });
    if (lineChartRef.current && lineChartRef.current.destroy) {
      lineChartRef.current.destroy();
    }
    const cardLabels = [
      'We encourage innovation and collaboration across our operating ecosystem, not limited within the organizational boundaries', 'Mental & physical well-being and work-life balance is highly prioritized within our organization', 'Communication in my organization is honest and frequent', 'Our leadership is accessible and empathetic', 'We practice Knowledge Management as a key means of internal capability development and organizational sustainability',
      'Our working style is agile and employees proactively take ownership for their work', 'There is a continuous focus on learning and future-skilling for all of us, across the organization', 'We play an active role in the ecosystem, that our business operates in; adopting the best practices and adapting our mindset', 'Our organization believes in empowerment, diversity and inclusion, through its policies and decisions', 'There is a strong sense of enthusiasm about digitalization in all our processes, systems and interfaces',
      'Employee engagement and culture building are at the highest level of business priority areas', 'There are adequate opportunities for development & talent mobility across the organization',
    ];
    let ratingDistribution = cardLabels.reduce((acc, cardLabel, index) => {
      acc[cardLabel] = [0, 0, 0, 0, 0];
      Object.keys(data).forEach((docId) => {
        const cardData = data[docId][`card${index + 1}`];
        if (cardData) {
          const rating = parseInt(cardData, 10);
          acc[cardLabel][rating - 1]++;
        }
      });
      return acc;
    }, {});
    const totalRespondentsData = cardLabels.map((cardLabel) => {
      let count = 0;
      Object.keys(data).forEach((docId) => {
        if (data[docId][cardLabel]) {
          count++;
        }
      });
      return count;
    });
    const newCharts = cardLabels.map((cardLabel, index) => {
      const chartRef = chartRefs.current[index];
      if (chartRef) {
        const truncatedLabel = cardLabel.length > 10 ? cardLabel.substring(0, 80) + '...' : cardLabel;
        return new Chart(chartRef, {
          type: 'bar',
          data: {
            labels: ['1', '2', '3', '4', '5'],
            datasets: [{
              label: truncatedLabel,
              data: ratingDistribution[cardLabel],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            }],
          },
        });
      }
      return null;
    });
    chartRefs.current = newCharts;
    if (lineChartRef.current) {
      new Chart(lineChartRef.current, {
        type: 'line',
        data: {
          labels: cardLabels,
          datasets: [{
            label: 'Total Respondents',
            data: totalRespondentsData,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          }],
        },
      });
    }
  }, [data]);

  return (
    <VStack spacing={4} align="stretch" p={4}>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <Grid templateColumns="repeat(2, 1fr)" gap={8} m={2}>
          {Array.from({ length: 12 }).map((_, index) => (
            <GridItem key={index} colSpan={1} p={6} borderRadius="md" boxShadow="md">
              <canvas ref={el => chartRefs.current[index] = el}
                      style={{ width: '600px', height: '200px' }}
               />
            </GridItem>
          ))}

        </Grid>
      )}
    </VStack>
  );
}

export default Data;
