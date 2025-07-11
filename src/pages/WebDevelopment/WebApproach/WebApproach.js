import CommonAccordion from '../../../components/common/ApproachMethod/ApproachMethod';

const accordionData = [
    {
        title: "Pre-Project Discusison",
        content: "Before our in-house team begins any Web Development tasks, we conduct a discovery call with the potential client. Our team delves deep into understanding the business, its needs, demands, and expectations from the project. Post-discussion, our Web Development Company will audit the existing website (if any) to identify strengths and weaknesses, uncover opportunities, and suggest actionable steps to ensure an optimal web development process."
    },
    {
        title: "Project Strategy Development",
        content: "After gaining client approval and onboarding them as their partnered web development agency, we proceed to the strategy development phase. Our tech-enabled web development team works with the project’s stakeholders, such as design and content teams, to design wireframes and prototypes, delegate the work, decide the timeframe, and handle problems if and when they arise. This helps us create a robust website design development services plan that addresses clients’ unique needs and goals. Additionally, our team identifies gaps and opportunities to ensure maximum impact and effectiveness."
    },
    {
        title: "Project Initiation",
        content: "The next phase involves implementing the web development strategies as per the project plan. Our web development services team will work in sprints and iterations to build and optimize the website, including front-end and back-end development, ensuring a seamless user experience. Additionally, they will refine the website’s structure and essential components, such as technical aspects, to boost the site’s performance and ranking. With our efforts, the website’s functionality and visibility will significantly improve."
    },
    {
        title: "Testing Phase",
        content: "What makes IndyLogix the best web development company in Ahmedabad is our comprehensive approach, which includes rigorous testing of the website. Our web development company conducts extensive testing to measure key metrics such as site speed, usability, and functionality. This phase provides accurate and actionable insights that help in fine-tuning the development strategy for optimal results."
    },
    {
        title: "Client Reporting",
        content: "Unlike other web development agencies that provide too many technical reports, we take a different approach. As your top web development company in Ahmedabad, we ensure clear and comprehensive reporting. Upon collaboration, we assign a dedicated project manager who will oversee the project’s performance, be your Point-of-Contact (POC), and provide you with detailed reports covering overall development and other key metrics. Additionally, we will present an actionable roadmap to ensure the web development services meet your expectations. This commitment to excellence and dedication makes IndyLogix the top web development company in Ahmedabad."
    }
];

export default function WebApproach() {
    return (
        <CommonAccordion
            title="Our"
            subtitle="Web Development"
            description="We have a big record of customers satisfied with our website design development services. Our tendency of using up-to-date frameworks and technologies is persuasive to deliver versatile, reliable, and creative business solutions that assure 100% client satisfaction."
            accordionItems={accordionData}
        />
    );
}
