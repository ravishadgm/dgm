import React from 'react'
import Hero from "./Hero/Hero";
import TrustedByBrands from './TrustedByBrands/TrustedByBrands'
import Status from "./Status/Status";
import Work from './Work/Work';
import Certificates from './Certificates/Certificates';
import Industry from './Industry/Industry';
import About from './About/About';

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
    </>
  )
}

export default index