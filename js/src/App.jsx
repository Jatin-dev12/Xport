import './App.css';
import { useState } from 'react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Heading, StackDivider } from '@chakra-ui/react';
import { Container, Box , Button} from '@chakra-ui/react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc  } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  const handleSubmit = async () => {
    const data = {
      card1: value,
      card2: value2,
      card3: value3,
      card4: value4
    };

    try {
      const docRef = await addDoc(collection(db, "userSelections"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <Container maxW='2xl' className='Main' centerContent>
        <Heading size='xl' mt={5} color={'white'}> Please Select The Option For Ratings</Heading>
        <Box>
          <Card marginBlockEnd={10} marginBlockStart={10} id="card1">
            <CardHeader margin={0}>
              <Heading size='md'>How many vowels are there in the English alphabet and name them?</Heading>
            </CardHeader>
            <StackDivider>
              <CardBody>
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction='row'>
                    <Radio value='1' colorScheme='red'>First</Radio>
                    <Radio value='2' colorScheme='orange'>Second</Radio>
                    <Radio value='3' colorScheme='blue'>Third</Radio>
                    <Radio value='4' colorScheme='green'>Four</Radio>
                  </Stack>
                </RadioGroup>
              </CardBody>
            </StackDivider>
          </Card>
          <Card marginBlockEnd={10} id="card2">
            <CardHeader margin={0}>
              <Heading size='md'>Which animal is known as the king of the jungle?</Heading>
            </CardHeader>
            <CardBody>
              <RadioGroup onChange={setValue2} value={value2}>
                <Stack direction='row'>
                  <Radio value='1' colorScheme='red'>First</Radio>
                  <Radio value='2' colorScheme='orange'>Second</Radio>
                  <Radio value='3' colorScheme='blue'>Third</Radio>
                  <Radio value='4' colorScheme='green'>Four</Radio>
                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
          <Card marginBlockEnd={10} id="card3">
            <CardHeader margin={0}>
              <Heading size='md'>Name the National animal of India?</Heading>
            </CardHeader>
            <CardBody>
              <RadioGroup onChange={setValue3} value={value3}>
                <Stack direction='row'>
                  <Radio value='1' colorScheme='red'>First</Radio>
                  <Radio value='2' colorScheme='orange'>Second</Radio>
                  <Radio value='3' colorScheme='blue'>Third</Radio>
                  <Radio value='4' colorScheme='green'>Four</Radio>
                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
          <Card marginBlockEnd={10} id="card4">
            <CardHeader margin={0}>
              <Heading size='md'>Name the national flower of India?</Heading>
            </CardHeader>
            <CardBody>
              <RadioGroup onChange={setValue4} value={value4}>
                <Stack direction='row'>
                  <Radio value='1' colorScheme='red'>First</Radio>
                  <Radio value='2' colorScheme='orange'>Second</Radio>
                  <Radio value='3' colorScheme='blue'>Third</Radio>
                  <Radio value='4' colorScheme='green'>Four</Radio>
                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
        </Box>
        <Button onClick={handleSubmit}>Submit</Button>
      </Container>
    </>
  );
}

export default App;
