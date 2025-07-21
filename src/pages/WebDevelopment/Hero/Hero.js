import React from 'react';
import HeroSection from '../../../components/common/HeroSection/HeroSection';
import Images from "../../../assets/images/index"

const Hero = () => {
    return (
        <HeroSection
            badgeText="Best Web Development Company In Surat, India"
            title="We Develop Website  That "
            highlight=" Drives Business Growth"
            subtitle="At DGMTech Solutions, Surat’s leading web development company, we engineer high-performance, responsive, and scalable websites optimized for speed and reliability, empowering your brand to stay ahead in an ever-evolving digital ecosystem."
            buttonLabel="Start Your Web project"
            buttonLink="/contact"
            image={Images.webHero}
            onClick={() => console.log('Quote button clicked')}
        />
    );
};

export default Hero;
