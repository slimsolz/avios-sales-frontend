import React, { lazy } from "react";
import Layout from "../../../components/Layout/Layout";
import styles from "./Login.module.scss";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <Layout>
      <div className={styles.Login}>
        <LoginForm />
      </div>
    </Layout>
  );
};

export default Login;
