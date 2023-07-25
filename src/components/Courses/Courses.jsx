import {Button, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React,{useState} from 'react'
import "./Courses.scss";
import { Link } from 'react-router-dom';
import Particles from '../Home/Particles';
import { AiOutlinePlaySquare } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";


const Courses = () => {
    const [keyword, setKeyword] = useState("");
    // eslint-disable-next-line
    const [category, setCategory] = useState("");

    // eslint-disable-next-line
    const addToPlaylistHandler = (id) => {
        console.log("Added to playlist successfully");
    }

    const CourseCard = ({views, title, imgSrc, id, addToPlaylistHandler, description, creator,lecture}) => {
        return (    
            <VStack className='course' border={'1px solid #75777c'} alignItems={'flex-start'} width={['90vw', '300px', '300px', '350px']} borderRadius={'10px'} padding={'2'} backdropFilter={'blur(5px)'} >


                <Image src={imgSrc} width={'100%'} objectFit={'contain'} borderTopRadius={'10px'} alt='image here'/>
                <Heading fontSize={['md','lg','xl','xl']} noOfLines={2} colorScheme='whiteAlpha' >{title}</Heading>
                <Text fontSize={['xs','sm','md','md']} noOfLines={2} colorScheme='whiteAlpha' >{description}</Text>
                <Text fontSize={['xs','sm','md','md']} noOfLines={2} colorScheme='whiteAlpha' fontWeight={'bold'}>Created by: {creator}</Text>
                <Text fontSize={['xs','sm','md','md']} noOfLines={1} colorScheme='whiteAlpha' >{lecture} lectures</Text>
                <Text fontSize={['xs','xs','sm','sm']} noOfLines={1} colorScheme='whiteAlpha' >{views} views</Text>
                <HStack>
                    <Link to={`/course/${id}`}><Button colorScheme={'teal'} gap={'2'} size={'sm'}><AiOutlinePlaySquare fontSize={'20'} />Watch Now</Button></Link>
                    <Button colorScheme={'teal'} gap={'2'} variant={'ghost'} border={"1px solid teal"} size={'sm'} onClick={() => addToPlaylistHandler(id)}><MdPlaylistAdd size={'20'} />Add to Playlist</Button>
                </HStack>
            </VStack>
        );
    }

    const categories = ["Web Development","Programming Languages","App Development","Data Structures & Algorithms","Game Development","Artificial Intelligence"]
    return (
        <>
            <Particles />
            <section className="courses">
                <Input value={keyword} width={['90%', '90%', '50%', '40%']} marginY={'5'} onChange={(e) => setKeyword(e.target.value)} placeholder='Search for Courses' focusBorderColor={'#27debf'} border={'1px solid gray'}></Input>

                <HStack width={'90vw'} overflowX={'scroll'} css={{'&::-webkit-scrollbar': {
                    display: "none"
                }}} >
                    {
                        categories.map((item, index) => (
                            <Button minWidth={'60'} size={'sm'} key={index} onClick={() => setCategory(item)}>{item}</Button>
                        ))
                    }
                </HStack>
                <Stack 
                    direction={['column', 'column', 'row', 'row']}
                    flexWrap={'wrap'}
                    marginTop={'5'}
                    justifyContent={['flex-start','center']}
                    alignItems={['center','center','center','center']}
                    gap={'10'}
                    width={'90%'}
                >
                    <CourseCard title={'Sample Course'} description={"Sample Description for the particular course"} views={4503} imgSrc={'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'} id={'Sample'} creator={'Deependra Parmar'} lecture={48} addToPlaylistHandler={addToPlaylistHandler} />
                    <CourseCard title={'Sample Course'} description={"Sample Description for the particular course"} views={4503} imgSrc={'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'} id={'Sample'} creator={'Deependra Parmar'} lecture={48} addToPlaylistHandler={addToPlaylistHandler} />
                    <CourseCard title={'Sample Course'} description={"Sample Description for the particular course"} views={4503} imgSrc={'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'} id={'Sample'} creator={'Deependra Parmar'} lecture={48} addToPlaylistHandler={addToPlaylistHandler} />
                    <CourseCard title={'Sample Course'} description={"Sample Description for the particular course"} views={4503} imgSrc={'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'} id={'Sample'} creator={'Deependra Parmar'} lecture={48} addToPlaylistHandler={addToPlaylistHandler} />
                    <CourseCard title={'Sample Course'} description={"Sample Description for the particular course"} views={4503} imgSrc={'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'} id={'Sample'} creator={'Deependra Parmar'} lecture={48} addToPlaylistHandler={addToPlaylistHandler} />
                    <CourseCard title={'Sample Course'} description={"Sample Description for the particular course"} views={4503} imgSrc={'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'} id={'Sample'} creator={'Deependra Parmar'} lecture={48} addToPlaylistHandler={addToPlaylistHandler} />

                </Stack>

            </section>
        </>
    )
}

export default Courses;
