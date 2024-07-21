import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buySubscription } from '../../redux/actions/user';
import toast from 'react-hot-toast';
import logo from '../../assets/images/payment.webp'
import { server } from '../../redux/store';

const Subscribe = ({user}) => {

const dispatch=useDispatch();
const[key,setkey]=useState("");

const {error,subscriptionId}=useSelector(state=>state.subscription)
const {error:courseError}=useSelector(state=>state.course)

const subscribehandler=async()=>{
  const {data}=await axios.get(`${server}/razorpaykey`);
  setkey(data.key);
  dispatch(buySubscription());
}

 
useEffect(() => {
  if(error) {
    toast.error(error)
    dispatch({type:'clearError'})
  }
  if(courseError) {
    toast.error(courseError)
    dispatch({type:'clearError'})
  }
  if(subscriptionId) {
   const openPopUp=()=>{
const options={
  key,
  name:"Let's Learn",
  description:"Get access to all premium content.",
  image:logo,
  subscription_id:subscriptionId,
  callback_url:`${server}/paymentverification`,
  prefill:{
    name:user.name,
    email:user.email,
    contact:""
  },
  notes:{
    address:"Our website"
  },
  theme:{
    color:"#FFC800"
  }
};
   
   const razor=new window.Razorpay(options);
   razor.open();
}
   openPopUp();
  }
 
},[dispatch,error,user.name,user.email,courseError,key,subscriptionId]);


  return (
   <Container h={'90vh'} p={'16'}>
    <Heading children="Welcome" textAlign={'center'} />

    <VStack borderRadius={'lg'} boxShadow={'lg'} >
        <Box bg={'yellow.400'} p={'4'} css={{borderRadius:'8px 8px 0 0'}}>
<Text color={'black'} children={'Pro Pack-Rs299'} />
        </Box>

        <Box p={'4'}>
<VStack textAlign={'center'} px={'8'} >
    <Text  children={'Join Pro pack and get access to all content'} />
    <Heading size={'md'} children="Rs299 Only" />
</VStack>
<Button my={'8'} w={'full'} colorScheme='yellow' onClick={subscribehandler}>Buy Now</Button>
        </Box>
    </VStack>
   </Container>
  )
}


export default Subscribe