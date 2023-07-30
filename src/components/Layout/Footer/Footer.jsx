import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Particles from '../../Home/Particles'

const Footer = () => {
  return (
    <>
    <Particles />
        <Stack direction={'row'} flexWrap={'wrap'} padding={'5'} justifyContent={['flex-start','flex-start','center','center']} backdropFilter={'blur(5px)'} spacing={'10'}>

          {/* about us section  */}
            <VStack align={'flex-start'} colorScheme={'black.alpha'} justifyContent={'flex-start'} width={'270px'}>
              <Heading fontSize={'xl'} marginBottom={'8'} textDecoration={'underline'}>About Us</Heading>
              <Text fontSize={'md'}>Learn Logics is a platform to learn about new and emerging ways of Web Development. Starting from the beginning as from HTML, and to be a Full Stack Developer thereafter. From providing fully conceptual tutorials consisting of deep teaching with practical hands-on and complete notes, I also provide better navigation to the students here.</Text>
              <Text fontSize={'sm'}>© 2023-27 All rights reserved</Text>
              <Link to='/about'>
                <Button colorScheme={'teal'} fontSize={'sm'} variant={'link'}>Meet Our Founder</Button>
              </Link>
            </VStack>


            {/* courses section  */}
            <VStack align={'flex-start'} colorScheme={'black.alpha'} justifyContent={'flex-start'} width={'270px'}>
              <Heading fontSize={'xl'} marginBottom={'8'} textDecoration={'underline'}>Courses</Heading>
              
            </VStack>


            {/* contact us section  */}
            <VStack align={'flex-start'} colorScheme={'gray'} justifyContent={'flex-start'} width={'270px'}>
              <Heading fontSize={'xl'} marginBottom={'8'} textDecoration={'underline'}>Contact Us</Heading>
              
            </VStack>


            {/* social media section  */}
            <VStack align={'flex-start'} colorScheme={'black.alpha'} justifyContent={'flex-start'} width={'270px'}>
              <Heading fontSize={'xl'} marginBottom={'8'} textDecoration={'underline'}>Social Media</Heading>
              
            </VStack>
        </Stack>
    </>
  )
}

export default Footer
