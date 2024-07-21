import { Button, Container, Heading, Input, Toast, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { changePassword } from '../../redux/actions/profile';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast'; 

const Changepassword = () => {

    const[oldpassword,setoldpassword]=useState('');
    const[newpassword,setnewpassword]=useState('');

    const dispatch=useDispatch();
    const submitHandler = e => {
      e.preventDefault();
      dispatch(changePassword(oldpassword,newpassword));
    };//e.preventdefault prevent refreshing of page

    const{loading,message,error}=useSelector(state=>state.profile);

    useEffect(()=>{
      
      if(message) {
        toast.success(message)
        dispatch({type:'clearMessage'})
      }
      if(error) {
        toast.error(error)
        dispatch({type:'clearError'})
      }
     
    },[dispatch,error,message])
  return (
   <Container py={'8'} minH={'95vh'}>
<form onSubmit={submitHandler}>
    <Heading children={'Change Password'} my={'16'} textAlign={['center','left']} />

      <VStack spacing={'8'}>
      <Input required  value={oldpassword} onChange={(e)=>setoldpassword(e.target.value)} placeholder='Enter old password' type='password' focusBorderColor='yellow.500'/>

      <Input required  value={newpassword} onChange={(e)=>setnewpassword(e.target.value)} placeholder='Enter new password' type='password' focusBorderColor='yellow.500'/>

<Button isLoading={loading} type='submit' colorScheme='yellow'>Change Password</Button>
        </VStack> 
</form>
   </Container>
    
  )
}

export default Changepassword