import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, position, useDisclosure } from '@chakra-ui/react';
import {RiDashboardFill, RiLogoutBoxLine} from "react-icons/ri";
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getMyProfile, login, logout } from '../../../redux/actions/user';


const LinkButton=({url="/",title="Home",onClose})=>(

    <  Link onClick={onClose} to={url}>
   <Button variant={"ghost"}>{title}</Button> 
    </Link>
);



const Header = ({isAuthenticated=false,user}) => {
    const {isOpen,onOpen,onClose}=useDisclosure();

    const dispatch=useDispatch();

    const logouthandler=()=>{
       
       onClose();
        dispatch(logout())
    
    }
  return<>
  
  <ColorModeSwitcher/>

  <Button   onClick={onOpen} colorScheme='yellow' width={20} height={20} rounded={"full"} position={"fixed"} top={6} left={6} size={'sm'}>
MENU
  </Button>

  <Drawer placement='left'  onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay backdropFilter={'blur(10px)'} />
<DrawerContent>
    <DrawerHeader borderBottom={"1px"}>LET LEARN</DrawerHeader>
    <DrawerBody>
        <VStack  spacing={4}  alignItems={'flex-start'}>
          <LinkButton  onClose={onClose} url="/" title="Home" />
          <LinkButton onClose={onClose} url="/courses" title="Browse All Courses" />
         
          <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
        
          <LinkButton onClose={onClose} url="/changerole" title="Change role (admin/user)" />
        

          <HStack justifyContent={"space-evenly"} position={"absolute"} bottom={"2rem"} width={"80%"}>
{isAuthenticated?(<>
<VStack>
    <HStack>
        <Link onClick={onClose} to="/profile"><Button variant="ghost" colorScheme='yellow'>Profile</Button></Link>
        <Button variant="ghost" onClick={()=>logouthandler()}>
            <RiLogoutBoxLine/>
            LOG OUT</Button>
    </HStack>

    {
        user && user.role==='admin' && <Link to="/admin/dashboard">
            <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                <RiDashboardFill style={{margin:"4px"}}/>
                DashBoard
            </Button>
        </Link>
    }

</VStack>
</>):(<>
<Link onClick={onClose} to="/login"><Button colorScheme='yellow'>Login</Button> </Link>
<p>OR</p>
<Link onClick={onClose} to="/register"><Button colorScheme='yellow'>Sign Up</Button></Link>

</>)}
          </HStack>
        </VStack>
    </DrawerBody>
</DrawerContent>
  </Drawer>
  
  </>
}

export default Header

