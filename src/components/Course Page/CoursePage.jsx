import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Particles from '../Home/Particles';
import "./CoursePage.scss"

const CoursePage = () => {
    const [lectureNumber, setLectureNumber] = useState(0);
    const lectures = [{
        _id: "a;kuta;kdvccm1",
        title: "01: Websites, Webpages & How they Work | HTML for Beginners",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
        videosrc: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/EJxquy0-RpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',

    }, {
        _id: "a;kuta;kdvccm2",
        title: "Dark City & its Streets",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
        videosrc: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EJxquy0-RpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',

    }, {
        _id: "a;kuta;kdvccm3",
        title: "Sunflower Blossom Bloom",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
        videosrc: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EJxquy0-RpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',

    }, {
        _id: "a;kuta;kdvccm4",
        title: "Oceans & Waves",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
        videosrc: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EJxquy0-RpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',

    }]

    return (
        <>
            <Particles />
            <Grid backdropFilter={'blur(5px)'} paddingTop={'7rem'} paddingBottom={'3rem'} paddingX={['0.5rem', '2rem', '3rem', '4rem']} alignContent={'center'} templateColumns={['1fr', '1fr', '1fr', '2fr 1fr']} >
                <Box>
                    <Box className='video_wrapper' dangerouslySetInnerHTML={{__html: lectures[lectureNumber].videosrc}} >

                    </Box>
                    <Heading my={'4'} fontSize={['md', 'md', 'lg', 'lg']} fontWeight={'medium'}  >{`${lectures[lectureNumber].title}`}</Heading>
                    <Heading my={'2'} fontSize={'md'} fontWeight={'medium'} >Description</Heading>
                    <Text fontSize={'md'} >{lectures[lectureNumber].description}</Text>
                </Box>
                <VStack className='playlist_bar' padding={'1rem'} overflowY={'scroll'} borderTop={'1px solid #8a8a8a'} borderBottom={'1px solid #8a8a8a'} borderLeft={'1px solid #8a8a8a'} borderRadius={'10px'} height={'515px'} alignItems={'flex-start'}  marginY={['2rem', '2rem', '0rem', '0rem']} marginX={['0rem', '0rem', '2rem', '2rem']} >
                    {
                        lectures.map((lecture, index) => (
                            <Button width={'100%'} textAlign={'left'} justifyContent={'flex-start'} variant={'solid'} className='button' key={lecture._id} onClick={() => setLectureNumber(index)} flexWrap={'wrap'} title={`${lecture.title}`} >
                                <Text fontWeight={'medium'} noOfLines={'3'} >{`${lecture.title}`}</Text>
                            </Button>
                        ))
                    }
                </VStack>

            </Grid>

        </>
    )
}

export default CoursePage
