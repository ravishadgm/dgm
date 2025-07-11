import React from 'react';
import styles from './OurClients.module.scss'
import TestimonialSection from '../../../components/common/TestimonialSlider/TestimonialSlider';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: `I run a small bakery and didn’t think PPC services could work for me. I decided to give it a try and found IndyLogix’s PPC management services in Ahmedabad to be incredible. They targeted the right audience with the perfect message. And now I have more qualified leads than I can handle. I highly recommend IndyLogix for any business looking to grow with Google ads management!`,
        name: 'Sonali Rao',
        location: 'India',
    },
    {
        quote: `It was a remarkable experience working with IndyLogix as the best PPC management service provider. Very responsive. They are truly passionate in their hearts about making a difference, which I wholeheartedly admire in them.`,
        name: 'Martin L. Hudson',
        location: 'Germany',
    },
    {
        quote: `We highly recommend IndyLogix for Google ads management. The best Google Ads agency India goes the extra mile to ensure the campaigns are successful. We’ve seen an increase in conversions since partnering with them.`,
        name: 'Carl Green',
        location: 'Denmark',
    },
    {
        quote: `IndyLogix is the best Google ads agency I’ve ever worked with. They’re not just about throwing up ads; they develop a comprehensive strategy that considers everything from keyword research to landing page optimization. Their Google AdWords services expertise has helped us reach a whole new audience. Thank you, IndyLogix, for the amazing results!`,
        name: 'Robert Jameson',
        location: 'USA',
    },
    {
        quote: `It was a pleasure working with IndyLogix. Their Google Adwords management services are so affordable. They really care for their clients and go beyond that. Their specialization in PPC services and Google Ads management made a valuable difference and contributed to my company’s development. So grateful!!`,
        name: 'Thomas Dale',
        location: 'Australia',
    },
    {
        quote: `Working with IndyLogix was incredible. With their Google Ads Management Services, we see clear results and a steady stream of qualified leads. They are, without a doubt, the best Google Ads agency in Ahmedabad!`,
        name: 'Yogesh Desai',
        location: 'India',
    },
    {
        quote: `IndyLogix is our trusted Google Ads agency in India. Very professional. They take time to discover our business needs and create tailored PPC management services, which helps us achieve exactly what you are looking for. We highly recommend them for their exceptional Google Ads management services.`,
        name: 'Jayesh Mehta',
        location: 'India',
    },
    {
        quote: `Google Ads Management Services have really impressed us at IndyLogix. The Google AdWords Specialist has developed new strategies that have helped us reach more potential clients than before and get more of the right kind of business. Highly appreciated!!`,
        name: 'Mihir Shah',
        location: 'India',
    },
    {
        quote: `I used to run a Google Ads campaign before I partnered with IndyLogix. That’s when their knowledge of IndyLogix’s PPC services team took the whole thing to another level. Well, I am now with their PPC management services, and my target customer base is able to locate and approach me.`,
        name: 'Peter Gruenewald',
        location: 'Canada',
    },
    {
        quote: `It had been rather challenging for me as I was working on my Google ads. Thankfully, I found IndyLogix! Their Google Ads management company took over our campaigns and developed strategies that fit our business. The results have been great lately. The best Google ads agency to partner with!`,
        name: 'Raj Patel',
        location: 'India',
    },
    {
        quote: `Ever since partnering with IndyLogix, my business has experienced unparalleled growth. Their exceptional knowledge and expertise as a Google Ads agency have played a crucial role in boosting sales and generating valuable leads. If you’re looking for the best Google ads agency India, give InsyLogix a try, you won’t be disappointed.`,
        name: 'Nidhi Pandit',
        location: 'India',
    },
    {
        quote: `IndyLogix’s Google Adwords service is worth every penny. They’re honest, transparent, and results-oriented. They don’t make promises they can’t keep, and they always deliver on their Google Ads Management strategies.`,
        name: 'Siddharth Ghosh',
        location: 'India',
    },


];
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const headingStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const headingText = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const OurClients = () => {
  return (
    <motion.section
      className={styles.ourClientSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <motion.div className={styles.heading} variants={headingStagger}>
        <motion.h2 variants={headingText}>
          Our Valued <span>Clients</span>
        </motion.h2>
        <motion.p variants={headingText}>
          Discover The Brand’s Voice For Our Best Digital Marketing Services In Ahmedabad
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <TestimonialSection
          heading="Our Valued Clients"
          subheading="Discover The Brand’s Voice For Our Best Digital Marketing Services In Ahmedabad"
          testimonials={testimonials}
        />
      </motion.div>
    </motion.section>
  );
};

export default OurClients;








