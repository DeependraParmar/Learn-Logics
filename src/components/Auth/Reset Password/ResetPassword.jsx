import { Container, Heading, Input, VStack, HStack, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react'
import {useParams} from "react-router-dom";
import { BiShowAlt } from "react-icons/bi";
import Particles from '../../Home/Particles';
import { AiOutlineLock } from "react-icons/ai";
import { useEffect } from 'react';

const ResetPassword = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    const [password, setPassword] = useState("");
    const params = useParams();
    console.log(params.token);

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
                    <Heading fontSize={['lg', 'lg', '2xl', '3xl']} textAlign={'center'} color={'#27debf'}>Reset Your Password</Heading>
                    <form style={{ width: '100%' }} >
                        <Text fontSize={'xs'} textAlign={'center'}>Enter your registered email to get a password recovery link from us.</Text>


                        {/* password input field  */}
                        <HStack border={"1px solid #75777c"} padding={'2px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}>
                            <AiOutlineLock size={'20'} />
                            <Input id='password' value={password} placeholder="Enter New Password" type='password' onChange={(e) => setPassword(e.target.value)} autoComplete='false' border={'none'} width={'90%'} focusBorderColor='transparent' required />
                            <BiShowAlt id='showPassword' onClick={hideShowPassword} size={'20'} />
                        </HStack>

                        <HStack justifyContent={'center'} padding={'2'} className='inputfield' spacing={'3'}>
                            <Button fontSize={'sm'} colorScheme='teal' variant={'solid'} width={'50%'} type='submit' gap={'2'} >Send Reset Link</Button>
                        </HStack>

                    </form>
                </VStack>
            </Container>
        </>
    )
}

export default ResetPassword;
