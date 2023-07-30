import { Box, Grid, Heading, Table, TableContainer, Thead, Tr, Th, Td, Tbody, HStack, Button, Image, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import Particles from '../../Home/Particles'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'
import CourseDetails from './CourseDetails'

const CoursesAdmin = () => {
  const {isOpen,onClose,onOpen} = useDisclosure();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courseDetailsHandler = (id) => {
    onOpen();
  }
  const deletecoursesHandler = (id) => {
    toast.success("courses Deleted Successfully");

  }

  // creating temporary data for the table
  const courses = [
    {
      id: 'kjkaliut;ldcmalfj',
      title: 'React JS',
      poster: {
        url: 'https://e1.pxfuel.com/desktop-wallpaper/243/6/desktop-wallpaper-mern-stack-bloggerboy-mern-stack-thumbnail.jpg'
      },
      views: 100,
      noOfLectures: 10,
    },
    {
      id: 'kjkaliut;ldcmalfj',
      title: 'Node JS',
      poster: {
        url: 'https://e1.pxfuel.com/desktop-wallpaper/243/6/desktop-wallpaper-mern-stack-bloggerboy-mern-stack-thumbnail.jpg'
      },
      views: 100,
      noOfLectures: 10,
    },
  ]

  return (
    <>
      <Particles />
      <Grid padding={['7rem 1rem 3rem 1rem', '7rem 0rem 5rem 0rem']} backdropFilter={'blur(5px)'} templateColumns={['1fr', '1fr', '5fr 1fr', '5fr 1fr']} >
        <Box overflowX={'auto'}>
          <Heading textAlign={'center'} mb={'2rem'} fontSize={['3xl', '3xl', '4xl', '6xl']} >All Courses</Heading>
          <TableContainer width={['100vw', 'full']} >
            <Table textAlign={'center'} size={'lg'} variant={'simple'} >

              <Thead >
                <Tr textAlign={'center'}>
                  <Th textAlign={'center'}>ID</Th>
                  <Th textAlign={'center'}>Poster</Th>
                  <Th textAlign={'center'}>Course Title</Th>
                  <Th textAlign={'center'} isNumeric >Views</Th>
                  <Th textAlign={'center'} isNumeric >No of Lectures</Th>
                  <Th textAlign={'center'} isNumeric >Action</Th>
                </Tr>
              </Thead>


              <Tbody textAlign={'center'}>
                {
                  courses.map((courses) => (
                    <Tr textAlign={'center'} key={courses.id} >
                      <Td textAlign={'center'}>#{courses.id}</Td>
                      <Td textAlign={'center'}>
                        <Image src={courses.poster.url} alt={courses.title} textAlign={'center'} boxSize={'32'} objectFit='contain' />
                      </Td>
                      <Td textAlign={'center'}>{courses.title}</Td>
                      <Td isNumeric textAlign={'center'}>{courses.views}</Td>
                      <Td isNumeric textAlign={'center'}>{courses.noOfLectures}</Td>
                      <Td textAlign={'center'} isNumeric >
                        <HStack justifyContent={'center'} spacing={'1rem'} >
                          <Button onClick={() => courseDetailsHandler(courses.id)} size={'sm'} colorScheme={'teal'} variant={'outline'} >View Lectures</Button>
                          <Button onClick={() => deletecoursesHandler(courses.id)} size={'sm'} colorScheme='teal' variant={'outline'} ><RiDeleteBin7Fill size='16' /></Button>
                        </HStack>
                      </Td>
            </Tr>
            ))
                }
          </Tbody>
        </Table>
      </TableContainer>


      <CourseDetails isOpen={isOpen} onClose={onClose}  />
    </Box >
      <Sidebar />
      </Grid >
    </>
  )
}

export default CoursesAdmin;
