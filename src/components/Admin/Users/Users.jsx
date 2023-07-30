import { Box, Grid, Heading, Table, TableContainer, Thead, Tr,Th,Td, Tbody, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import Particles from '../../Home/Particles'
import { RiDeleteBin7Fill } from 'react-icons/ri'

const Users = () => {

  // creating temporary data for the table
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      role: 'admin',
      subscription: 'active'
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'johncena@gmail.com',
      role: 'user',
      subscription: 'active'
    },
  ]

  return (
    <>
    <Particles />
      <Grid padding={['7rem 1rem 3rem 1rem', '7rem 0rem 5rem 0rem']} backdropFilter={'blur(5px)'} templateColumns={['1fr', '1fr', '5fr 1fr', '5fr 1fr']} >
        <Box overflowX={'auto'}>
          <Heading textAlign={'center'} mb={'2rem'} fontSize={['3xl', '3xl', '4xl', '6xl']} >Users</Heading>
          <TableContainer width={['100vw','full']} >
            <Table textAlign={'center'} size={'lg'} variant={'simple'} >

              <Thead >
                <Tr textAlign={'center'}>
                  <Th textAlign={'center'}>ID</Th>
                  <Th textAlign={'center'}>Name</Th>
                  <Th textAlign={'center'}>Email</Th>
                  <Th textAlign={'center'}>Role</Th>
                  <Th textAlign={'center'}>Subscription</Th>
                  <Th textAlign={'center'} isNumeric >Action</Th>
                </Tr>
              </Thead>


              <Tbody textAlign={'center'}>
                {
                  users.map((user) => (
                    <Tr textAlign={'center'} key={user.id} >
                      <Td textAlign={'center'}>#{user.id}</Td>
                      <Td textAlign={'center'}>{user.name}</Td>
                      <Td textAlign={'center'}>{user.email}</Td>
                      <Td textAlign={'center'}>{user.role}</Td>
                      <Td textAlign={'center'}>{user.subscription==='active'?"Active":"Not Active"}</Td>
                      <Td textAlign={'center'} isNumeric >
                        <HStack justifyContent={'center'} spacing={'1rem'} >
                            <Button size={'sm'} colorScheme={'teal'} variant={'outline'} >Change Role</Button>
                            <Button size={'sm'} colorScheme='teal' variant={'outline'} ><RiDeleteBin7Fill size='16' /></Button>
                        </HStack>
                      </Td>
                    </Tr>
                  ))
                }
              </Tbody>



            </Table>
          </TableContainer>
        </Box>
        <Sidebar />
      </Grid>
    </>
  )
}

export default Users;
