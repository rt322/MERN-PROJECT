import { Box, Button, ButtonGroup, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxBlankCircleFill, RiCheckboxCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
   <Container h={'90vh'} p={'16'}>
<Heading my={'8'} textAlign={'center'} children={'You have Pro Pack'}/>

<VStack borderRadius={'lg'} boxShadow={'lg'} >
        <Box bg={'yellow.400'} p={'4'} css={{borderRadius:'8px 8px 0 0'}}>
<Text color={'black'} children={'Payment Success'} />
        </Box>

        <Box p={'4'} textAlign={'center'}>
<VStack textAlign={'center'} px={'8'} >
    <Text  children={'Congrats you are a pro member now.You have access to premium content.'} />
    <Heading size={'4xl'}>
        <RiCheckboxCircleFill/>
    </Heading>
</VStack>


<Link to="/profile" >
        <Button p={'4'} variant={'ghost'}>Go to Profile</Button>
    </Link>
        </Box>
    </VStack>
   
   </Container>
  )
}

export default PaymentSuccess