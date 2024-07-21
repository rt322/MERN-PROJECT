import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../redux/actions/profile';
import toast from 'react-hot-toast';

const ForgetPassword = () => {
   
    const[email,setEmail]=useState('');
    const dispatch=useDispatch();
    const {loading,message,error}=useSelector(state=>state.profile)
    const submitHandler=e=>{
        e.preventDefault();
        dispatch(forgetPassword(email))
    }
    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch({type:'clearError'})
        }
        if(message){
            toast.success(message);
            dispatch({type:'clearMessage'})
        }}
    ,[dispatch,error,message])
  return <Container h={"95vh"}>
  <form onSubmit={submitHandler}>
      <Heading children={"Forget Password"}/>
      
     
       
  <Box marginY={'4'}>
           <FormLabel htmlFor='email' children={"Email Address"}/>
            <Input required id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='abc@gmail.com' type='email' focusBorderColor='yellow.500'/>
         
           </Box>
<Button  type='submit' colorScheme='yellow'>Send Reset Link</Button>
          
           </form>
           <VStack/>
           </Container>
           }
export default ForgetPassword;