import { Avatar, Button, Container, HStack, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { AiOutlineUser, AiOutlineMail, AiFillEdit, AiOutlineSwap, AiFillSave } from "react-icons/ai";
import { CgCalendarDates } from "react-icons/cg";
import { MdSubscriptions } from "react-icons/md";
import { FcCancel } from "react-icons/fc";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCSS } from '../Auth/Register/Register';
import { useState } from 'react';
import Particles from '../Home/Particles';




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

    const removeFromPlaylistHandler = (courseid) => {
        console.log(courseid);
    }
    const changeImageSubmitHandler = (e,image) => {
        e.preventDefault();
        console.log(image);
    }

    const {isOpen,onClose,onOpen} = useDisclosure();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (

        <>
        <Particles />
            <Container backdropFilter={'blur(5px)'} maxWidth={'container.sm'} paddingTop={'7rem'} paddingX={'5'} paddingBottom={'3rem'}  >
                <Heading textAlign={'center'} fontSize={['4xl', '5xl', '5xl', '5xl']} >Profile</Heading>
                <Stack paddingY={'3rem'} justifyContent={'flex-start'} direction={['column', 'column', 'row', 'row']} alignItems={['center']} spacing={['8', '10', '12', '16']} >

                    <VStack spacing={'4'} >
                        <Avatar boxSize={'40'} />
                        <Button onClick={onOpen} colorScheme={'teal'} variant={'ghost'}>Change Profile</Button>
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
                        <Stack direction={['column', 'column', 'row', 'row']} spacing={'4'} justifyContent={'flex-start'} alignItems={'center'} flexWrap={'wrap'} >
                            {
                                user.playlist.map((course) => (
                                    <VStack alignItems={'flex-start'} width={'200px'} key={course.courseid} spacing={'4'} >
                                        <Image src={course.posterURL} alt={course.title} width={'full'} objectFit={'contain'} />
                                        <Text textAlign={'center'} >{course.title}</Text>
                                        <HStack spacing={'4'} >
                                            <Link to={`/course/${course.courseid}`} >
                                                <Button colorScheme={'teal'} variant={'solid'} size={'sm'} gap={'2'} ><BsFillPlayFill size={'20'} />View Course</Button>
                                            </Link>
                                            <Button onClick={() => removeFromPlaylistHandler(course.courseid)} variant={'outline'} colorScheme='teal' size={'sm'} ><RiDeleteBin7Fill size={'16'} /></Button>
                                        </HStack>
                                    </VStack>
                                ))
                            }
                        </Stack>
                    ) : (
                        <Text textAlign={'center'} >No Courses Yet</Text>
                    )
                }

                <ChangeProfilePhoto isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} />

            </Container>

        </>
    )
}

export default Profile;

function ChangeProfilePhoto({isOpen,onClose,changeImageSubmitHandler}) {
    const [imagePrev, setImagePrev] = useState('');
    const [image, setImage] = useState('');

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        }
    }
    const closeHandler = () => {
        onClose();
        setImagePrev('');
        setImage('');
    }
    return (
        <Modal isOpen={isOpen} onClose={closeHandler} >
            <ModalOverlay backdropFilter={'blur(5px)'} />
            <ModalContent>
                <ModalHeader ><Text textAlign={'center'}>Change Profile Picture</Text></ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Container maxWidth={'container.sm'} >
                        <form onSubmit={(e)=> changeImageSubmitHandler(e,image)} >
                            <VStack spacing={'8'}>
                                {imagePrev && <Avatar src={imagePrev} boxSize={'40'} />}
                                <Input onChange={changeImageHandler} type={'file'} css={{ "&::file-selector-button": fileUploadCSS }} />

                                <Button type='submit' colorScheme={'teal'} variant={'solid'} gap={'2'} ><AiFillSave size={'20'} /> Save Changes</Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={closeHandler} colorScheme={'teal'} variant={'ghost'} >Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}