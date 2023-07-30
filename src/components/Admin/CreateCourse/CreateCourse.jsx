import { Button, Container, Grid, HStack, Heading, Image, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import { RiAddCircleLine, RiBook3Fill, RiFileTextFill } from 'react-icons/ri';
import { fileUploadCSS } from '../../Auth/Register/Register';
import Particles from '../../Home/Particles';



const CreateCourse = () => {


  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    }
  }


  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [imagePrev, setImagePrev] = React.useState('');
  // eslint-disable-next-line
  const [image, setImage] = React.useState('');

  return (
    <>
    <Particles />
      <Grid backdropFilter={'blur(5px)'} padding={['7rem 1rem 3rem 1rem','7rem 0rem 5rem 0rem']} gap={'2rem'} templateColumns={['1fr', '1fr', '5fr 1fr', '5fr 1fr']} >
        <Container maxW={'container.xl'} > 
          <VStack justifyContent={'flex-start'} borderRadius={'10px'} backdropFilter={'blur(5px)'}>

            <form>
              <Heading textAlign={'center'} mb={'2rem'} fontSize={['3xl', '3xl', '4xl', '6xl']} >Create New Course</Heading>
              {/* title input field  */}
              <HStack border={"1px solid #75777c"} padding={'4px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}>
                <RiBook3Fill size={'20'} />
                <Input id='name' placeholder="Course Title Here" value={title} type='text' onChange={(e) => setTitle(e.target.value)} autoComplete='false' border={'none'} width={'90%'} focusBorderColor='transparent' required />
              </HStack>


              {/* email input field  */}
              <HStack border={"1px solid #75777c"} padding={'4px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}>
                <RiFileTextFill size={'20'} />
                <Input id='email' value={description} placeholder="Course Description here" type='email' onChange={(e) => setDescription(e.target.value)} autoComplete='false' border={'none'} width={'90%'} focusBorderColor='transparent' required />
              </HStack>

              {/* image preview  */}
              {
                imagePrev && (
                    <Image src={imagePrev} textAlign={'center'} boxSize={'48'} width={'full'} objectFit={'contain'} />
                )
              }

              <HStack border={"1px solid #75777c"} padding={'4px 8px'} borderRadius={'10px'} marginY={'1rem'} className='inputfield' spacing={'3'}>
                <Input type='file' accept='image/*' onChange={changeImageHandler} border={'none'} width={'90%'} autoComplete='false' focusBorderColor='transparent' required
                  css={{"&::file-selector-button":{...fileUploadCSS}}}
                />
              </HStack>


              {/* create course buttons  */}
              <HStack justifyContent={'center'} padding={'2'} className='inputfield' spacing={'3'}>
                <Button fontSize={'sm'} colorScheme='teal' variant={'solid'} width={['80%', '80%', '60%', '60%']} gap={'2'} type='submit' ><RiAddCircleLine size={'20'} />Create Course</Button>
              </HStack>

            </form>
          </VStack>
        </Container>
        <Sidebar />
      </Grid >
    </>
  )
}

export default CreateCourse;
