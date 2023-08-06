import { Row } from "antd";
import React, { useEffect, useRef } from "react";
import pageLogo from "../../assets/logo/logo.png";
import styles from "./styles.module.scss";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

const Header = () => {
  const NAVLINK = [
    {
      link: "/",
      name: "HOME",
    },
    {
      link: "/",
      name: "SERVICES",
    },
    {
      link: "/",
      name: "ABOUT",
    },
    {
      link: "/",
      name: "PORTFOLIO",
    },
    {
      link: "/",
      name: "TEAM",
    },
    {
      link: "/",
      name: "NEWS",
    },
    {
      link: "/",
      name: "CLIENTS",
    },
    {
      link: "/",
      name: "CONTACTS",
    },
  ];

  useEffect(() => {
    document.getElementById("showBtn").style.display = "none";
  }, []);

  const handleOnShowDevicesController = () => {
    const headerElement = document.getElementById("header").style;
    const showBtn = document.getElementById("showBtn").style;
    if (headerElement.transform === "translateY(-60px)") {
      headerElement.transform = "translateY(0)";
      showBtn.display = "none";
    } else {
      headerElement.transform = "translateY(-60px)";
      showBtn.display = "block";
    }
  };

  return (
    <div id="header" className={styles.headerContainer}>
      <div className={styles.devicesController}>
        <button
          onClick={handleOnShowDevicesController}
          className={styles.hideDevicesController}
        >
          <CaretUpOutlined />
        </button>
        <button
          id="showBtn"
          onClick={handleOnShowDevicesController}
          className={styles.showDevicesController}
        >
          <CaretDownOutlined />
        </button>
      </div>
      <nav className={styles.headerNavbar}>
        <div>
          <a href="/">
            <img src={pageLogo} alt="Logo" />
          </a>
        </div>
        <div>
          <ul className={styles.headerLinkContainer}>
            {NAVLINK.map((item, index) => {
              return (
                <li key={index} className={styles.headerLink}>
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <button className={styles.headerQuoteBtn}>GET A QUOTE</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
