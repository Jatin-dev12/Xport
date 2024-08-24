import { useState } from 'react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Heading, StackDivider } from '@chakra-ui/react';
import { Container, Box, Button } from '@chakra-ui/react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useToast } from '@chakra-ui/react'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD59HL44cPg08gdrHkpe90LXSZXz8qInnE",
  authDomain: "jatin-27242.firebaseapp.com",
  projectId: "jatin-27242",
  storageBucket: "jatin-27242.appspot.com",
  messagingSenderId: "867778850957",
  appId: "1:867778850957:web:8ddf7015dd08b732c932c4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Form() {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const toast = useToast()

  const handleSubmit = async () => {
    const data = {
      card1: value,
      card2: value2,
      card3: value3,
      card4: value4,
      card5: value5
    };

    try {
      const docRef = await addDoc(collection(db, "Jatin"), data);
      console.log("Document written with ID: ", docRef.id);
      toast({
        title: "Submission Successful",
        description: "Your selections have been recorded.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setValue('');
      setValue2('');
      setValue3('');
      setValue4('');
      setValue5('');

    } catch (e) {
      console.error("Error adding document: ", e);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your selections. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (

    <>
      <Container maxW='2xl' className='Main' centerContent  >
        <Heading size='xl' mt={5} color={'white'}> Please Select The Option For Ratings</Heading>
        <Box>
          <Card marginBlockEnd={10} marginBlockStart={10} id="card1">
            <CardHeader margin={0}>
              <Heading size='md'>We encourage innovation and collaboration across our operating ecosystem, not limited within the organizational boundaries </Heading>
            </CardHeader>
            <StackDivider>
              <CardBody>
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction='row'>
                    <Radio value='1' colorScheme='red'>First</Radio>
                    <Radio value='2' colorScheme='orange'>Second</Radio>
                    <Radio value='3' colorScheme='blue'>Third</Radio>
                    <Radio value='4' colorScheme='green'>Four</Radio>
                    <Radio value='5' colorScheme='teal'>Five</Radio>
                  </Stack>
                </RadioGroup>
              </CardBody>
            </StackDivider>
          </Card>
          <Card marginBlockEnd={10} id="card2">
            <CardHeader margin={0}>
              <Heading size='md'>Mental & physical well-being and work-life balance is highly prioritized within our organization </Heading>
            </CardHeader>
            <CardBody>
              <RadioGroup onChange={setValue2} value={value2}>
                <Stack direction='row'>
                  <Radio value='1' colorScheme='red'>First</Radio>
                  <Radio value='2' colorScheme='orange'>Second</Radio>
                  <Radio value='3' colorScheme='blue'>Third</Radio>
                  <Radio value='4' colorScheme='green'>Four</Radio>
                  <Radio value='5' colorScheme='teal'>Five</Radio>
                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
          <Card marginBlockEnd={10} id="card3">
            <CardHeader margin={0}>
              <Heading size='md'>Communication in my organization is honest and frequent</Heading>
            </CardHeader>
            <CardBody>
              <RadioGroup onChange={setValue3} value={value3}>
                <Stack direction='row'>
                  <Radio value='1' colorScheme='red'>First</Radio>
                  <Radio value='2' colorScheme='orange'>Second</Radio>
                  <Radio value='3' colorScheme='blue'>Third</Radio>
                  <Radio value='4' colorScheme='green'>Four</Radio>
                  <Radio value='5' colorScheme='teal'>Five</Radio>
                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
          <Card marginBlockEnd={10} id="card4">
            <CardHeader margin={0}>
              <Heading size='md'>Our leadership is accessible and empathetic</Heading>
            </CardHeader>
            <CardBody>
              <RadioGroup onChange={setValue4} value={value4}>
                <Stack direction='row'>
                  <Radio value='1' colorScheme='red'>First</Radio>
                  <Radio value='2' colorScheme='orange'>Second</Radio>
                  <Radio value='3' colorScheme='blue'>Third</Radio>
                  <Radio value='4' colorScheme='green'>Four</Radio>
                  <Radio value='5' colorScheme='teal'>Five</Radio>
                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
          <Card marginBlockEnd={10} id="card5">
            <CardHeader margin={0}>
              <Heading size='md'>We practice Knowledge Management as a key means of internal capability development and organizational sustainability </Heading>
            </CardHeader>
            <CardBody>
              <RadioGroup onChange={setValue5} value={value5}>
                <Stack direction='row'>
                  <Radio value='1' colorScheme='red'>First</Radio>
                  <Radio value='2' colorScheme='orange'>Second</Radio>
                  <Radio value='3' colorScheme='blue'>Third</Radio>
                  <Radio value='4' colorScheme='green'>Four</Radio>
                  <Radio value='5' colorScheme='teal'>Five</Radio>

                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
        </Box>
        <Button colorScheme='blue' onClick={handleSubmit}>Submit</Button>
      </Container>
    </>
  );
}

export default Form;
