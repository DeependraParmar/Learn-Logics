import React from 'react'
import { Stack, Heading, Image, Text, VStack, HStack, Button, Container, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import Main_Image from '../../assets/images/home.svg';
import "./Home.scss"
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom"
import Particles from './Particles';
import SocialMediaIcons from '../SocialMedia/SocialMedia';
import { useEffect } from 'react';

const Home = () => {
    document.title = "Learn Logics";
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
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
                            fontSize={['4xl', '5xl', '6xl', '8xl']} className='heading'
                        >Learn Logics</Heading>
                        <Heading color='#b3b3b3' fontSize={['2xl', '3xl', '3xl', '4xl']}
                        >
                            <Typewriter options={{
                                strings: ["Learn Development🔥", "Logic Building✨", "Tips & Tricks💖", "Technology & Fun🌈"],
                                autoStart: true,
                                loop: true,
                                cursor: "|",
                                wrapperClassName: 'typewriterpara'
                            }} />
                        </Heading>
                        <Text colorScheme={'blackAlpha'}
                        >Unlock the world of web development with our comprehensive tutorials and guides. From HTML and CSS to advanced JavaScript and React, we've got you covered. Join us on a journey of learning and building cutting-edge web applications. Let's code together and level up your web development skills!</Text>
                        <SocialMediaIcons />
                        <HStack spacing={5}>
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

            <FrequentlyAskedQuestions />
        </>
    );
}

export default Home;

function FrequentlyAskedQuestions() {
    return (
        <section className="faq">
            <Heading
                color={'#1fb299'}
                fontSize={['3xl', '4xl', '4xl', '6xl']}
                textAlign={'center'} paddingY={'6'}
            >Frequently Asked Questions</Heading>
            <Container maxWidth={'container.lg'} spacing={'5'} >
                <Accordion allowToggle>
                    <AccordionItem width={'full'} >
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' py={'3'} textAlign='left'>
                                    What is Learn Logics?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Learn Logics is a web development channel dedicated to helping you master the art of web development. We offer in-depth tutorials, guides, and code samples to take you from beginner to proficient in building modern web applications.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem width={'full'} >
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' py={'3'} textAlign='left'>
                                    Who can benefit from Learn Logics?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Our content is designed for aspiring developers, students, professionals, and anyone interested in learning web development. Whether you're a complete beginner or looking to expand your skills, we have something for you.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem width={'full'} >
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' py={'3'} textAlign='left'>
                                    Are the tutorials free to access?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Absolutely! All our tutorials, videos, and notes are completely free to access. We believe in making quality web development education accessible to everyone.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem width={'full'} >
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' py={'3'} textAlign='left'>
                                    How can I stay updated with new content?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            To stay up-to-date with the latest tutorials and updates, make sure to subscribe to our YouTube channel and join our email newsletter. You'll receive notifications whenever new content is published.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem width={'full'} >
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' py={'3'} textAlign='left'>
                                    Can I request specific tutorial topics?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Yes! We love hearing from our community. If you have specific tutorial requests or topics you'd like us to cover, feel free to reach out to us through our contact page or social media channels.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem width={'full'} >
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' py={'3'} textAlign='left'>
                                    Can I use the code snippets in my own projects?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Absolutely! The code snippets provided in our tutorials are meant to be educational and can be used in your personal or professional projects. We encourage you to learn from them and adapt them to suit your needs.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem width={'full'} >
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' py={'3'} textAlign='left'>
                                    How can I contribute to Learn Logics?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            We appreciate your interest in contributing! At the moment, we are not accepting direct contributions, but you can support us by subscribing, liking our videos, and sharing our content with others.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem width={'full'} >
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' py={'3'} textAlign='left'>
                                    How can I contact the admin or support team?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            If you have any questions, feedback, or need assistance, you can reach out to our support team through the contact form on our website. We'll be happy to assist you.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem width={'full'} >
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' py={'3'} textAlign='left'>
                                    Are there any prerequisites for the tutorials?                                        </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Most of our tutorials are beginner-friendly and assume little to no prior knowledge. However, some advanced topics might require a basic understanding of HTML, CSS, and JavaScript.
                        </AccordionPanel>
                    </AccordionItem>


                </Accordion>
            </Container>
        </section>
    );
}