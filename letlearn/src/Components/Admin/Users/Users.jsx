import React, { useEffect } from 'react'
import cursor from"../../../assets/images/cursor3.png";
import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Sidebar from "../Sidebar.jsx"
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUserRole, deleteUsers, getallUsers } from '../../../redux/actions/admin.js';
import toast from 'react-hot-toast';





const Users = () => {
  const dispatch=useDispatch();
  const {users,error,message}=useSelector(state=>state.admin)

  const updatehandler=(userid)=>{
    
    dispatch(UpdateUserRole(userid))
  }
  
  const deletebuttonhandler=(userid)=>{
   dispatch(deleteUsers(userid));
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
    dispatch(getallUsers());
  },[dispatch,message,error])
  
  
  return (<Grid
  css={{
    cursor:`url(${cursor}),default`,
  }}
  minH={'100vh'}  templateColumns={['1fr','5fr 1fr']}
  >
    <Box>
    <Heading my={'16'} children={'All Users'} textAlign={'center'}/>

    <TableContainer w={['100vw','full']}>
    <Table variant={'simple'} size={'lg'}>
      <TableCaption>All available Users in database</TableCaption>
<Thead>
<Tr>
  <Th>Id</Th>
  <Th>Name</Th>
  <Th>Email</Th>
  <Th>Role</Th>
  <Th>Subscription</Th>
  <Th isNumeric>Action</Th>
</Tr>
</Thead>

<Tbody>
 {
 users && users.map(item=>(
    <Row updatehandler={updatehandler} deletebuttonhandler={deletebuttonhandler} key={item._id} item={item}/>
  ))
 }
</Tbody>
    </Table>

    </TableContainer>
    </Box>
<Sidebar />


  </Grid>)
}

export default Users

function Row({item,updatehandler,deletebuttonhandler}) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription && item.subscription.status==='active'?'Active':'Not Active'}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
<Button onClick={()=>updatehandler(item._id)} color={'purple.500'}>
  Change Role
</Button>
<Button onClick={()=>deletebuttonhandler(item._id)}  color={'purple.600'}>
  <RiDeleteBin7Fill/>
</Button>
        </HStack>
      </Td>
    </Tr>
  )
}