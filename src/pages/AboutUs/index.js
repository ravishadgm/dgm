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
        headingDescription={`Digital Marketing? We’ve got you covered, from pixels to profits. We are a team of creative and passionate digital marketers, dedicated to helping businesses thrive in the online world. From social media management to website design, we craft personalized solutions that drive results.<br/><br/>
  Being ingenious is the only rule, not an exception. We are digital marketers inspired by innovation and excited about strategy execution to drive aimed numbers to our partners. Whether it’s consumers or B2B audiences in the interest of building awareness, lead generation, customer acquisition, and purchase continuity, we unify digital marketing and sales journeys to achieve the results and empower the brand. Our guiding mantra is—every business has the spirit of a start-up, all it needs is the soul of a powerhouse, and you can count on us like coffee in the morning!`}
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
