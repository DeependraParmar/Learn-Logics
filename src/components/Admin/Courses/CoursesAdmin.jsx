import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'

const CoursesAdmin = () => {
  return (
    <>
      <Grid padding={'7rem 0rem 2rem 0rem'} templateColumns={['1fr', '1fr', '5fr 1fr', '5fr 1fr']} >
        <Box >

        </Box>
        <Sidebar />
      </Grid>
    </>
  )
}

export default CoursesAdmin;
