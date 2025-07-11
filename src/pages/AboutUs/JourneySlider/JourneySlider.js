import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './JourneySlider.module.scss';

const journeyData = [
  {
    id: 1,
    title: 'Setting the Foundation',
    description:
      'Our journey began with three passionate individuals sharing a vision for pioneering web solutions. In a small workplace with enormous goals, we built the foundation for IndyLogix. Despite having few resources, the urge to work hard made us succeed while growing up.',
  },
  {
    id: 2,
    title: 'Team Augmentation And Addition of New Services',
    description:
      'As we grew to 12 members, we started focusing more on SEO and WordPress Development. The experience and expertise in SEO and WordPress became our major strength within a short period, which pushed us higher, consequently allowing us to undertake complex projects that are more ambitious than before.',
  },
  {
    id: 3,
    title: 'Expanding Global Reach',
    description: 'Our dedication and quality of service opened doors to international markets. We began serving customers in over five countries, which made us enter the international market. It showed that we can adapt and stay committed to serving each market’s special needs while still keeping our organization’s global reputation strong.',
  },
  {
    id: 4,
    title: 'Building a Culture of Innovation',
    description:
      'Our service portfolio was expanded to include UI/UX design and social media management in response to our clients’ changing needs. This not only helped to improve our skill set but also provided complete solutions that helped our customers increase their digital footprint and interact with users.',
  },
  {
    id: 5,
    title: 'Achieved 700+ Project Completion',
    description:
      'A big achievement for us was finishing 700+ projects. Each project gave us new ideas every time...',
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
