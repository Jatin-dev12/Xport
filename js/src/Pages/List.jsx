/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Chart, registerables } from 'chart.js';
import {
  Spinner,
  Flex,
  Text,
  Button,
  VStack,
  Grid,
  GridItem,
} from '@chakra-ui/react';

// Register Chart.js components
Chart.register(...registerables);

function List() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null); // Add a state to store the selected card

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

  // Define card labels
  const cardLabels = [
    'Card 1',
    'Card 2',
    'Card 3',
    'Card 4',
    'Card 5',
    'Card 6',
    'Card 7',
    'Card 8',
    'Card 9',
    'Card 10',
    'Card 11',
    'Card 12',
  ];

  const totalRespondents = data ? Object.keys(data).length : 5;

  let ratingDistribution = {};
  let ratingDistributionList = [];

  if (data) {
    ratingDistribution = cardLabels.reduce((acc, cardLabel, index) => {
      acc[cardLabel] = [0, 0, 0, 0, 0]; // Initialize rating counts for each card
      Object.keys(data).forEach((docId) => {
        const cardData = data[docId][`card${index + 1}`];
        if (cardData) {
          const rating = parseInt(cardData, 10);
          acc[cardLabel][rating - 1]++; // Increment the corresponding rating count
        }
      });
      return acc;
    }, {});

    ratingDistributionList = cardLabels.map((cardLabel, index) => {
      const ratings = ratingDistribution[cardLabel];
      return (
        <GridItem
        className='new'
          key={index}
          colSpan={1}
          bg={index % 2 === 0 ? 'gray.100' : 'gray.200'}
          p={6}
          borderRadius="md"
          boxShadow="md"
        >
          <Button className='cardsname'
            variant="link"
            onClick={() => setSelectedCard(cardLabel)} // Add an onClick event to select the card
          >
            {cardLabel}:
          </Button>
          <ul>
            {ratings.map((count, rating) => (
              <li key={rating}>Option {rating + 1}: {count} people</li>
            ))}
          </ul>
        </GridItem>
      );
    });
  }

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
        <Grid templateColumns="repeat(3, 1fr)" gap={8} m={2}>
          {ratingDistributionList}
          {selectedCard && (
            <GridItem colSpan={3} p={8} m={2} border="1px solid" borderColor="gray.200" borderRadius="md">
              <Text fontSize="lg" fontWeight="bold">
                {selectedCard} Details:
              </Text>
              <Flex justifyContent="space-between" mt={2} >
                <Text fontWeight="bold">
                  {ratingDistribution[selectedCard].map((count, rating) => (
                    <span key={rating}>
                      Option {rating + 1}: {count} people<br></br>
                    </span>
                  ))}
                </Text>
              </Flex>
            </GridItem>
          )}
        </Grid>
      )}
    </VStack>
  );
}

export default List;