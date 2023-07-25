import {Button, Container, HStack, Heading, Input, Textarea, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import Particles from '../Home/Particles';
import { BiMessageDetail, BiSend } from "react-icons/bi";
import { Link } from 'react-router-dom';
import SocialMediaIcons from '../SocialMedia/SocialMedia';


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");



    return (
        <>
            <Particles />
            <Container height={'95vh'} paddingY={'6rem'} >
                <VStack height={'fit-content'} paddingY={'2rem'} paddingX={'1rem'} justifyContent={'center'} borderRadius={'10px'} backdropFilter={'blur(5px)'} spacing={'5'}>

                    {/* learn logics heading  */}
                    <Heading fontSize={['3xl', '3xl', '3xl', '5xl']}>
                        Contact Me
                    </Heading>
                    <SocialMediaIcons />
                    <form style={{ width: '100%' }} >

                        {/* name input field  */}
                        <HStack border={"1px solid #27debf"} padding={'4px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}>
                            <AiOutlineUser size={'20'} />
                            <Input id='name' placeholder="Your Name here" value={name} type='text' onChange={(e) => setName(e.target.value)} autoComplete='false' border={'none'} width={'90%'} focusBorderColor='transparent' required />
                        </HStack>


                        {/* email input field  */}
                        <HStack border={"1px solid #27debf"} padding={'4px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}>
                            <AiOutlineMail size={'20'} />
                            <Input id='email' value={email} placeholder="Your Email here" type='email' onChange={(e) => setEmail(e.target.value)} autoComplete='false' border={'none'} width={'90%'} focusBorderColor='transparent' required />
                        </HStack>

                        {/* password input field  */}
                        <HStack border={"1px solid #27debf"} padding={'4px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}  >
                            <BiMessageDetail className='messageIcon' size={'20'} />
                            <Textarea id='message' placeholder='Message For Me' height={'4'} resize={'none'} onChange={(e) => setMessage(e.target.value)} value={message} border={'none'} width={'90%'} autoComplete='false' focusBorderColor='transparent' required />
                        </HStack>


                        {/* send message buttons  */}
                        <HStack justifyContent={'center'} padding={'2'} className='inputfield' spacing={'3'}>
                            <Button fontSize={'sm'} colorScheme='teal' variant={'solid'} width={'60%'} gap={'2'} type='submit' ><BiSend size={'20'} />Send Message</Button>
                        </HStack>
                        <HStack justifyContent={'center'} padding={'2'} className='inputfield' spacing={'3'}>
                            <Link to='/courses' fontSize={'xs'} colorScheme='teal' variant={'Link'} width={'60%'} gap={'2'} >Explore Courses</Link>
                        </HStack>
                    </form>
                </VStack>
            </Container>
        </>
    )
}

export default Contact;
