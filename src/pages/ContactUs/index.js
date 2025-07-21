import React from 'react'
import CertifiedCompany from './CertifiedCompany/CertifiedCompany'
// import Branches from './Braches/Branches'
import Hero from './Hero/Hero'
import Contact from './Contact/Contact'
import ContactForm from './ContactForm/ContactForm'

const index = () => {
    return (
        <>
            <Hero />
            <Contact />
            {/* <Branches /> */}
            <ContactForm />
            {/* <CertifiedCompany /> */}
        </>
    )
}

export default index
