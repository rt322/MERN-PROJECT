import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialYoutube} from "react-icons/ti"

const Footer = () => {
  return <Box padding={'4'}  bg={"blackAlpha.900"} minH={"10vh"}>
<Stack>
  <VStack alignItems={["center","flex-start"]}>
  <Heading children="All Rights Reserved" color={"white"}/>
  <Heading fontFamily={"body"} size={"sm"} children={"@LETLEARN"} color={"yellow"}/>
  </VStack>

{/*
<HStack justifyContent={"end"}  >

  <a href="http://youtube.com/6packprogrammer" target='_blank'><TiSocialYoutube/></a>
  
</HStack> */}
</Stack>
  </Box>
}

export default Footer