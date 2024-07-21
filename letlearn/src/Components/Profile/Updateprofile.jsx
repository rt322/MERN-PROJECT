import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { updateprofile } from '../../redux/actions/profile';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'; 
import { getMyProfile } from '../../redux/actions/user';

const Updateprofile = () => {

    const[name,setname]=useState('');
    const[email,setemail]=useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
  
    const submitHandler = async e => {
      e.preventDefault();
     await dispatch(updateprofile(name,email));
     dispatch(getMyProfile());
      navigate('/profile')
    };//e.preventdefault prevent refreshing of page

   
  return (
   <Container py={'8'} minH={'95vh'}>
<form onSubmit={submitHandler}>
    <Heading children={'Update Profile'} my={'16'} textAlign={['center','left']} />

      <VStack spacing={'8'}>
      <Input   value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter new name' type='text' focusBorderColor='yellow.500'/>
<Text children={'OR'} textAlign={'center'} size={'md'}/>
      <Input   value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter new email' type='email' focusBorderColor='yellow.500'/>

<Button type='submit' colorScheme='yellow' >Update</Button>
        </VStack> 
</form>
   </Container>
    
  )
}


export default Updateprofile