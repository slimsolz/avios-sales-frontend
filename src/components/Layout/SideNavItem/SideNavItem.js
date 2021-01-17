import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideNavItem.module.scss";

const SideNavItem = ({ Icon, isActive, navName, linkTo }) => {
  return (
    <Link
      className={`${styles.SideNavItem} ${
        isActive ? styles.SideItemActive : styles.SideItemInActive
      }`}
      to={linkTo}
    >
      <div className={styles.SideNavItem__iconList}>
        <Icon size={20} className={styles.SideNavItem__icon} alt="icon" />
        <span className={styles.SideNavItem__link}>{navName}</span>
      </div>
    </Link>
  );
};

export default React.memo(SideNavItem);
