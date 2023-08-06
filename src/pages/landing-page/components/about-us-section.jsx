import React from "react";
import styles from "../styles.module.scss";
import BorderBottom from "../../../components/borderBottom";
import {
  CoffeeOutlined,
  ControlOutlined,
  DownloadOutlined,
  RocketOutlined,
} from "@ant-design/icons";

const AboutUsSection = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.aboutUsLeftContent}>
        <h1>ABOUT US</h1>
        <BorderBottom color="#1d89ff" width="50px" margin="10px 0 20px" />
        <p>
          SBG is a leading firm of business managers and advisors with offices
          across the USA. Our company
          <br /> was established in 1995. Throughout our history, we have
          assisted individuals, progressive
          <br /> businesses, and community organizations, with a particular
          focus on the middle market.
        </p>
        <div className={styles.abouUsLinkContainer}>
          <div className={styles.abouUsLink}>
            <RocketOutlined />
            <div>
              <a href="/">QUALIFIED EMPLOYEES</a>
              <p>
                Our team consists of more than
                <br /> 40 qualified and experienced
                <br />
                business consultants.
              </p>
            </div>
          </div>
          <div className={styles.abouUsLink}>
            <ControlOutlined />
            <div>
              <a href="/">FREE CONSULTATIONS</a>
              <p>
                We offer a free consultation to
                <br /> find out the best possible
                <br />
                solutions to your problems.
              </p>
            </div>
          </div>
          <div className={styles.abouUsLink}>
            <DownloadOutlined />
            <div>
              <a href="/">100% GUARANTEED</a>
              <p>
                We guarantee that with us you
                <br /> will get the desired results and
                <br /> profit for your business.
              </p>
            </div>
          </div>
          <div className={styles.abouUsLink}>
            <CoffeeOutlined />
            <div>
              <a href="/">LOTS OF HAPPY CLIENTS</a>
              <p>
                Since our establishment, most of
                <br /> our clients have become our <br />
                returning customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutUsRightContent}>
        <a className={styles.aboutUsImg} href="/">
          <img
            src="https://livedemo00.template-help.com/wt_prod-18908/images/blog-image-1-420x317.jpg"
            alt="1"
          />
        </a>
        <a className={styles.aboutUsTitle} href="/">
          WHO WE ARE
        </a>
        <p>
          We are a team of passionate web designers and developers bringing you
          the best website templates.
        </p>
      </div>
    </div>
  );
};

export default AboutUsSection;
