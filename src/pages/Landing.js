import React from 'react';
import { Container } from '@chakra-ui/react'
import Navbar from '../components/Navbar';
import HomeCTA from '../components/HomeCTA';
import FeaturesSection from '../components/FeaturesSection';

const Landing = () => {
    return <>
        <Navbar />
        <HomeCTA />
        <Container maxW='container.xl'>
            <FeaturesSection />

        </Container>
    </>;
};

export default Landing;
