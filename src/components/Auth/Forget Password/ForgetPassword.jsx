import { Container, Heading, Input, VStack, HStack,Button, Text } from '@chakra-ui/react';
import { AiOutlineMail } from "react-icons/ai";
import { useState } from 'react';
import React from 'react'
import Particles from '../../Home/Particles';

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    return (
        <>
        <Particles />
            <Container height={'95vh'} paddingY={'8rem'} >

                <VStack height={'fit-content'} paddingY={'2rem'} paddingX={'1rem'} justifyContent={'center'} borderRadius={'10px'} backdropFilter={'blur(5px)'} spacing={'5'}>

                    {/* welcome heading  */}
                    <Heading fontSize={['lg', 'lg', '2xl', '3xl']} textAlign={'center'} color={'#27debf'}>Forgot Password? Don't Worry</Heading>
                    <form style={{ width: '100%' }} >
                        <Text fontSize={'xs'} textAlign={'center'}>Enter your registered email to get a password recovery link from us.</Text>

                        
                        {/* email input field  */}
                        <HStack border={"1px solid #27debf"} padding={'2px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}>
                            <AiOutlineMail size={'20'} />
                            <Input id='email' value={email} placeholder="johndoe@gmail.com" type='email' onChange={(e) => setEmail(e.target.value)} autoComplete='false' border={'none'} width={'90%'} focusBorderColor='transparent' required />
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

export default ForgetPassword;
