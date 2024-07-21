import React, { useEffect, useState } from 'react'
import cursor from"../../../assets/images/cursor3.png";
import { Box, Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react';
import Sidebar from "../Sidebar.jsx";
import {useDispatch, useSelector} from 'react-redux'
import { createCourse } from '../../../redux/actions/admin.js';
import toast from 'react-hot-toast';

const CreateCourse = () => {
const[title,settitle]=useState("");
const[description,setdescription]=useState("");
const[createdBy,setcreatedBy]=useState("");
const[image,setimage]=useState("");
const[imageprev,setimageprev]=useState("");
const[category,setcategory]=useState("");

const categories=['web development','ai','cybersecurity','machine learning','cloud computing and devops','blockchain'];
const dispatch=useDispatch();
const {error,message}=useSelector(state=>state.admin)

const fileUploadcss={
  cursor:'pointer',
  backgroundColor:'white',
  color:'yellow'
}



const changeImageHandler=e=>{
  const file=e.target.files[0];
  const reader=new FileReader();

  reader.readAsDataURL(file);

  reader.onloadend=()=>{
    setimageprev(reader.result);
    setimage(file);
  }
}



const submithandler=(e)=>{
e.preventDefault();
  //{ title, description, category, createdBy ,file}
  const myform=new FormData();

  myform.append('title',title);
  myform.append('description',description);
  myform.append('category',category);
  myform.append('createdBy',createdBy);
  myform.append('file',image);
dispatch(createCourse(myform))
}

useEffect(()=>{//toast if pop up message during login
  if(error){
    toast.error(error);
    dispatch({type:'clearError'});
  }
if(message) {
toast.success(message);
dispatch({type:'clearMessage'});
}

},[dispatch,error,message])



  return (<Grid
  css={{
    cursor:`url(${cursor}),default`,
  }}
  minH={'100vh'}  templateColumns={['1fr','5fr 1fr']}
  >
   <Container>
<form onSubmit={submithandler}>
    <Heading my={'16'} children={'Create Course'} textAlign={['center','left']}/>

    <VStack spacing={'8'}>
    <Input   value={title} onChange={(e)=>settitle(e.target.value)} placeholder='Title of min 4 characters' type='text' focusBorderColor='purple.300'/>

    <Input   value={description} onChange={(e)=>setdescription(e.target.value)} placeholder='Description of min 20 characters' type='text' focusBorderColor='purple.300'/>

    <Input   value={createdBy} onChange={(e)=>setcreatedBy(e.target.value)} placeholder='Creator name' type='text' focusBorderColor='purple.300'/>

    <Select focusBorderColor='purple.300' value={category} onChange={e=>setcategory(e.target.value)}>
<option>
  Select Category
</option>
{categories.map((item,index)=>(
  <option key={index} >{item}</option>
))}
</Select>
<Input 
accept='image/*'
required

type='file'
focusBorderColor='purple.300'
css={{
  '&::file-selector-button':{
    fileUploadcss
  }
}}
onChange={changeImageHandler}
/>
{imageprev && (
  <Image src={imageprev} boxSize={'64'} />
)}

<Button type='submit' colorScheme='purple'>
Create
</Button>
    </VStack>
    </form>
   </Container>
<Sidebar />


  </Grid>)
}

export default CreateCourse