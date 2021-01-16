import React, { useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./Layout.module.scss";
import SideDrawer from "./SideDrawer/SideDrawer";

const Layout = ({ setBgColor = null, children }) => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  return (
    <div className={styles.Layout}>
      <Header onOpen={toggle} />
      <SideDrawer show={show} onClose={toggle} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
