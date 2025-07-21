import React from 'react'
import Hero from "./Hero/Hero";
import Status from "./Status/Status";
import Work from './Work/Work';
import Industry from './Industry/Industry';
import About from './About/About';
import Technology from './Technology/Technology'
import SmallCard from '../../components/common/SmallCard/SmallCard';
import CertifiedCompany from './CertifiedCompany/CertifiedCompany';
import OurClients from './OurClients/OurClients';

function index() {
  return (
    <>
      <Hero />
      <SmallCard />
      <About />
      <Status />
      <Work />
      <CertifiedCompany />
      <Industry />
      <OurClients />
      <Technology />
    </>
  )
}

export default index