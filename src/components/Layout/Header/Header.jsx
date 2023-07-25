import React from 'react'
import { ColorModeSwitcher } from "../../../ColorModeSwitcher"
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Image, Stack, Text, VStack, useDisclosure, HStack } from '@chakra-ui/react'
import { RiMenuFill } from "react-icons/ri";
import logo from "../../../assets/images/logo.png"
import { Link } from 'react-router-dom';
import "./Header.scss";
import { GrClose } from 'react-icons/gr';
import { VscDashboard } from 'react-icons/vsc';
import { AiOutlineHome, AiOutlineFileText, AiOutlineUser } from "react-icons/ai";
import { BsBook, BsPhone } from "react-icons/bs";
import { BiMessage, BiLogIn, BiUserPlus, BiLogOut } from "react-icons/bi";
import Particles from '../../Home/Particles';



const Header = () => {

  const LinkCollection = ({ url, title, variant = "ghost", colorscheme, icon, border }) => (
    <Link to={url} width={'100%'} >
      <Button width={'100%'} border={border} gap='2' onClick={onClose} colorScheme={colorscheme} variant={variant}>{icon}{title}</Button>
    </Link>
  )
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const user = {
    role: "admin"
  }
  const logoutHandler = () => {
      console.log("Logged Out Successfully");
  }

  return (
    <>
      <section className="navbar">
        <Stack width={'100%'} direction="row" paddingX={'8'} paddingY={'2'} spacing={4} alignItems="center" justifyContent={'space-between'} backdropFilter={'blur(5px)'} >
          <Button onClick={onOpen}>
            <RiMenuFill />
          </Button>
          <Link to='/' className='logocontainer'>
            <Image src={logo} alt="logo" width={'50px'} />
            <Text color={'#b1b6bd'} fontWeight={'bold'}>LEARN LOGICS</Text>
          </Link>
          <ColorModeSwitcher />
        </Stack>
      </section>

      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'2px'} textTransform={'uppercase'}>
            <Text>LEARN LOGICS</Text>
            <Button colorScheme='gray' size={'sm'} position={'absolute'} right={'5'} top={'4'} onClick={onClose} >
              <GrClose color={'teal'} />
            </Button>
          </DrawerHeader>
          <DrawerBody width={'100%'}>
            <Particles/>
            <VStack width={'100%'} alignItems={'flex-start'} spacing={'4'}>
              <LinkCollection url={'/'} title={"Home"} icon={<AiOutlineHome right={'2'} size={'20'} />} />
              <LinkCollection url={'/courses'} title={'Courses'} icon={<BsBook right={'2'} size={'20'} />} />
              <LinkCollection url={'/blogs'} title={'Blogs'} icon={<AiOutlineFileText right={'2'} size={'20'} />} />
              <LinkCollection url={'/contact'} title={'Contact Me'} icon={<BsPhone right={'2'} size={'20'} />} />
              <LinkCollection url={'/about'} title={'About Me'} icon={<BiMessage right={'2'} size={'20'} />} />
            </VStack>

            <HStack justifyContent={'space-evenly'} position={"absolute"} bottom={'2'} >
              {
                isAuthenticated ? (
                  <>
                    <VStack alignItems={'flex-start'}>
                      <HStack>
                        <LinkCollection url={'/profile'} title={'Profile'} variant='ghost' border='1px solid teal' colorscheme={"teal"} icon={<AiOutlineUser right={'2'} size={'20'} />} />
                        <Button onClick={logoutHandler} gap={'3'} variant='ghost' border='1px solid teal' colorScheme={"teal"} ><BiLogOut right={'2'} size={'20'} />Logout</Button>
                      </HStack>
                      {
                        user && user.role === "admin" && <LinkCollection url={'/admin/dashboard'} title={'DashBoard'} variant='ghost' border='1px solid teal' colorscheme={"teal"} icon={<VscDashboard colorScheme='teal' right={'2'} size={'20'} />} />
                      }
                    </VStack>
                  </>
                ) : (
                  <>
                    <LinkCollection url={'/login'} title={'Login'} variant='solid' colorscheme={"teal"} icon={<BiLogIn right={'2'} size={'20'} />} />
                    <p>/</p>
                    <LinkCollection url={'/register'} title={'Sign Up'} variant='solid' colorscheme={"teal"} icon={<BiUserPlus right={'2'} size={'20'} />} />

                  </>
                )
              }
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header;
