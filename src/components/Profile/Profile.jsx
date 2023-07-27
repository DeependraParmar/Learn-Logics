import { Avatar, Button, Container, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineUser, AiOutlineMail, AiFillEdit, AiOutlineSwap } from "react-icons/ai";
import { CgCalendarDates } from "react-icons/cg";
import { MdSubscriptions } from "react-icons/md";
import { FcCancel } from "react-icons/fc";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Profile = () => {
    const user = {
        name: "Deependra Parmar",
        email: "deependraparmar1@gmail.com",
        createdAt: String(new Date().toISOString().split('T')[0]),
        role: "Admin",
        subscription: {
            status: "active"
        },
        playlist: [
            {
                title: "MERN Stack Development",
                courseid: "123456789",
                posterURL: "https://e1.pxfuel.com/desktop-wallpaper/243/6/desktop-wallpaper-mern-stack-bloggerboy-mern-stack-thumbnail.jpg"
            }
        ]
    }
    return (
        <>
            <Container maxWidth={'container.sm'} paddingTop={'7rem'} paddingX={'5'} paddingBottom={'3rem'}  >
                <Heading textAlign={'center'} fontSize={['4xl', '5xl', '5xl', '5xl']} >Profile</Heading>
                <Stack paddingY={'3rem'} justifyContent={'flex-start'} direction={['column', 'column', 'row', 'row']} alignItems={['center']} spacing={['8', '10', '12', '16']} >

                    <VStack spacing={'4'} >
                        <Avatar boxSize={'40'} />
                        <Button colorScheme={'teal'} variant={'ghost'}>Change Profile</Button>
                    </VStack>
                    <VStack spacing={'4'} justifyContent={'flex-start'} alignItems={['flex-start', 'flex-start']} >
                        <HStack >
                            <AiOutlineUser color='#27debf' size={'20'} />
                            <Text fontWeight={'bold'} > Name: </Text>
                            <Text>{user.name}</Text>
                        </HStack>
                        <HStack >
                            <AiOutlineMail color='#27debf' size={'20'} />
                            <Text fontWeight={'bold'} >Email: </Text>
                            <Text>{user.email}</Text>
                        </HStack>
                        <HStack >
                            <CgCalendarDates color='#27debf' size={'20'} />
                            <Text fontWeight={'bold'} >Created At: </Text>
                            <Text>{user.createdAt}</Text>
                        </HStack>
                        {
                            user.role !== "admin" && (
                                <HStack >
                                    <MdSubscriptions color='#27debf' size={'20'} />
                                    <Text fontWeight={'bold'} >Subscription: </Text>
                                    {
                                        user.subscription.status === 'active' ? (
                                            <Button size={'sm'} border={'1px solid teal'} colorScheme={'teal'} gap={'2'} variant={'ghost'} ><FcCancel size='20' />Cancel Subscription</Button>
                                        ) :
                                            (
                                                <Link to={'/courses'}>
                                                    <Button gap={'4px'} size={'sm'} colorScheme={'teal'} variant={'solid'} ><BsFillPlayFill size={'20'} />Subscribe</Button>
                                                </Link>
                                            )
                                    }
                                </HStack>
                            )
                        }

                        <Stack direction={['column', 'column', 'row', 'row']} alignItems={'flex-start'} >
                            <Link to='/updateprofile'>
                                <Button colorScheme={'teal'} variant={'solid'} gap={'2'} size={'sm'} ><AiFillEdit size={'20'} />Edit Profile</Button>
                            </Link>
                            <Link to='/changepassword'>
                                <Button colorScheme={'teal'} variant={'solid'} gap={'2'} size={'sm'} ><AiOutlineSwap size={'20'} />Change Password</Button>
                            </Link>
                        </Stack>
                    </VStack>
                </Stack>

                <Heading size={'md'} my={'8'} textAlign={'center'} >Your Courses</Heading>
                {
                    user.playlist.length > 0 ? (
                        <Stack direction={['column', 'column', 'row', 'row']} spacing={'4'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} >
                            {
                                user.playlist.map((course, index) => (
                                    <VStack alignItems={'flex-start'} width={'200px'} key={course.courseid} spacing={'4'} >
                                        <Image src={course.posterURL} alt={course.title} width={'full'} objectFit={'contain'} />
                                        <Text textAlign={'center'} >{course.title}</Text>
                                        <HStack spacing={'4'} >
                                            <Link to={`/course/${course.courseid}`} >
                                                <Button colorScheme={'teal'} variant={'solid'} size={'sm'} gap={'2'} ><BsFillPlayFill size={'20'} />View Course</Button>
                                            </Link>
                                        </HStack>
                                    </VStack>
                                ))
                            }
                        </Stack>
                    ) : (
                        <Text textAlign={'center'} >No Courses Yet</Text>
                    )
                }

            </Container>

        </>
    )
}

export default Profile
