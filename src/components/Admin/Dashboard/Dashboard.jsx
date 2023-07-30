import { Box, Grid, HStack, Heading, Progress, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'

const DataBox = ({ title, quantity, qtyPercentage, profit }) => {
    return (
        <>
            <Box boxShadow={'0px 0 5px #27debf'} padding={'1.5rem'} borderRadius={'10px'} width={['full', 'full', '25%', '20%']}>
                <Text>{title}</Text>
                <HStack spacing={'5'}>
                    <Text fontSize={'2xl'} fontWeight={'bold'} >{quantity}</Text>
                    <HStack >
                        <Text children={`${qtyPercentage}%`} />
                        {profit ? <RiArrowUpLine color='green' size={'20'} /> : <RiArrowDownLine color='red' size={'20'} />}
                    </HStack>
                </HStack>
                <Text opacity={0.5} fontSize={'sm'} children={'Since last month'} />
            </Box>

        </>
    )
}
const Bar = ({ title, value, profit }) => {
    return (
        <>
            <Box py={'4'} px={['0', '20']}>
                <Heading fontSize={'sm'} mb={'2'}>{title}</Heading>
                <HStack spacing={'2'} width={'full'} alignItems={'center'} >
                    <Text fontSize={'sm'} fontWeight={'bold'} >{profit ? "0%" : `-${value}%`}</Text>
                    <Progress colorScheme='teal' value={profit ? value : 0} width={`${value > 100 ? value : 100}%`} />
                    <Text fontSize={'sm'} fontWeight={'bold'} >100%</Text>
                </HStack>
            </Box>
        </>
    )
}
const Dashboard = () => {
    return (
        <>
            <Grid justifyContent={'center'} padding={['7rem 1rem', '7rem 2rem','7rem 2rem', '7rem 0rem 2rem 0rem']} templateColumns={['1fr', '1fr', '4fr 1fr', '5fr 1fr']} >
                <Box boxSizing='border-box'>
                    <Heading textAlign={'center'} mb={'1rem'} fontSize={['3xl', '3xl', '4xl', '6xl']} >Dashboard</Heading>
                    <Text textAlign={'center'} fontSize={'sm'} opacity={0.5} children={`Last Changed on: ${String(new Date()).split("G")[0]}`} />

                    <Stack direction={['column', 'column', 'row', 'row']} justifyContent={'space-evenly'} alignItems={'center'} mt={'2rem'} spacing={'2rem'} >
                        <DataBox title={'Views'} quantity={89} qtyPercentage={29} profit={true} data={0} />
                        <DataBox title={'Users'} quantity={23} qtyPercentage={34} profit={true} data={0} />
                        <DataBox title={'Subscription'} quantity={43} qtyPercentage={32} profit={true} data={0} />
                    </Stack>

                    <Box boxShadow={'0px 0px 5px #27debf'} borderRadius={'10px'} width={['100%', '100%', '100%', '83%']} margin={['2rem 0rem', '', '2rem 0rem', '2rem auto']} padding={['1rem', '3rem']} >
                        <Heading fontSize={['xl', 'xl', '2xl', '2xl']} mb={'1rem'} >Views Graph</Heading>
                    </Box>

                    <Grid templateColumns={['1fr','1fr','1fr','3fr 2fr']} >
                        <Box boxShadow={'0px 0px 5px #27debf'} borderRadius={'10px'} m={['','','', '0rem 0rem 2rem 7.5rem']} padding={['1rem', '3rem']}>
                            <Heading fontSize={['xl', 'xl', '2xl', '2xl']} mb={'1rem'} >Progress Bar</Heading>
                            <Box>
                                <Bar profit={true} title={'Views'} value={'89'} />
                                <Bar profit={true} title={'Users'} value={'23'} />
                                <Bar profit={false} title={'Subscriptions'} value={'43'} />
                            </Box>
                        </Box>
                        <Box boxShadow={'0px 0px 5px #27debf'} borderRadius={'10px'} m={['2rem 0rem', '2rem 0rem', '', '0rem 7rem 2rem 2rem']} padding={['1rem', '3rem']}>
                            <Heading fontSize={['xl', 'xl', '2xl', '2xl']} mb={'1rem'} >User's Graph</Heading>
                        </Box>

                    </Grid>

                </Box>
                <Sidebar />
            </Grid>
        </>
    )
}

export default Dashboard
