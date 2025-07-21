import React from "react";
import Hero from "./Hero/Hero";
import SmallCard from "@components/common/SmallCard/SmallCard";
import Certificates from "@components/common/Certificate/Certificates";
import Counter from "./Counter/Counter";
import OurClient from "./OurClient/OurClient";
import JourneySlider from "./JourneySlider/JourneySlider";
import Advantages from "./Advantages/Advantages";
import ContactBrand from "@components/common/ContactBrand/ContactBrand";

function index() {
  return (
    <>
      <Hero />
      <SmallCard />
      <Certificates
        headingTitle={`Who <span>We Are</span>`}
        headingDescription={`Technology? We’ve got it covered — from concept to code. We’re a passionate team of developers, designers, and thinkers dedicated to building smart digital solutions. From mobile apps to websites, we create tailored products that help businesses grow and scale.<br/><br/>
  Being innovative is our foundation, not a choice. At DGMTech Solutions, we blend creativity with technology to craft meaningful digital experiences. Whether you're a startup or a growing brand, we turn ideas into real solutions — with clean design, solid code, and a start-up spirit that powers every project forward.`}
      />
      <Counter />
      <OurClient />
      <JourneySlider />
      <Advantages />
      <ContactBrand
        heading="Ready to Make Your Brand the"
        highlightedText="Next Big Thing?"
        description="Let us help you build something amazing."
        buttonText="Let's Talk"
        onClick={() => (window.location.href = "/contact")}
      />
    </>
  );
}

export default index;
