import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { contactUs } from '../../redux/actions/other';
import toast from 'react-hot-toast';

const Contact = () => {
    const[name,setname]=useState('');
    const[email,setEmail]=useState('');
    const[ismessage,setmessage]=useState('');

    const dispatch=useDispatch();
    const {error,message}=useSelector(state=>state.other);
const submithandler=(e)=>{
e.preventDefault();
dispatch(contactUs(name,email,ismessage))
}
useEffect(() => {
  if(message) {
    toast.success(message)
    dispatch({type:'clearMessage'})
  }
  if(error) {
    toast.error(error)
    dispatch({type:'clearError'})
  }
 
},[dispatch,message,error])



  return <Container h={'95vh'}>
   <VStack>
<Heading children="Contact Us"></Heading>        
<form onSubmit={submithandler}>
<Box marginY={'4'}>
           <FormLabel htmlFor='name' children={"Name"}/>
            <Input required id='name' value={name} onChange={(e)=>setname(e.target.value)} placeholder='abc' type='text' focusBorderColor='yellow.500'/>
         
           </Box>


           <Box marginY={'4'}>
           <FormLabel htmlFor='email' children={"Email Address"}/>
            <Input required id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='abc@gmail.com' type='email' focusBorderColor='yellow.500'/>
         
           </Box>

           <Box marginY={'4'}>
           <FormLabel htmlFor='message' children={"Message"}/>
            <Textarea required id='message' value={ismessage} onChange={(e)=>setmessage(e.target.value)} placeholder='your message' type='text' focusBorderColor='yellow.500'/>
         
           </Box>


         <Button my={'4'} colorScheme='yellow'  type='submit'>Send mail</Button>
           
         
          
        </form>
</VStack>

  </Container>
}

export default Contact