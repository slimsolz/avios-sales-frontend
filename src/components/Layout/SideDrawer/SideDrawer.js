import React from "react";
import BackDrop from "../BackDrop/BackDrop";
import SideNavItem from "../SideNavItem/SideNavItem";
import styles from "./SideDrawer.module.scss";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const SideDrawer = ({ show, onClose }) => {
  const path = window.location.pathname;

  return (
    <>
      <BackDrop show={show} close={onClose} />
      <div
        className={`${styles.SideDrawer} ${
          show ? styles.SideDrawerOpen : styles.SideDrawerHide
        }`}
      >
        <h1 className={styles.SideDrawer__navHeader}>Avios Sales</h1>

        <SideNavItem
          Icon={FaUser}
          navName="login"
          linkTo="/login"
          isActive={path.includes("login")}
        />
        <SideNavItem
          Icon={FaShoppingCart}
          navName="cart"
          linkTo="/cart"
          isActive={path.includes("cart")}
        />
      </div>
    </>
  );
};

export default React.memo(SideDrawer);
