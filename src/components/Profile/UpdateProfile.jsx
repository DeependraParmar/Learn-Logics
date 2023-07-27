import React from 'react'
import Particles from '../Home/Particles'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import { Button, Container, HStack, Heading, Input, VStack } from '@chakra-ui/react';
import { BiShowAlt } from 'react-icons/bi';
import { useEffect } from 'react';
import { useState } from 'react';

const UpdateProfile = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

  return (
      <>
          <Particles />
          <Container paddingY={'8rem'} >

              <VStack height={'fit-content'} paddingY={'2rem'} paddingX={'1rem'} justifyContent={'center'} borderRadius={'10px'} backdropFilter={'blur(5px)'} spacing={'5'}>

                  {/* welcome heading  */}
                  <Heading fontSize={['2xl', '2xl', '3xl', '4xl']} color={'#27debf'}>Update Your Profile</Heading>
                  <form style={{ width: '100%' }} >




                      {/* name input field  */}
                      <HStack border={"1px solid #75777c"} padding={'4px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}>
                          <AiOutlineUser size={'20'} />
                          <Input value={name} id='name' placeholder='Enter Your Name' type='name' onChange={(e) => setName(e.target.value)} border={'none'} width={'90%'} autoComplete='false' focusBorderColor='transparent' />
                      </HStack>


                      {/* email input field  */}
                      <HStack border={"1px solid #75777c"} padding={'4px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}>
                          <AiOutlineMail size={'20'} />
                          <Input value={email} id='email' placeholder='Enter Email here' type='email' onChange={(e) => setEmail(e.target.value)} border={'none'} width={'90%'} autoComplete='false' focusBorderColor='transparent' />
                      </HStack>

                      <HStack justifyContent={'center'} padding={'2'} className='inputfield' spacing={'3'}>
                          <Button fontSize={'sm'} colorScheme='teal' variant={'solid'} width={['80%', '80%', '60%', '50%']} type='submit' gap={'2'} > <TiTick size={'20'} />Update Profile</Button>
                      </HStack>
                  </form>
              </VStack>
          </Container>
      </>
  )
}

export default UpdateProfile
