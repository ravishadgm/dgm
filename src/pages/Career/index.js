import React, { useRef } from 'react'
import Hero from "./Hero/Hero";
import Accordian from './Accordian/Accordian';
import Perks from './Perks/Perks';
import TeamSlider from './TeamSlider/TeamSlider';
import ApplyTable from './ApplyTable/ApplyTable';

function Index() {
    const formRef = useRef(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Hero />
            <Perks />
            <Accordian scrollToForm={scrollToForm} />
            <div ref={formRef}>
                <ApplyTable />
            </div>
            <TeamSlider />
        </>
    );
}

export default Index;
