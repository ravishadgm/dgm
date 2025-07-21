import CommonIntro from '../../../components/common/CommonIntro/CommonIntro';

const WebIntroduction = () => {
    return (
        <CommonIntro
            title="Trusted"
            highlightedTitle="Website Development Company"
            secondTitle="In Surat"
            buttonLabel="Contact Us"
            buttonLink="/contact"
            mobileButtonLabel="Contact Us"
            paragraphs={[
                `DGMTech Solutions is a trusted website development company in Surat, India, offering reliable and scalable web solutions tailored to your business goals. Our experienced team of developers delivers secure, high-performance websites that enhance user experience and accelerate growth. From startups to enterprises, we create web platforms that connect strategy, functionality, and design into a unified digital presence.`,
                `As a leading web development company in Surat, we follow industry best practices to build custom, responsive, and SEO-friendly websites. Our developers combine technical expertise with creative problem-solving to deliver powerful, secure, and efficient websites. We handle everything from design and development to deployment and ongoing support, ensuring your digital success every step of the way.`
            ]}
        />
    );
};

export default WebIntroduction;
