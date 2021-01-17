import React from "react";
import SocialAccounts from "../SocialAccounts/SocialAccounts";
import styles from "./Footer.module.scss";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      {/* <img src={logoImgBlack} className={styles.logo} alt="logo" /> */}
      <div className={styles.contactInfo}>
        <FaMapMarkerAlt />
        <p>lagos, Nigeria</p>
      </div>
      <div className={styles.contactInfo}>
        <FaWhatsapp />
        <p>081xxxxxxxx</p>
      </div>
      <SocialAccounts />
      <p className={styles.copyright}>
        &copy; copyright | avios sales {new Date().getFullYear()} all rights
        reserved
      </p>
    </footer>
  );
};

export default React.memo(Footer);
