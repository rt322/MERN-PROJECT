import { Button, Container, HStack, Heading, Image, Input,  Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import study from "../../assets/images/stuudy.png"
import "../Courses/Courses.css"
import {Link} from "react-router-dom"
import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { getAllCourses } from '../../redux/actions/course'
import toast from 'react-hot-toast'
import { addtoplaylist } from '../../redux/actions/profile'
import { getMyProfile } from '../../redux/actions/user'

const Coursecard=({views,title,imgsrc,id,addtoplaylist,creator,description,lecturecount})=>{
return (
<VStack className='course' alignItems={["center","flex-start"]}>
    <Image  src={imgsrc} boxSize="60" margin={50} />
<Heading  textAlign={["center","left"]}  size={"40px"} fontFamily={"sans-serif"} noOfLines={2}  children={title}/>
<Text  children={description} noOfLines={2}/>

<HStack>
    <Text fontWeight={"bold"}  text-transform={"uppercase"} children={"Creator"}/>

    <Text fontFamily={"sans-serif"}  text-transform={"uppercase"} children={creator}/>
    
</HStack>

<Heading textAlign={"center"}  size={"xs"} children={`Lectures-${lecturecount}`} />
<Heading textAlign={"center"}  size={"xs"} children={`Views-${views}`} />

<Stack direction={["column","row"]} alignItems={"center"}>
  <Link to={`/course/${id}`}>
    <Button colorScheme='yellow'>Watch now</Button>
  </Link>
  <Button  variant={"ghost"} colorScheme='yellow' onClick={()=>addtoplaylist(id)}>Add to Playlist</Button>

</Stack>

</VStack>
)
}




const Courses = () => {
  
const dispatch=useDispatch();

const addtoPlaylist=async(courseId)=>{
  
await  dispatch(addtoplaylist(courseId));
dispatch(getMyProfile())
  }
  


const{courses,error,message
}=useSelector(state=>state.course)
useEffect(()=>{
  dispatch(getAllCourses());
  if(error){
    toast.error(error);
    dispatch({type:'clearError'})
}

if(message){
  toast.success(message);
  dispatch({type:'clearMessage'})
}

},[dispatch,error,message])

  return <Container paddingY={'8'}>

<Heading children="All Courses" margin={8} />


<Stack
    direction={["column","row"]}

justifyContent={["flex-start","space-evenly"]} 
alignItems={["center","flex-start"]}
>
{courses.length>0?  courses.map((item) => (
<Coursecard
key={item._id}
title={item.title}
description={item.description}
views={item.views}
imgsrc={item.poster.url}
id={item._id}
creator={item.createdBy}
lecturecount={item.numOfVideos}
addtoplaylist={addtoPlaylist}



/>
    )
    ):<Heading children='course not found'/>
    }
</Stack>
  </Container>
}
export default Courses

//()=no need to give return
//{}=need to give return