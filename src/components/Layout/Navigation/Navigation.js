import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { FaUser, FaShoppingCart } from "react-icons/fa";

const Navigation = () => {
  const path = window.location.pathname;

  return (
    <nav className={styles.Nav}>
      <div
        className={`${styles.Nav__navItem} ${
          path.includes("/login") && styles.active
        }`}
      >
        <Link to="/login" className={styles.Nav__link}>
          <FaUser /> login
        </Link>
      </div>
      <div
        className={`${styles.Nav__navItem} ${
          path.includes("/cart") && styles.active
        }`}
      >
        <Link to="/cart">
          <FaShoppingCart /> cart
        </Link>
      </div>
    </nav>
  );
};

export default React.memo(Navigation);
