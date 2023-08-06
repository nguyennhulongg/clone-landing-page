import React from "react";
import styles from "../styles.module.scss";

const ContactUsSection = () => {
  return (
    <div className={styles.contactUsContent}>
      <div className={styles.contactUsHeader}>
        <h4>
          We are always ready to help you make your
          <br /> business more profitable with our tailored
          <br /> solutions
        </h4>
        <a href="/">CONTACT US</a>
      </div>
      <div className={styles.contactUsFooter}>
        <div className={styles.contactUsCard}>
          <a className={styles.contactUsImg} href="/">
            <img
              src="https://livedemo00.template-help.com/wt_prod-18908/images/service-1-652x491.jpg"
              alt="1"
            />
          </a>
          <a className={styles.contactUsTitle} href="/">
          BUSINESS PLANNING
          </a>
          <p>
            We can create an efficient and reliable business plan designed to
            fit your company’s sphere of activity and industry experience.
          </p>
        </div>
        <div className={styles.contactUsCard}>
          <a className={styles.contactUsImg} href="/">
            <img
              src="https://livedemo00.template-help.com/wt_prod-18908/images/service-1-652x491.jpg"
              alt="1"
            />
          </a>
          <a className={styles.contactUsTitle} href="/">
            EQUITY & VENTURE FUNDS
          </a>
          <p>
            Our professional team will be glad to provide you with advice<br/> on
            managing equity and venture capital funds.
          </p>
        </div>
        <div className={styles.contactUsCard}>
          <a className={styles.contactUsImg} href="/">
            <img
              src="https://livedemo00.template-help.com/wt_prod-18908/images/service-1-652x491.jpg"
              alt="1"
            />
          </a>
          <a className={styles.contactUsTitle} href="/">
            STRATEGIC GROWTH
          </a>
          <p>
            Our company provides a customized approach to advising clients
            looking to grow through acquisition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
