import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import introvideo from "../../assets/videos/introvid.mp4"
import {useDispatch, useSelector} from "react-redux"
import { Navigate, useParams } from 'react-router-dom'
import { getCourseLectures } from '../../redux/actions/course'
import { getMyProfile } from '../../redux/actions/user'

const Coursepage = ({user}) => {
const[Lecturenumber,setLecturenumber]=useState(0);
 
const{lectures}=useSelector(state=>state.course)
const dispatch=useDispatch();

 
const params=useParams();
useEffect(() => {
 dispatch(getCourseLectures(params.id)) 
}, [dispatch,params.id])

if((user.role !== "admin" || user.role===undefined) && (user.subscription===undefined || user.subscription.status!=="active")){
   
return <Navigate to={'/subscribe'} />
}



return (
    <Grid minH={"90vh"} templateColumns={['1fr','3fr 1fr' ]}>
      <Box>
        {lectures.length > 0 ? (
          <>
            <video width={'100%'} autoPlay={true} controls src={lectures[Lecturenumber].video.url} controlsList='nodownload noremoteplayback'></video>
  
            <Heading m={'4'} children={`#${Lecturenumber + 1} ${lectures[Lecturenumber].title}`} />
            <Heading m={'4'} children={"Description"} />
            <Text m={'4'} children={`${lectures[Lecturenumber].description}`} />
          </>
        ) : (
         <Heading  children={'No Lectures'}/>
        )}
      </Box>
      <VStack>
        {lectures.map((item, index) => (
          <button
            onClick={() => setLecturenumber(index)}
            key={item._id}
            style={{
              width: "100%",
              padding: "1rem",
              borderBottom: '1px solid black'
            }}
          >
            <Text noOfLines={'1'}>
              #{index + 1} {item.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
        }  
export default Coursepage