
import React, { useEffect } from 'react'
import cursor from"../../../assets/images/cursor3.png";
import { Box, Grid, HStack, Heading, Progress, Stack, Text } from '@chakra-ui/react';
import Sidebar from "../Sidebar.jsx";
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart.jsx';
import { Doughnut } from 'react-chartjs-2';
import {useDispatch, useSelector} from 'react-redux'
import { DashboardStats } from '../../../redux/actions/admin.js';



const Databox=({title,qty,qtypercent,profit})=>(
    <Box 
    width={['full','20%']}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    p={'8'} borderRadius={'1g'}
    >
<Text children={title} />
<HStack spacing={'6'}>
<Text fontSize={'2xl'} fontWeight={'bold'} children={qty}/>
<HStack>
    <Text children={`${qtypercent}%`} />
    {profit?<RiArrowUpLine color='green'/>:
    <RiArrowDownLine color='red'/>
    }
</HStack>
</HStack>

<Text opacity={'0.6'} children="Since last month" />

    </Box>
)

const Bar = ({ title, value, profit }) => (
    <Box py={['4', '4']} px={['4', '20']} width={'full'}>
      <Heading size="sm" mb="2" fontSize={['md', 'md']}>
        {title}
      </Heading>
      <HStack alignItems="center" flexDirection="row">
        <Text fontSize={['sm', 'md']}>
          {profit ? `${value}%` : `-${value}%`}
        </Text>
        <Box flex="1" ml="2">
          <Progress
            value={profit ? value : 0}
            colorScheme="purple"
            height="8px"
          />
        </Box>
        <Text fontSize={['sm', 'md']}>
          {`${value > 100 ? value : 100}%`}
        </Text>
      </HStack>
    </Box>
  );
  

const Dashboard = () => {
  const dispatch=useDispatch();
  const {stats,  userscount,
    subscriptioncount,
    viewscount,
    subscriptionpercent,
    viewspercent,
    userspercent,
    subscriptionprofit,
    viewsprofit,
    usersprofit}=useSelector(state=>state.admin)
  useEffect(() => {
   
    dispatch(DashboardStats());
  },[dispatch])
  return <Grid
  css={{
    cursor:`url(${cursor}),default`,
  }}
  minH={'100vh'}  templateColumns={['1fr','5fr 1fr']}
  >

    {stats && (
    <Box boxSizing='border-box' py={'16'} px={['4','0']}>

<Text textAlign={'center'} opacity={0.5} children={`Last change was on ${String(new Date(stats[11].createdOn)).split('G')[0]}`} />

<Heading children="Dashboard" ml={['0','20']} mb={'10'} textAlign={['center','left']}/>

<Stack direction={['column','row']}
minH={'24'} justifyContent={['center','space-evenly']}>

<Databox title="Views" qty={viewscount} qtypercent={viewspercent} profit={viewsprofit} />
<Databox title="Users" qty={userscount} qtypercent={userspercent} profit={usersprofit} />
<Databox title="Subscription" qty={subscriptioncount} qtypercent={subscriptionpercent} profit={subscriptionprofit} />

</Stack>


<Grid templateColumns={['1fr','2fr 1fr']}>
<Box p={'4'}>
<Heading textAlign={['center','left']} size={'md'} children={'Progress Bar'} ml={['0','16']} my={'8'}/>

<Box>
    <Bar profit={viewsprofit} title={'Views'} value={viewspercent} />
    <Bar profit={usersprofit} title={'Users'} value={userspercent} />
    <Bar profit={subscriptionprofit}  title={'Subscription'} value={subscriptionpercent} />

</Box>
</Box>


<Box boxSizing='border-box' p={['0','16']} py={'4'}>
<Heading  textAlign={'center'}  size={'md'} children={'Users'}/>
<DoughnutChart users={[subscriptioncount,userscount-subscriptioncount]}/>
</Box>
    </Grid>


    </Box>
    )}

  
<Sidebar />


  </Grid>
}
export default Dashboard


