import React from 'react'
import Hero from "./Hero/Hero";
import TrustedByBrands from './TrustedByBrands/TrustedByBrands'
import Status from "./Status/Status";
import Work from './Work/Work';
import Certificates from './Certificates/Certificates';
import Industry from './Industry/Industry';
import About from './About/About';
import Technology from './Technology/Technology'
import OurClients from './OurClients/OurClients';

function index() {
  return (
    <>
      <Hero />
      <TrustedByBrands />
      <About />
      <Status />
      <Work />
      <Certificates />
      <Industry />
      <OurClients />
      <Technology />
    </>
  )
}

export default index