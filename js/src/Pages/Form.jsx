import { useState } from 'react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Heading, StackDivider } from '@chakra-ui/react';
import { Container, Box, Button } from '@chakra-ui/react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useToast } from '@chakra-ui/react'
// import { useNavigate } from 'react-router-dom';

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
  const [value6, setValue6] = useState('');
  const [value7, setValue7] = useState('');
  const [value8, setValue8] = useState('');
  const [value9, setValue9] = useState('');
  const [value10, setValue10] = useState('');
  const [value11, setValue11] = useState('');
  const [value12, setValue12] = useState('');
  // const navigate = useNavigate();
  const toast = useToast()

  const handleSubmit = async () => {
    if (
      value &&
      value2 &&
      value3 &&
      value4 &&
      value5 &&
      value6 &&
      value7 &&
      value8 &&
      value9 &&
      value10 &&
      value11 &&
      value12
    ) {
      const data = {
        card1: value,
        card2: value2,
        card3: value3,
        card4: value4,
        card5: value5,
        card6: value6,
        card7: value7,
        card8: value8,
        card9: value9,
        card10: value10,
        card11: value11,
        card12: value12,
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
          position: "top",

        });
        setValue('');
        setValue2('');
        setValue3('');
        setValue4('');
        setValue5('');
        setValue6('');
        setValue7('');
        setValue8('');
        setValue9('');
        setValue10('');
        setValue11('');
        setValue12('');
      } catch (e) {
        console.error("Error adding document: ", e);
        toast({
          title: "Submission Failed",
          description: "There was an error submitting your selections. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",

        });
      }
    } else {
      toast({
        title: "Please select all fields",
        description: "You must select a value for all fields before submitting.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };
  // const jatin = () => {navigate('/Data');}
  return (

    <>
      <Container maxW='2xl' className='Main' centerContent  >
        <Card>
         
        </Card>
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
                    <Radio size='lg' value='1' colorScheme='red'>1</Radio>
                    <Radio size='lg' value='2' colorScheme='orange'>2</Radio>
                    <Radio size='lg' value='3' colorScheme='blue'>3</Radio>
                    <Radio size='lg' value='4' colorScheme='green'>4</Radio>
                    <Radio size='lg' value='5' colorScheme='yellow'>5</Radio>
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
                  <Radio size='lg' value='1' colorScheme='red'>1</Radio>
                  <Radio size='lg' value='2' colorScheme='orange'>2</Radio>
                  <Radio size='lg' value='3' colorScheme='blue'>3</Radio>
                  <Radio size='lg' value='4' colorScheme='green'>4</Radio>
                  <Radio size='lg' value='5' colorScheme='yellow'>5</Radio>
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
                  <Radio size='lg' value='1' colorScheme='red'>1</Radio>
                  <Radio size='lg' value='2' colorScheme='orange'>2</Radio>
                  <Radio size='lg' value='3' colorScheme='blue'>3</Radio>
                  <Radio size='lg' value='4' colorScheme='green'>4</Radio>
                  <Radio size='lg' value='5' colorScheme='yellow'>5</Radio>
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
                  <Radio size='lg' value='1' colorScheme='red'>1</Radio>
                  <Radio size='lg' value='2' colorScheme='orange'>2</Radio>
                  <Radio size='lg' value='3' colorScheme='blue'>3</Radio>
                  <Radio size='lg' value='4' colorScheme='green'>4</Radio>
                  <Radio size='lg' value='5' colorScheme='yellow'>5</Radio>
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
                  <Radio size='lg' value='1' colorScheme='red'>1</Radio>
                  <Radio size='lg' value='2' colorScheme='orange'>2</Radio>
                  <Radio size='lg' value='3' colorScheme='blue'>3</Radio>
                  <Radio size='lg' value='4' colorScheme='green'>4</Radio>
                  <Radio size='lg' value='5' colorScheme='yellow'>5</Radio>

                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
          <Card marginBlockEnd={10} id="card6">
            <CardHeader margin={0}>
              <Heading size='md'>Our working style is agile and employees proactively take ownership for their work  </Heading>
            </CardHeader>
            <CardBody>
              <RadioGroup onChange={setValue6} value={value6}>
                <Stack direction='row'>
                  <Radio size='lg' value='1' colorScheme='red'>1</Radio>
                  <Radio size='lg' value='2' colorScheme='orange'>2</Radio>
                  <Radio size='lg' value='3' colorScheme='blue'>3</Radio>
                  <Radio size='lg' value='4' colorScheme='green'>4</Radio>
                  <Radio size='lg' value='5' colorScheme='yellow'>5</Radio>

                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
          <Card marginBlockEnd={10} id="card7">
            <CardHeader margin={0}>
              <Heading size='md'>There is a continuous focus on learning and future-skilling for all of us, across the organization   </Heading>
            </CardHeader>
            <CardBody>
              <RadioGroup onChange={setValue7} value={value7}>
                <Stack direction='row'>
                  <Radio size='lg' value='1' colorScheme='red'>1</Radio>
                  <Radio size='lg' value='2' colorScheme='orange'>2</Radio>
                  <Radio size='lg' value='3' colorScheme='blue'>3</Radio>
                  <Radio size='lg' value='4' colorScheme='green'>4</Radio>
                  <Radio size='lg' value='5' colorScheme='yellow'>5</Radio>

                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
          <Card marginBlockEnd={10} id="card8">
            <CardHeader margin={0}>
              <Heading size='md'>We play an active role in the ecosystem, that our business operates in; adopting the best practices and adapting our mindset </Heading>
            </CardHeader>
            <CardBody>
              <RadioGroup onChange={setValue8} value={value8}>
                <Stack direction='row'>
                  <Radio size='lg' value='1' colorScheme='red'>1</Radio>
                  <Radio size='lg' value='2' colorScheme='orange'>2</Radio>
                  <Radio size='lg' value='3' colorScheme='blue'>3</Radio>
                  <Radio size='lg' value='4' colorScheme='green'>4</Radio>
                  <Radio size='lg' value='5' colorScheme='yellow'>5</Radio>

                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
          <Card marginBlockEnd={10} id="card9">
            <CardHeader margin={0}>
              <Heading size='md'>Our organization believes in empowerment, diversity and inclusion, through its policies and decisions  </Heading>
            </CardHeader>
            <CardBody>
              <RadioGroup onChange={setValue9} value={value9}>
                <Stack direction='row'>
                  <Radio size='lg' value='1' colorScheme='red'>1</Radio>
                  <Radio size='lg' value='2' colorScheme='orange'>2</Radio>
                  <Radio size='lg' value='3' colorScheme='blue'>3</Radio>
                  <Radio size='lg' value='4' colorScheme='green'>4</Radio>
                  <Radio size='lg' value='5' colorScheme='yellow'>5</Radio>

                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
          <Card marginBlockEnd={10} id="card10">
            <CardHeader margin={0}>
              <Heading size='md'>There is a strong sense of enthusiasm about digitalization in all our processes, systems and interfaces</Heading>
            </CardHeader>
            <CardBody>
              <RadioGroup onChange={setValue10} value={value10}>
                <Stack direction='row'>
                  <Radio size='lg' value='1' colorScheme='red'>1</Radio>
                  <Radio size='lg' value='2' colorScheme='orange'>2</Radio>
                  <Radio size='lg' value='3' colorScheme='blue'>3</Radio>
                  <Radio size='lg' value='4' colorScheme='green'>4</Radio>
                  <Radio size='lg' value='5' colorScheme='yellow'>5</Radio>

                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
          <Card marginBlockEnd={10} id="card11">
            <CardHeader margin={0}>
              <Heading size='md'>Employee engagement and culture building are at the highest level of business priority areas   </Heading>
            </CardHeader>
            <CardBody>
              <RadioGroup onChange={setValue11} value={value11}>
                <Stack direction='row'>
                  <Radio size='lg' value='1' colorScheme='red'>1</Radio>
                  <Radio size='lg' value='2' colorScheme='orange'>2</Radio>
                  <Radio size='lg' value='3' colorScheme='blue'>3</Radio>
                  <Radio size='lg' value='4' colorScheme='green'>4</Radio>
                  <Radio size='lg' value='5' colorScheme='yellow'>5</Radio>

                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
          <Card marginBlockEnd={10} id="card12">
            <CardHeader margin={0}>
              <Heading size='md'>There are adequate opportunities for development & talent mobility across the organization   </Heading>
            </CardHeader>
            <CardBody>
              <RadioGroup onChange={setValue12} value={value12}>
                <Stack direction='row'>
                  <Radio size='lg' value='1' colorScheme='red'>1</Radio>
                  <Radio size='lg' value='2' colorScheme='orange'>2</Radio>
                  <Radio size='lg' value='3' colorScheme='blue'>3</Radio>
                  <Radio size='lg' value='4' colorScheme='green'>4</Radio>
                  <Radio size='lg' value='5' colorScheme='yellow'>5</Radio>

                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
        </Box >
        <Box>
        <Button size='lg' colorScheme='blue' onClick={handleSubmit}>Submit</Button>

        {/* <Button size='lg' colorScheme='green' onClick={jatin}>See Results</Button> */}
</Box>



      </Container>
    </>
  );
}

export default Form;
