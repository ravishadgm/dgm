"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./TeamSlider.module.scss";
import Images from "../../../assets/images";

const slides = [
    [Images.memory1],
    [Images.memory2, Images.memory3],
    [Images.memory4],
    [Images.memory5, Images.memory6],
    [Images.memory7],
];

export default function TeamSlider() {
    return (
        <section className={styles.gallerySection}>
            <div className={styles.sliderWrapper}>
                <div className={styles.header}>
                    <h2>
                        Moments of Celebration at <span>DGMtech Solutions</span>
                    </h2>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    speed={3000}
                    loop={true}
                    loopedSlides={slides.length}
                    freeMode={true}
                    watchSlidesProgress={true}
                    slidesPerView="auto"
                    spaceBetween={20}
                    grabCursor
                >
                    {slides.map((group, i) => (
                        <SwiperSlide
                            key={i}
                            className={`${styles.slide} ${group.length === 2 ? styles.halfPair : ""
                                }`}
                        >
                            {group.map((src, j) => (
                                <img key={j} src={src} alt={`Team gallery ${i}-${j}`} />
                            ))}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
