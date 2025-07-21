import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './JourneySlider.module.scss';

const journeyData = [
  {
    id: 1,
    title: 'The Inception of DGM',
    description:
      'DGM was founded by a small group of passionate developers with a shared goal — to create scalable and performance-driven web and app solutions. With limited resources but strong technical vision, we laid the foundation with our first client projects and an unwavering commitment to quality.',
  },
  {
    id: 2,
    title: 'Team Expansion & Core Tech Stack',
    description:
      'As client demand increased, we expanded to a team with strong expertise in React, Node.js, MongoDB, and Flutter, FlutterFlow. We started delivering full-stack web and mobile app solutions, growing our reputation for solving complex technical challenges with clean, scalable code.',
  },
  {
    id: 3,
    title: 'Stepping Into the Global Market',
    description:
      'With consistent delivery and client satisfaction, DGM entered international markets — serving clients in the US, UK, and Middle East. Our ability to understand business needs and deliver custom software helped us grow our global presence.',
  },
  {
    id: 4,
    title: 'R&D and Product Innovation',
    description:
      'We began investing in internal R&D and explored SaaS products and enterprise-level applications. This phase encouraged our engineers to explore microservices, and emerging frontend frameworks, building a culture of technical exploration and innovation.',
  },
  {
    id: 5,
    title: 'Crossing 100+ Project Deliveries',
    description:
      'With over 100+ successful web and app development projects delivered, DGM became a trusted tech partner for startups and enterprises. Each project strengthened our capabilities and taught us the importance of adaptability and long-term client relationships.',
  },
];



const JourneySlider = () => {
  return (
    <div className={styles.journeySection}>
      <div className={styles.journeyTitle}>
        <h2>
          Our <span>Journey</span>
        </h2>
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className={styles.journeySwiper}
      >
        {journeyData.map((step) => (
          <SwiperSlide key={step.id}>
            <div className={styles.journeySlide}>
              <div className={styles.journeyLeft}>
                <div className={styles.stepTitle}>
                  <h3>{step.title}</h3>
                </div>
                <div className={styles.hasline}>
                  <p>#{step.id}</p>
                </div>

              </div>

              <div className={styles.journeyContent}>
                <p>{step.description}</p>
              </div>

              <div className={styles.rightDiv} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default JourneySlider;
