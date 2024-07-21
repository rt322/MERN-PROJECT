import { Button, Container, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom';
import study from "../../assets/images/stuudy.png"
import { RiDeleteBin7Fill, RiDeleteBin7Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removefromplaylist } from '../../redux/actions/profile';
import { getMyProfile } from '../../redux/actions/user';
import toast from 'react-hot-toast';

const Profile = ({user}) => {
    const dispatch=useDispatch();
    const{message,error}=useSelector(state=>state.profile);

    useEffect(()=>{
      
        if(message) {
          toast.success(message)
          dispatch({type:'clearMessage'})
        }
        if(error) {
          toast.error(error)
          dispatch({type:'clearError'})
        }
       
      },[dispatch,error,message])
   
    
   /*return  (  <Container height={'90vh'}>
        <Heading children={'Refresh website and then login as now you are logged out.'}/>
      </Container>
      
       ) }*/

       if(!user){
      dispatch(getMyProfile());
        return <Navigate to={'/login'} />
        }
        

    const removeFromPlaylist=async(id)=>{
      await  dispatch(removefromplaylist(id));

      dispatch(getMyProfile())
    }

    

  return (
   <Container minH={'95vh'} py={'8'}>
    <Heading children={'Profile'} m={'8'}/>

    <Stack justifyContent={'flex-start'} direction={['column','row'] } alignItems={'center'} spacing={['8','16']} padding={'8'}>

    </Stack>

    <VStack  spacing={'4'} alignItems={['center','flex-start']}>

    <HStack>
    <Heading children={'Role'} fontWeight={'bold'} colorScheme='purple'/>
    <Heading children={user.role} textColor='purple.500'/>
</HStack>


<HStack>
    <Text children={'Name'} fontWeight={'bold'} />
    <Text children={user.name} />
</HStack>

<HStack>
    <Text children={'Email'} fontWeight={'bold'} />
    <Text children={user.email} />
</HStack>

<HStack>
    <Text children={'CreatedAt'} fontWeight={'bold'} />
    <Text children={user.createdAt.split('T')[0]} />
</HStack>



<HStack>
    <Text children={'CreatedAt'} fontWeight={'bold'} />
    <Text children={user.createdAt.split('T')[0]} />
</HStack>

<Stack direction={['column','row']}  alignItems={'center'}>
    <Link to={'/updateprofile'}  ><Button>Update Profile</Button></Link>

    <Link to={'/changepassword'}><Button>Change Password</Button></Link>

</Stack>
    </VStack>

    <Heading children={'Playlist'} size={'md'} my='8' />
    {
        user.playlist.length >0 && (
            <Stack justifyContent={'flex-start'} direction={['column','row'] } alignItems={'center'} spacing={['8','16']} padding={'8'}>
{
    user.playlist.map((element)=>{
        return (
        <VStack w={'48'} key={element.course}>
<Image boxSize={'full'} src={element.poster}/>

<HStack>
    <Link to={`/course/${element.course}`}>
    <Button variant={'ghost'} colorScheme='yellow'>Watch Now</Button>
    </Link>

<Button onClick={()=>removeFromPlaylist(element.course)}>
    <RiDeleteBin7Fill/>
</Button>


</HStack>

        </VStack>);
    })
}
            </Stack>
        )
    }
   </Container>
  )
}

export default Profile