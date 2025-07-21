import CommonAccordion from '../../../components/common/ApproachMethod/ApproachMethod';

const accordionData = [
    {
        title: "Pre-Project Discusison",
        content: "Before starting any web development work, our in-house team schedules a detailed discovery call to understand your business goals, technical requirements, and expectations. We assess any existing website (if applicable), audit its strengths and weaknesses, and identify key opportunities. This allows us to suggest a structured and effective development plan tailored to your objectives."
    },
    {
        title: "Project Strategy Development",
        content: "Once the project is confirmed, we move into strategy development. Our team collaborates with stakeholders — including designers, developers, and content creators — to outline wireframes, timelines, and task delegation. We also identify risks, gaps, and technical opportunities to build a roadmap that ensures your website meets both functional and business goals."
    },
    {
        title: "Project Initiation",
        content: "With the strategy in place, we begin implementation. Our developers follow an agile approach, working in sprints to develop both front-end and back-end systems. We focus on performance, user experience, and clean code architecture. As we build, we continually optimize technical elements to boost speed, responsiveness, and SEO readiness."
    },
    {
        title: "Testing Phase",
        content: "Our process includes rigorous testing to ensure quality at every level. We test for usability, performance, browser compatibility, and mobile responsiveness. By analyzing site speed, UI behavior, and core functionality, we fine-tune the product to meet the highest development standards before launch."
    },
    {
        title: "Client Reporting",
        content: "Transparency is key. At DGMTech Solutions, we assign a dedicated project manager as your single point of contact throughout the engagement. You'll receive clear, easy-to-understand progress updates — including milestone tracking, performance metrics, and a roadmap for what’s next — ensuring that your expectations are met and exceeded."
    }
];

export default function WebApproach() {
    return (
        <CommonAccordion
            title="Our"
            subtitle="Web Development"
            description="At DGMTech Solutions, we focus on delivering tailored, scalable, and visually compelling websites using the latest technologies and frameworks. Our client-first approach ensures reliable, future-ready solutions that meet unique business goals and deliver complete satisfaction."
            accordionItems={accordionData}
        />
    );
}
