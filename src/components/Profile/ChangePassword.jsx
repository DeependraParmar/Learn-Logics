import React from 'react'
import Particles from '../Home/Particles'
import { AiOutlineLock } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import { Button, Container, HStack, Heading, Input, VStack } from '@chakra-ui/react';
import { BiShowAlt } from 'react-icons/bi';
import { BsExclamationTriangleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const ChangePassword = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

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
            <Container paddingY={'8rem'} backdropFilter={'blur(5px)'} >

                <VStack height={'fit-content'} paddingY={'2rem'} paddingX={'1rem'} justifyContent={'center'} borderRadius={'10px'} backdropFilter={'blur(5px)'} spacing={'5'}>

                    {/* welcome heading  */}
                    <Heading fontSize={['lg', 'xl', '2xl', '4xl']} color={'#27debf'}>Change Your Password</Heading>
                    <form style={{ width: '100%' }} >


                        

                        {/* password input field  */}
                        <HStack border={"1px solid #75777c"} padding={'4px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}>
                            <AiOutlineLock size={'20'} />
                            <Input value={oldPassword} id='password' placeholder='Enter Old Password' type='password' onChange={(e) => setOldPassword(e.target.value)} border={'none'} width={'90%'} autoComplete='false' focusBorderColor='transparent' required />
                            <BiShowAlt id='showPassword' onClick={hideShowPassword} size={'20'} />
                        </HStack>


                        {/* password input field  */}
                        <HStack border={"1px solid #75777c"} padding={'4px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}>
                            <AiOutlineLock size={'20'} />
                            <Input value={newPassword} id='password' placeholder='Enter New Password' type='password' onChange={(e) => setNewPassword(e.target.value)} border={'none'} width={'90%'} autoComplete='false' focusBorderColor='transparent' required />
                            <BiShowAlt id='showPassword' onClick={hideShowPassword} size={'20'} />
                        </HStack>

                        <HStack justifyContent={'center'} padding={'2'} className='inputfield' spacing={'3'}>
                            <Button fontSize={'sm'} colorScheme='teal' variant={'solid'} width={['80%', '80%', '60%', '50%']} type='submit' gap={'2'} > <TiTick size={'20'} /> Change Password</Button>
                        </HStack>
                        <HStack justifyContent={'center'} padding={'2'} className='inputfield'>
                            <Link to={'/forgetpassword'}>
                                <Button fontSize={'sm'} variant={'ghost'} gap={'2'} ><BsExclamationTriangleFill size={'20'} />Forget Password</Button>
                            </Link>
                        </HStack>
                    </form>
                </VStack>
            </Container>
        </>
    )
}

export default ChangePassword
