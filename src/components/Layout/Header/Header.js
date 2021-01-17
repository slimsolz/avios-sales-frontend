import React from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";
import { FaBars } from "react-icons/fa";

const Header = ({ onOpen }) => {
  return (
    <header className={`${styles.Header}`}>
      <div className={styles.Header__menuIcon}>
        <FaBars onClick={onOpen} size={30} color="#626567" />
      </div>
      <div className={styles.logoContainer}>
        <h1 className={styles.heading}>AVIOS SALES</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default React.memo(Header);
