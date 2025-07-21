import React from 'react'
import Hero from './Hero/Hero'
import WebIntroduction from './WebInroduction/WebIntroduction'
import PortfolioHighlights from './PortfolioHighlights/PortfolioHeighlights'
import CardInfo from './CardInfo/CardInfo'
import ContactUs from './ContactUs/ContactUs'
import TrustedByBrands from './TrustedByBrands/TrustedByBrands'
import WebApproach from './WebApproach/WebApproach'


function index() {
    return (
        <>
            <Hero />
            <TrustedByBrands />
            <WebIntroduction />
            <PortfolioHighlights />
            <CardInfo />
            <ContactUs />
            <WebApproach />
        </>
    )
}

export default index