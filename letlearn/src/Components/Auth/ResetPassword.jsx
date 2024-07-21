import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../../redux/actions/profile';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const ResetPassword = () => {
    
    const[password,setpassword]=useState('');
    const params=useParams();
    const navigate=useNavigate();
    const {loading,message,error}=useSelector(state=>state.profile)
    const dispatch=useDispatch(); 
  
    const submitHandler=e=>{
        e.preventDefault();
        dispatch(resetPassword(params.token,password))
    }
    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch({type:'clearError'})
        }
        if(message){
            toast.success(message);
            dispatch({type:'clearMessage'})
          navigate('/login')
          
        }}
    ,[dispatch,error,message])
  
  return <Container h={"95vh"}>
  <form onSubmit={submitHandler}>
      <Heading children={"Reset Password"}/>
      

           <Box marginY={'4'}>
           <FormLabel htmlFor='password' children={"Password"}/>
            <Input required id='password' value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='New password' type='password' focusBorderColor='yellow.500'/>
         
           </Box>

<Button type='submit' colorScheme='yellow'>Reset   Password</Button>
          
           </form>
           <VStack/>
           </Container>
           }
export default ResetPassword;