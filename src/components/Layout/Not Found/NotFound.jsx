import { Button, Container, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import image from '../../../assets/images/404 not found.avif'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <Container maxW={'container.xl'} paddingTop={'7rem'} paddingBottom={'3rem'}  >
          <Image src={image} filter={'saturation(120%)'} alt="404" margin={'auto'} />
        <Heading textAlign={'center'} textShadow={'lg'} fontSize={['xl', '2xl', '4xl', '6xl']} paddingY={'2rem'} >Page Not Found😓</Heading>
        <Text textAlign={'center'} >I think you lost somewhere else. Go to <Link to='/'><Button variant={'link'} colorScheme='teal' >Home Page</Button></Link></Text>
        </Container>
    </>
  )
}

export default NotFound
