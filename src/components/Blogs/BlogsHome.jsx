import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import Particles from '../Home/Particles'

const BlogsHome = () => {
  return (
    <>
    <Particles />
        <Container backdropFilter={'blur(5px)'} height={'90vh'} padding={['7rem 2rem 3rem 2rem']} maxW={'container.xl'} >
            <Heading textAlign={'center'}>No Blogs at the moment😥</Heading>    
            {/* DO REMOVE THE HEIGHT FROM THE ABOVE CONTAINER */}
        </Container> 
    </>
  )
}

export default BlogsHome
