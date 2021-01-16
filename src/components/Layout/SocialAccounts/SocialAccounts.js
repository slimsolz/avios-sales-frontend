/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styles from "./SocialAccounts.module.scss";
import { FaInstagram, FaFacebookF, FaRegEnvelope } from "react-icons/fa";

const SocialAccounts = () => {
  return (
    <div className={styles.SocialAccounts}>
      <a href="#" target="_blank" className={styles.SocialAccounts__item}>
        <FaInstagram size="20" color="#626567" />
      </a>
      <a href="#" target="_blank" className={styles.SocialAccounts__item}>
        <FaFacebookF size="20" color="#626567" />
      </a>
      <a href="#" className={styles.SocialAccounts__item}>
        <FaRegEnvelope size="20" color="#626567" />
      </a>
    </div>
  );
};

export default React.memo(SocialAccounts);
