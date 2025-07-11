import React from 'react';
import HeroSection from '../../../components/common/HeroSection/HeroSection';
import Images from "../../../assets/images/index"

const Hero = () => {
    return (
        <HeroSection
            badgeText="Best Web Development Company In Ahmedabad, India"
            title="We Develop Website That "
            highlight=" Drives Your Online Business"
            subtitle="As a leading web development company in Ahmedabad, we build incredible websites that correctly match your requirements. Our experience and expertise in delivering web solutions for small businesses to enterprise businesses keeps the brand ahead of the competition, even when the competition evolves!"
            buttonLabel="Get A Quote"
            image={Images.webHero}
            onClick={() => console.log('Quote button clicked')}
        />
    );
};

export default Hero;
