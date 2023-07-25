import { Button, Container, HStack, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { BiShowAlt } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import "./Login.scss"
import Particles from '../../Home/Particles';
import { Link } from 'react-router-dom';
import "../../Home/Home.scss"
import { BsExclamationTriangleFill } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";

const Login = () => {
    // eslint-disable-next-line
    const [email, setEmail] = useState("");
    // eslint-disable-next-line
    const [password, setPassword] = useState("");

    const hideShowPassword = () => {
        const button = document.getElementById('showPassword');
        const password = document.getElementById('password');
        if (password.type === 'password') {
            password.type = 'text';
            button.style.color = '#27debf';
        } else {
            password.type = 'password';
            button.style.color = 'gray';
        }
    }

    return (
        <>
            <Particles />
            <Container height={'95vh'} paddingY={'8rem'} >

                <VStack height={'fit-content'} paddingY={'2rem'} paddingX={'1rem'} justifyContent={'center'} borderRadius={'10px'} backdropFilter={'blur(5px)'} spacing={'5'}>

                    {/* welcome heading  */}
                    <Heading fontSize={['lg', 'lg', '2xl', '3xl']}>Welcome Back, Login Now</Heading>
                    <form style={{ width: '100%' }} >

                        
                        {/* email input field  */}
                        <HStack border={"1px solid #75777c"} padding={'4px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}>
                            <AiOutlineMail size={'20'} />
                            <Input id='email' value={email} placeholder="johndoe@gmail.com" type='email' onChange={(e) => setEmail(e.target.value)} autoComplete='false' border={'none'} width={'90%'} focusBorderColor='transparent' required />
                        </HStack>

                        {/* password input field  */}
                        <HStack border={"1px solid #75777c"} padding={'4px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}>
                            <AiOutlineLock size={'20'} />
                            <Input value={password} id='password' placeholder='***********' type='password' onChange={(e) => setPassword(e.target.value)} border={'none'} width={'90%'} autoComplete='false' focusBorderColor='transparent' required />
                            <BiShowAlt id='showPassword' onClick={hideShowPassword} size={'20'} />
                        </HStack>
                        <HStack justifyContent={'center'} padding={'2'} className='inputfield' spacing={'3'}>
                            <Button fontSize={'sm'} colorScheme='teal' variant={'solid'} width={'40%'} type='submit' gap={'2'} > <BiLogIn size={'20'}/> Login</Button>
                        </HStack>
                        <HStack justifyContent={'center'} padding={'2'} className='inputfield'>
                            <Link to={'/forgetpassword'}>
                                <Button fontSize={'sm'} variant={'ghost'} gap={'2'} ><BsExclamationTriangleFill size={'20'} />Forget Password</Button>
                            </Link>
                        </HStack>
                        <HStack justifyContent={'center'} padding={'2'} className='inputfield'>
                            <span>New User?</span>
                            <Link to={'/register'}>
                                <Button fontSize={'sm'} variant={'link'} colorScheme='teal' gap={'1'} ><AiOutlineUserAdd size={'20'} />Sign Up</Button>
                            </Link>
                            <span>here</span>
                        </HStack>
                    </form>
                </VStack>
            </Container>
        </>
    )
}

export default Login;
