import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { UpdateUserRole } from '../redux/actions/admin';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { getMyProfile } from '../redux/actions/user';
import { useNavigate } from 'react-router-dom';

const ChangeRole = () => {
   
    const dispatch=useDispatch();
    const{user,message,error}=useSelector(state=>state.user);
    const navigate=useNavigate();

    const updatehandler=async(userid)=>{
        
await  dispatch(UpdateUserRole(userid))
   dispatch(getMyProfile());
        navigate('/profile');
      }
     
      

   

   
   
   
  return (
   <Container py={'8'} minH={'95vh'}>
<form >
    <Heading children={'Update Role'} my={'5'} textAlign={['center','left']} />
<Text p={'5'} variant={'ghost'} children={'If you are user ,you will become admin and vice-versa.'} />
      <VStack spacing={'8'}>
      <Button onClick={() => updatehandler(user._id)} colorScheme='yellow'>
  Update Role
</Button>


        </VStack> 
</form>
   </Container>
    
  )
}


export default  ChangeRole