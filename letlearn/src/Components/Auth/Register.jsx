import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getMyProfile, register } from '../../redux/actions/user';
import { useDispatch } from 'react-redux';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
const navigate=useNavigate();
  const submitHandler =async e => {
    e.preventDefault();
  await  dispatch(register(name, email, password));
  dispatch(getMyProfile());
  navigate('/profile')
  };

  return (
    <Container h={"95vh"}>
      <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
        <Heading children={"Registration"} />
        <form onSubmit={submitHandler}>
          <Box marginY={'4'}>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input required id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='abc' type='text' focusBorderColor='yellow.500' />
          </Box>

          <Box marginY={'4'}>
            <FormLabel htmlFor='email'>Email Address</FormLabel>
            <Input required id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='abc@gmail.com' type='email' focusBorderColor='yellow.500' />
          </Box>

          <Box marginY={'4'}>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input required id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' type='password' focusBorderColor='yellow.500' />
          </Box>

          <Button my={'4'} colorScheme='yellow' type='submit'>
            Sign UP
          </Button>

          <Box my={'4'}>
            Already Signed up?{' '}
            <Link to="/login">
              <Button colorScheme='yellow' variant={'link'}>
                login here
              </Button>
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
