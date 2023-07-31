import React from 'react'
import Particles from '../../Home/Particles'
import { Box, Button, Grid, HStack, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { fileUploadCSS } from '../../Auth/Register/Register'
import { BiText } from 'react-icons/bi'
import { AiFillFileText, AiOutlineVideoCamera } from 'react-icons/ai'

const CourseDetails = ({ isOpen, onClose, id, deleteButtonHandler, addLectureHandler, course_title, lectures = [1,2,3,4,5,6,7,8,9] }) => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [video, setVideo] = React.useState('');
    const [videoPrev, setVideoPrev] = React.useState('');

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const changeVideoHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setVideoPrev(reader.result);
            setVideo(file);
        }
    }
    const closeHandler = () => {
        setTitle('');
        setDescription('');
        setVideo('');
        setVideoPrev('');
        onClose();
    }

    return (
        <>
            <Particles />
            <Modal isOpen={isOpen} onClose={closeHandler} size={'6xl'} scrollBehavior='inside'  >
                <ModalOverlay />
                <ModalContent >

                    <ModalHeader >
                        <Heading textAlign={'center'} fontSize={['4xl', '5xl', '5xl', '5xl']} >{course_title}</Heading>
                        <ModalCloseButton onClick={closeHandler} />
                    </ModalHeader>
                    <ModalBody>
                        <Grid templateColumns={['1fr', '1fr', '3fr 2fr', '3fr 2fr']} gap={['2rem','2rem','','']}>
                            <Box px={['1rem']}>
                                <Box><Text fontSize={['md', 'lg', 'xl', '2xl']} >{id}</Text></Box>
                                <Heading fontSize={['lg', 'lg', '2xl', '3xl']} >Lectures</Heading>
                                {
                                    lectures.map((lecture, index) => (
                                        <VideoCard key={index} course_id={id} title={course_title} description={'Master The Ultimate Web Development with MERN Stack Development'} num={index+1} lecture_id={'487euejd'} deleteButtonHandler={deleteButtonHandler} />
                                    ))
                                }
                            </Box>

                            <Box>
                                <form onSubmit={e => addLectureHandler(e, id, title, description, video)}>
                                    <VStack paddingX={'1rem'} justifyContent={'center'} borderRadius={'10px'} backdropFilter={'blur(5px)'} spacing={'1rem'}>
                                        <Heading fontSize={['lg', 'lg', '2xl', '3xl']}>Add Lecture</Heading>

                                        {/* Add Lecture Heading  */}

                                        {/* title input field  */}
                                        <HStack width={'full'} border={"1px solid #75777c"} padding={'4px 8px'} borderRadius={'10px'} className='inputfield' spacing={'3'}>
                                            <BiText size={'20'} />
                                            <Input id='title' placeholder="Lecture Title here" value={title} type='text' onChange={(e) => setTitle(e.target.value)} autoComplete='false' border={'none'} width={'90%'} focusBorderColor='transparent' required />
                                        </HStack>


                                        {/* description input field  */}
                                        <HStack width={'full'} border={"1px solid #75777c"} padding={'4px 8px'} borderRadius={'10px'} className='inputfield' spacing={'3'}>
                                            <AiFillFileText size={'20'} />
                                            <Input id='description' value={description} placeholder="Lecture Description here" type='text' onChange={(e) => setDescription(e.target.value)} autoComplete='false' border={'none'} width={'90%'} focusBorderColor='transparent' required />
                                        </HStack>

                                        

                                        {/* video preview input field  */}
                                        {
                                            videoPrev && (
                                                <video controls controlsList='nodownload' >
                                                    <source src={videoPrev} />
                                                </video>
                                            )
                                        }


                                        {/* video input field  */}
                                        <HStack width={'full'} border={"1px solid #75777c"} padding={'4px 8px'} borderRadius={'10px'} className='inputfield' spacing={'3'}>
                                            <Input id='video' type='file' accept='video/mp4' onChange={changeVideoHandler} border={'none'} width={'90%'} autoComplete='false' focusBorderColor='transparent' required
                                                css={{
                                                    "&::file-selector-button": { ...fileUploadCSS }
                                                }}
                                            />
                                        </HStack>



                                        {/* login and  register buttons  */}
                                        <HStack width={'full'} justifyContent={'center'} padding={'2'} className='inputfield' spacing={'3'}>
                                            <Button fontSize={'sm'} colorScheme='teal' variant={'solid'} width={['80%', '80%', '60%', '60%']} gap={'2'} type='submit' ><AiOutlineVideoCamera size={'20'} />Add Lecture</Button>
                                        </HStack>

                                    </VStack>
                                </form>
                            </Box>
                        </Grid>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme={'teal'} onClick={closeHandler} >Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}

export default CourseDetails
function VideoCard({ title, num, description, lecture_id, course_id, deleteButtonHandler }) {
    return (
        <Stack direction={['column', 'column', 'row', 'row']} my={'4'} padding={'1rem'} borderRadius={'lg'} border={'1px solid #75777c'} alignItems={['flex-star','center']} justifyContent={['flex-start', 'space-between']} >
            <Box>
                <Heading fontSize={['sm']} mb={'2'} >{`#${num} ${title}`}</Heading>
                <Text fontSize={'sm'}>{description}</Text>
            </Box>
            <Button colorScheme='teal' variant={'outline'} size={'sm'} onClick={() => deleteButtonHandler(course_id, lecture_id)}><RiDeleteBin7Fill /></Button>
        </Stack>
    )
}