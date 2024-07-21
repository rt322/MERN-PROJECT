import React from 'react'
import {Heading, Stack,VStack,Text, Button,Image, Box, HStack} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import "./home.css";
import vg from "../assets/images/stuudy.png";
import {CgGoogle,CgYoutube} from "react-icons/cg";
import {SiCoursera,SiUdemy} from "react-icons/si";
import {DiAws} from "react-icons/di";
import introvideo from "../assets/videos/introvid.mp4"

const Home = () => {
  return   (
   <section>
    <div className="container">
     <Stack
     //stack is div with display flex
      direction={["column","row"]}//phone=column,else row
      height="100%"
      justifyContent={["center","space-between"]}//phone=center
      alignItems="center"
      spacing={['16','56']}
      //if 2 div are in stack,spacing decides margin b/w them 16 (1=4px)for phone and 56 for column
      >
        {/*vertical stack=by default direction column*/}
<VStack width={"full"} alignItems={["center","flex-end"]}>
<Heading m={"5"} children="Let's Learn" size={'3xl'} color='purple'/>
  <Heading children="Learn from experts" size={'2xl'}/>
  <Text children="Find valuable content at reasonable price" />
<Link to="/courses">
<Button colorScheme='yellow'>
  Explore Now
</Button>
</Link>

<Link to="/subscribe">
<Button colorScheme='purple'>
  Subscription
</Button>
</Link>

</VStack>

<Image className='vector-graphics' boxSize={'md'} src={vg} objectFit="contain"/>

     </Stack>
    </div>

    <Box padding={'8'} bg="blackAlpha.800">
      <Heading textAlign={"center"} fontFamily={"body"}  color={"yellow"} children="Our Brands"/>
   

    <HStack className='brandsbanner' justifyContent={'space-evenly'} marginTop={4}>
<CgGoogle />
<CgYoutube />
<SiCoursera />
<SiUdemy />
<DiAws />
 </HStack>
    </Box>

    <div className="container2">
<video autoPlay={true} controls src={introvideo} controlsList='nodownload nofullscreen noremoteplayback'>
  
</video>

    </div>
   </section>
  );
}
  

export default Home