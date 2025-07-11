import React from 'react'
import Hero from "./Hero/Hero";
import Accordian from './Accordian/Accordian';
import Perks from './Perks/Perks';
import TeamSlider from './TeamSlider/TeamSlider';

function index() {
    return (
        <>
            <Hero />
            <Perks />
            <Accordian />
            <TeamSlider />
        </>
    )
}

export default index