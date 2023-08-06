import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import React, { useEffect, useRef, useState } from "react";
import firstVideoCarousel from "../../assets/video/firstVideoCarousel.mp4";
import styles from "./styles.module.scss";
import ContactUsSection from "./components/contact-us-section";
import AboutUsSection from "./components/about-us-section";

const LandingPage = () => {
  const slider = useRef(null);
  const onChange = () => {
    console.log(slider);
  };

  useEffect(() => {}, []);

  return (
    <div className={styles.homeAppLandingContainer}>
      <section className={styles.sliderSection}>
        <LeftOutlined
          onClick={() => slider.current.prev()}
          className={styles["prevIcon"]}
        />
        <RightOutlined
          onClick={() => slider.current.next()}
          className={styles["nextIcon"]}
        />
        <Carousel dots={false} ref={slider} afterChange={onChange}>
          <div className={styles.firstCarouselContainer}>
            <div className={styles.firstCarouselContent}>
              <h1>WELCOME TO SBG</h1>
              <p>
                OUR COMPANY PROVIDES SERVICES FOR SMALL AND
                <br /> MEDIUM BUSINESSES LOCATED WORLDWIDE.
              </p>
              <div className={styles.firstCarouselButtonContainer}>
                <a href="/">VIEW SERVICES</a>
                <a href="/">GET IN TOUCH</a>
              </div>
            </div>
            <video width="100%">
              <source src={firstVideoCarousel} />
            </video>
          </div>
          <div className={styles.secondCarouselContainer}>
            <div className={styles.secondCarouselContent}>
              <h1>
                PROFESSIONAL BUSINESS
                <br /> CONSULTING SERVICES
              </h1>
              <a href="/">VIEW MORE</a>
            </div>
            <video width="100%">
              <source src={firstVideoCarousel} />
            </video>
          </div>
          <div className={styles.thirdCarouselContainer}>
            <div className={styles.thirdCarouselContent}>
              <h1>SBG</h1>
              <p>QUALITY BUSINESS ADVISORY</p>
              <div className={styles.thirdCarouselButtonContainer}>
                <a href="/">VIEW SERVICES</a>
                <a href="/">GET IN TOUCH</a>
              </div>
            </div>
            <video width="100%">
              <source src={firstVideoCarousel} />
            </video>
          </div>
        </Carousel>
      </section>
      <section className={styles.contactUsSection}>
        <ContactUsSection />
      </section>
      <section>
        <AboutUsSection />
      </section>
    </div>
  );
};

export default LandingPage;
