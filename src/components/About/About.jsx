import React from 'react'
import Particles from '../Home/Particles'
import { Avatar, Container, Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import founder from "../../assets/images/founder.png"
import SocialMediaIcons from '../SocialMedia/SocialMedia'

const About = () => {
  return (
    <>
      <Particles />
      <Container maxW="container.xl" paddingTop={'7rem'} paddingBottom={'3rem'} >
        <Heading textAlign={['center']} fontSize={['4xl', '5xl', '5xl', '5xl']} >About Me</Heading>
        <Stack justifyContent={['center', 'center', 'flex-start', 'flex-start']} direction={['column', 'column', 'row', 'row']} spacing={['5', '10']} padding={'8'} >

          {/* founder stack  */}
          <VStack spacing={['2']} >
            <Avatar src={founder} filter={'brightness(110%)'} boxShadow={'2xl'} boxSize={['40', '48']} />
            <Text fontSize={['lg', 'xl']} fontWeight={'medium'} >Deependra Parmar</Text>
            <Text fontSize={['sm', 'sm']} >Founder @Learn Logics</Text>
            <SocialMediaIcons />
            <Button fontSize={'sm'} variant={'ghost'} colorScheme='teal'  ><a href="https://deependraparmar.vercel.app" target='blank' rel='noopener noreferrer'>www.deependraparmar.com</a></Button>
          </VStack>

          {/* about stack  */}
          <VStack spacing={['4', '8']}  >
            <Text textAlign={['center', 'center', 'left', 'left']}>
              👋 Hello there! I'm <b>Deependra Parmar</b>, a highly passionate and dedicated Full Stack Web Developer with a strong drive for creating beautiful and immersive digital experiences.  I find immense joy in transforming ideas into reality, bringing them to life through elegant design and cutting-edge technology.  My goal is to craft visually stunning and user-friendly interfaces that leave a lasting impression. With a meticulous attention to detail, I strive for pixel-perfection in every line of code.  <br /> <br />

              Constantly exploring the ever-evolving landscape of web technologies, I stay up-to-date with the latest trends and best practices to deliver modern and engaging websites. From responsive layouts to seamless animations, I ensure an exceptional user experience across devices and platforms. <br /> <br />

              But it doesn't stop there. I strongly believe in the power of collaboration and effective communication.I value the insights and perspectives of my clients and colleagues, working closely with them to understand their vision and bring it to fruition. Together, we can create something truly remarkable. <br /> <br />

              When I'm not immersed in coding, you can find me diving deep into the world of design, exploring new techniques and trends to expand my creative horizons. Fueling my creativity with a cup of coffee in hand, I enjoy brainstorming and conceptualizing innovative solutions for my next project. <br /> <br />

              I'm thrilled to embark on this journey with you, turning your ideas into a digital masterpiece. Let's connect and discuss how we can make your online presence shine! <br /> <br />
              </Text>
          </VStack>

        </Stack>
      </Container>
    </>
  )
}

export default About
