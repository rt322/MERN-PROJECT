import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'

const CourseModel = ({isOpen,onClose,id,deleteLecturebuttonhandler,coursetitle,lectures=[],addLecturehandler}) => {
    
    const[title,settitle]=useState('');
    const[description,setdescription]=useState('');
    const[video,setvideo]=useState();
    const[videoprev,setvideoprev]=useState();
   

    const fileUploadcss={
        cursor:'pointer',
        backgroundColor:'white',
        color:'purple'
      }

      const changeVideoHandler=e=>{
        const file=e.target.files[0];
        const reader=new FileReader();
      
        reader.readAsDataURL(file);
      
        reader.onloadend=()=>{
          setvideoprev(reader.result);
          setvideo(file);
        }
      }
      const handleclose=()=>{
        settitle('');
        setdescription('');
        setvideo('');
        setvideoprev('');
       
      };


  return <Modal isOpen={isOpen} size='full' onClose={handleclose}>
  <Box>
  <Heading children={`${coursetitle}`}/>
  </Box>
   
    <ModalOverlay/>
    <ModalContent>
     
       

        <ModalBody p={'16'}>
            <Grid templateColumns={['1fr','3fr 1fr']}>
<Box px={['0','16']}>
    <Box my={'5'}>
        <Heading children={coursetitle}/>
        <Heading children={`#${id}`} size={'sm'} opacity={0.4}/>

    </Box>
    <Heading children={'Lectures'} size={'lg'}/>

{
    lectures.map((item,index)=>(
        <VideoCard
        key={index}
title={item.title}
description={item.description}
num={index+1}
lectureId={item._id}
courseId={id}
deleteLecturebuttonhandler={deleteLecturebuttonhandler}

/>


    ))
}
</Box>

<Box>
   <form onSubmit={e=>addLecturehandler(e,id,title,description,video)}>
    <VStack spacing={'4'}>
<Heading children={'Add Leture'} size={'md'} />

<Input formBorderColor='purple.300' placeholder='Title' value={title} onChange={e=>settitle(e.target.value)}/>
<Input formBorderColor='purple.300' placeholder='Description' value={description} onChange={e=>setdescription(e.target.value)}/>
<Input 
accept='video/mp4'
required

type='file'
focusBorderColor='purple.300'
css={{
  '&::file-selector-button':{
    ...fileUploadcss
  }
}}
onChange={changeVideoHandler}
/>

{
    videoprev && (
        <video controlsList='nodownload' controls src={videoprev}>

        </video>
    )
}
<Button w={'full'} colorScheme='purple' type='submit'>
Upload
</Button>

    </VStack>
    </form> 
</Box>
            </Grid>

        </ModalBody>
       
    </ModalContent>

  </Modal>
}

export default CourseModel;

function VideoCard({title,description,num,lectureId,courseId,deleteLecturebuttonhandler}) {
    return <Stack direction={['column','row']} my={'8'} borderRadius={'lg'} boxShadow={'0 0 10px rgba(107,70,193,0.5)'}  justifyContent={['flex-start','space-between']} p={['4','8']}>
        <Box>
          <Heading size={'sm'} children={`#${num} ${title}`}/>
          <Text children={description}/>
        </Box>

        <Button color={'purple.600'}
        onClick={()=>deleteLecturebuttonhandler(courseId,lectureId)}>
            <RiDeleteBin7Fill/>
        </Button>

    </Stack>
}

