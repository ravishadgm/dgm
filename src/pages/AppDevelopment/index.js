import React from 'react'
import HeroSection from '../../components/common/HeroSection/HeroSection'
import Images from '@assets/images';
import Technologies from './Technologies/Technologies';
import BusinessGrowth from './BusinessGrowth/BusinessGrowth'
import SmallCard from '../../components/common/SmallCard/SmallCard';
function index() {
  return (
    <>
      <HeroSection
        badgeText="Top Mobile App Development Company In Ahmedabad"
        title="We Build Mobile Apps That"
        highlight=" Elevate User Experience"
        subtitle="Our mobile app development services help businesses create robust, scalable, and user-friendly mobile applications for Android and iOS platforms. From concept to deployment, we ensure your app not only meets but exceeds expectations."
        buttonLabel="Start Your App Project"
        buttonLink="/contact"
        image={Images.webHero} // Make sure you have this image in your assets
        onClick={() => console.log('App Quote button clicked')}
      />
      <Technologies />
      <BusinessGrowth />
      <SmallCard />
    </>
  )
}

export default index