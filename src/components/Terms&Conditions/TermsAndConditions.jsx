import React from 'react'
import { TermsConditions } from '../../assets/docs/Terms&Conditions';
import { Container, Heading } from '@chakra-ui/react';
import Particles from '../Home/Particles';

const TermsAndConditions = () => {
  return (
    <>
    <Particles />
    <Container maxWidth={'container.xl'} paddingTop={'7rem'} paddingBottom={'3rem'} >
      <Heading textAlign={['center']} fontSize={['2xl', '5xl', '5xl', '5xl']} marginY={'6'} >Terms & Conditions</Heading>

      <TermsConditions />
    </Container>
    </>
  )
}

export default TermsAndConditions;
