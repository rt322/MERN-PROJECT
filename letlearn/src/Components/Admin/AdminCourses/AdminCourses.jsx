import React, { useEffect, useState } from 'react'
import cursor from"../../../assets/images/cursor3.png";
import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import Sidebar from "../Sidebar.jsx"
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModel from './CourseModel.jsx';
import { getAllCourses, getCourseLectures } from '../../../redux/actions/course.js';
import {useDispatch, useSelector} from 'react-redux'
import { addLectureCourse, deleteCourse, deleteLecture } from '../../../redux/actions/admin.js';
import toast from 'react-hot-toast';




const AdminCourses = () => {
  const {courses,lectures}=useSelector(state=>state.course);

  const {error,message}=useSelector(state=>state.admin);
 
 
  const{isOpen,onClose,onOpen}=useDisclosure();
  const dispatch=useDispatch();
const[courseId,setcourseId]=useState('');
const[coursetitle,setcoursetitle]=useState('');



  const courseDetailshandler=(courseid,title)=>{

    dispatch(getCourseLectures(courseid));
    onOpen();
    setcourseId(courseid);
    setcoursetitle(title);
    //portal will open on clicking on it
  }
  
  const deletebuttonhandler=(courseid)=>{
   
    dispatch(deleteCourse(courseid))
    
  }

  const deleteLecturebuttonhandler=async(courseId,lectureId)=>{
   await dispatch(deleteLecture(courseId,lectureId));
   dispatch(getCourseLectures(courseId))

  }
//add lecture handler is form type input data
  const addLecturehandler=async(e,courseId,title,description,video)=>{
    e.preventDefault();
    const myform=new FormData();

  myform.append('title',title);
  myform.append('description',description);
 
  myform.append('file',video);
await dispatch(addLectureCourse(courseId,myform));
dispatch(getCourseLectures(courseId))
  }

  useEffect(() => {
    if(message) {
      toast.success(message)
      dispatch({type:'clearMessage'})
    }
    if(error) {
      toast.error(error)
      dispatch({type:'clearError'})
    }
    dispatch(getAllCourses())
  },[dispatch,message,error])
  
  
  return (<Grid
  css={{
    cursor:`url(${cursor}),default`,
  }}
  minH={'100vh'}  templateColumns={['1fr','5fr 1fr']}
  >
    <Box>
    <Heading my={'16'} children={'All Courses'} textAlign={'center'}/>

    <TableContainer w={['100vw','full']}>
    <Table variant={'simple'} size={'lg'}>
      <TableCaption>All available courses in database</TableCaption>
<Thead>
<Tr>
  <Th>Id</Th>
  <Th>Poster</Th>
  <Th>Title</Th>
  <Th>Category</Th>
  <Th>Creator</Th>
  <Th isNumeric>Views</Th>
  <Th isNumeric>Lectures</Th>
  <Th isNumeric>Action</Th>
</Tr>
</Thead>

<Tbody>
 {
  courses.map(item=>(
    <Row courseDetailshandler={courseDetailshandler} deletebuttonhandler={deletebuttonhandler} key={item._id} item={item}/>
  ))
 }
</Tbody>
    </Table>

    </TableContainer>
   <CourseModel isOpen={isOpen} onClose={onClose} 
   id={courseId}
   deleteLecturebuttonhandler={deleteLecturebuttonhandler} coursetitle={coursetitle}
   addLecturehandler={addLecturehandler}
   lectures={lectures}
  
   />
    </Box>
<Sidebar />


  </Grid>)
}


function Row({item,courseDetailshandler,deletebuttonhandler}) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
<Image src={item.poster.url} />

      </Td>
      <Td>{item.title}</Td>
      <Td>{item.category}</Td>
      <Td>{item.createdBy}</Td>
    
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
<Button onClick={()=>courseDetailshandler(item._id,item.title)} color={'purple.500'} i>
  View Lectures
</Button>
<Button onClick={()=>deletebuttonhandler(item._id)}  color={'purple.600'} i>
  <RiDeleteBin7Fill/>
</Button>
        </HStack>
      </Td>
    </Tr>
  )
}
export default AdminCourses