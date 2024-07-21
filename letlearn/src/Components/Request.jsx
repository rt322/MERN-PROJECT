import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

const Request = () => {
    const[name,setname]=useState('');
    const[email,setEmail]=useState('');
    const[course,setcourse]=useState('');
  return <Container h={'95vh'}>
  <VStack>
<Heading children="Request New Course"></Heading>        
<form>
<Box marginY={'4'}>
          <FormLabel htmlFor='name' children={"Name"}/>
           <Input required id='name' value={name} onChange={(e)=>setname(e.target.name)} placeholder='abc' type='text' focusBorderColor='yellow.500'/>
        
          </Box>



          <Box marginY={'4'}>
          <FormLabel htmlFor='email' children={"Email Address"}/>
           <Input required id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='abc@gmail.com' type='email' focusBorderColor='yellow.500'/>
        
          </Box>

          <Box marginY={'4'}>
          <FormLabel htmlFor='course' children={"Message"}/>
           <Textarea required id='course' value={course} onChange={(e)=>setcourse(e.target.message)} placeholder='your course' type='text' focusBorderColor='yellow.500'/>
        
          </Box>


        <Button my={'4'} colorScheme='yellow'  type='submit'>Send mail</Button>
          
        
         
       </form>
</VStack>

 </Container>
}

export default Request