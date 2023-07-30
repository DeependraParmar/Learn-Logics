import React from 'react'
import Particles from '../../Home/Particles'
import { Box, Button, Grid, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'

const CourseDetails = ({isOpen,onClose,id}) => {
    const courseTitle = "MERN Stack Development";
  return (
    <>
        <Particles />
        <Modal isOpen={isOpen} onClose={onClose} size={'full'}  >
            <ModalOverlay />
            <ModalContent >

            <ModalHeader >
                <Heading textAlign={'center'} fontSize={['4xl', '5xl', '5xl', '5xl']} >{courseTitle}</Heading>
                <ModalCloseButton />
            </ModalHeader>
            <ModalBody>
                <Grid templateColumns={['1fr','1fr','3fr 1fr','3fr 1fr']}>
                    <Box px={[0,12]}>
                        <Text fontSize={['md','lg','xl','2xl']} >{id}</Text>
                    </Box>
                </Grid>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme={'teal'} onClick={onClose} >Close</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
      
    </>
  )
}

export default CourseDetails
