import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Line } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location=useLocation();
  return (
   <VStack  boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}>
   <LinkButton  Icon={RiDashboardFill} text={'DashBoard'} url={'dashboard'} active={location.pathname==="/admin/dashboard"}/>
   <LinkButton  Icon={RiAddCircleFill} text={'Create Course'} url={'createcourse'} active={location.pathname==="/admin/createcourse"}/>
   <LinkButton  Icon={RiEyeFill} text={'Courses'} url={'admincourses'} active={location.pathname==="/admin/admincourses"}/>
   <LinkButton  Icon={RiUser3Line} text={'Users'} url={'users'} active={location.pathname==="/admin/users"}/>
  
   

   </VStack>
  )
}

export default Sidebar

function LinkButton({url,Icon,text,active}){
  return (
    <Link to={`/admin/${url}`}>
    <Button variant={'ghost'} m={'6'} colorScheme={active ? 'purple' : ''}>
      <Icon style={{margin:'4px'}}/>
      {text}
    </Button>
    
        </Link>
  )
}