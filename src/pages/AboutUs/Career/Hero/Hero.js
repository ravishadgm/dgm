import React from 'react';
import styles from './Hero.module.scss';
import Images from '../../../assets/images/index';

const Hero = () => {
    return (
        <section
            className={styles.bannerSection}
            style={{ backgroundImage: `url(${Images.career})` }}
        >
            <div className={styles.content}>
                <h1>
                    Take A Career Leap At <span>IndyLogix</span>
                </h1>
                <p>Breathe, take the leap of faith, leave your mark with us!</p>
            </div>
        </section>
    );
};

export default Hero;
