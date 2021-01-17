import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Auth from "../../../utils/Auth";

const Navigation = () => {
  const path = window.location.pathname;

  const _signOut = () => {
    Auth.removeToken();
    window.location.replace("/");
  };

  const { role } = Auth.getRole();

  return (
    <nav className={styles.Nav}>
      <div
        className={`${styles.Nav__navItem} ${
          path.includes("/login") && styles.active
        }`}
      >
        {Auth.getToken() ? (
          <Link to="#" onClick={_signOut} className={styles.Nav__link}>
            <FaUser /> logout
          </Link>
        ) : (
          <Link to="/login" className={styles.Nav__link}>
            <FaUser /> login
          </Link>
        )}
      </div>
      {role !== "seller" && (
        <div
          className={`${styles.Nav__navItem} ${
            path.includes("/cart") && styles.active
          }`}
        >
          <Link to="/cart">
            <FaShoppingCart /> cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default React.memo(Navigation);
