import React from 'react'
import { Stack, Heading, Image, Text, VStack, HStack, Button } from '@chakra-ui/react';
import Main_Image from '../../assets/images/home.svg';
import "./Home.scss"
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom"
import { motion } from 'framer-motion';
import Particles from './Particles';
import SocialMediaIcons from '../SocialMedia/SocialMedia';

const Home = () => {
    document.title = "Learn Logics"
    return (
        <>

            <Particles />

            <section className="home_container">
                <Stack
                    flexDirection={['column', 'column', 'row', 'row']}
                    alignItems={'center'}
                    justifyContent={'space-evenly'}
                    spacing={[5, 5, 30, 50]}
                >
                    <Image src={Main_Image} width={['90%', '60%', '40%', '35%']} dropShadow={'dark-lg'} alt="Logo" className='head_image' />
                    <VStack
                        width={['90%', '90%', '50%', '50%']}
                        alignItems={'flex-start'}
                        paddingLeft={['0px', '0px', '0px', '5px']}
                        spacing={[4, 4, 6, 6]}
                    >
                        <Heading
                            color={'#1fb299'}
                            fontSize={['5xl', '5xl', '6xl', '8xl']} className='heading'
                            as={motion.h1}
                            initial={{
                                y: '-100%',
                                opacity: 0
                            }}
                            whileInView={{
                                y: '0',
                                opacity: 1
                            }}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                            }}
                            animation={{
                                duration: 2
                            }}
                        >Learn Logics</Heading>
                        <Heading color='#b3b3b3' fontSize={['2xl', '3xl', '3xl', '4xl']}
                            as={motion.h1}
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1
                            }}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                            }}>
                            <Typewriter options={{
                                strings: ["Learn Development🔥", "Logic Building✨", "Tips & Tricks💖", "Technology & Fun🌈"],
                                autoStart: true,
                                loop: true,
                                cursor: "|",
                                wrapperClassName: 'typewriterpara'
                            }} />
                        </Heading>
                        <Text colorScheme={'blackAlpha'}
                            as={motion.h1}
                            initial={{
                                y: '100%',
                                opacity: 0
                            }}
                            whileInView={{
                                y: '0',
                                opacity: 1
                            }}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                            }} >Unlock the world of web development with our comprehensive tutorials and guides. From HTML and CSS to advanced JavaScript and React, we've got you covered. Join us on a journey of learning and building cutting-edge web applications. Let's code together and level up your web development skills!</Text>
                        <SocialMediaIcons />
                        <HStack spacing={5}
                            as={motion.h1}
                            initial={{
                                y: '100%',
                                opacity: 0
                            }}
                            whileInView={{
                                y: '0',
                                opacity: 1
                            }}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                            }}>
                            <a href="https://learnlogics.page.link/RtQw" target='blank'>
                                <Button colorScheme={'teal'} variant={'solid'}>Explore</Button>
                            </a>
                            <Link to="/courses">
                                <Button variant={'solid'}>Courses</Button>
                            </Link>
                        </HStack>
                    </VStack>
                </Stack>
            </section>

            {/* <section className="courses">
                <Heading
                    color={'#1fb299'}
                    fontSize={['4xl', '5xl', '5xl', '7xl']} className='heading'
                    textAlign={'center'}
                    as={motion.h1}
                    initial={{
                        y: '100%',
                        opacity: 0
                    }}
                    whileInView={{
                        y: '0',
                        opacity: 1
                    }}
                    transition={{
                        duration: 2,
                        delay: 1,
                    }}
                    animation={{
                        duration: 2,
                        delay: 0.5,
                    }}
                >Courses</Heading>
                <HStack>
                    <VStack>

                    </VStack>
                </HStack>
            </section> */}
        </>
    );
}

export default Home;
