import { Avatar, Button, Container, HStack, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { BiShowAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import Particles from '../../Home/Particles';
import { Link } from 'react-router-dom';
import "../../Home/Home.scss"
import "./Register.scss"
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

export const fileUploadCSS = {
  cursor: "pointer",
  marginLeft: "-5px",
  width: '110%',
  border: "none",
  height: '100%',
  backgroundColor: "transparent",
}
const fileUploadStyle = {
  "&::file-selector-button": fileUploadCSS,
};

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imagePrev, setImagePrev] = useState('');
  // eslint-disable-next-line
  const [image, setImage] = useState('');

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

  const changeImageHandler = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImagePrev(reader.result);
        setImage(file);
      }
  }


  return (
    <>
      <Particles />
      <Container height={'95vh'} paddingY={'6rem'} >
        <VStack height={'fit-content'} paddingY={'2rem'} paddingX={'1rem'} justifyContent={'center'} borderRadius={'10px'} backdropFilter={'blur(5px)'} spacing={'5'}>
          <Avatar src={imagePrev} size={'2xl'} />

          {/* learn logics heading  */}
          <Heading fontSize={['lg', 'lg', '2xl', '3xl']}>
            Welcome to <span className='spanHeading' >Learn Logics</span>
          </Heading>
          <form style={{ width: '100%' }} > 

            {/* name input field  */}
            <HStack border={"1px solid #75777c"} padding={'4px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}>
              <AiOutlineUser size={'20'} />
              <Input id='name' placeholder="John Doe" value={name} type='text' onChange={(e) => setName(e.target.value)} autoComplete='false' border={'none'} width={'90%'} focusBorderColor='transparent' required />
            </HStack>


            {/* email input field  */}
            <HStack border={"1px solid #75777c"} padding={'4px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}>
              <AiOutlineMail size={'20'} />
              <Input id='email' value={email} placeholder="johndoe@gmail.com" type='email' onChange={(e) => setEmail(e.target.value)} autoComplete='false' border={'none'} width={'90%'} focusBorderColor='transparent' required />
            </HStack>

            {/* password input field  */}
            <HStack border={"1px solid #75777c"} padding={'4px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}>
              <AiOutlineLock size={'20'} />
              <Input id='password' placeholder='***********' type='password' onChange={(e) => setPassword(e.target.value)} value={password} border={'none'} width={'90%'} autoComplete='false' focusBorderColor='transparent' required />
              <BiShowAlt id='showPassword' onClick={hideShowPassword} size={'20'} />
            </HStack>


            {/* profile picture input field  */}
            <HStack border={"1px solid #75777c"} padding={'4px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}>
              <Input id='avatar' type='file' accept='image/*' onChange={changeImageHandler} border={'none'} width={'90%'} autoComplete='false' focusBorderColor='transparent' required
                css={fileUploadStyle}
              />
            </HStack>


            {/* login and  register buttons  */}
            <HStack justifyContent={'center'} padding={'2'} className='inputfield' spacing={'3'}>
              <Button fontSize={'sm'} colorScheme='teal' variant={'solid'} width={'40%'} gap={'2'} type='submit' ><AiOutlineUserAdd size={'20'} />Sign Up</Button>
            </HStack>
            <HStack justifyContent={'center'} padding={'2'} className='inputfield'>
              <span>Already a User?</span>
              <Link to={'/login'}>
                <Button fontSize={'sm'} variant={'link'} colorScheme='teal' gap={'1'} ><BiLogIn size={'20'} /> Login</Button>
              </Link>
              <span>here</span>
            </HStack>
          </form>
        </VStack>
      </Container>
    </>
  )
}

export default Register
