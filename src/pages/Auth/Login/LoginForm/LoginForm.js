/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import FormButton from "../../../../components/FormButton/FormButton";
import FormInputContainer from "../../../../components/FormInputContainer/FormInputContainer";
import useForm from "../../../../utils/useForm";
import { validateLogin } from "../../../../utils/validationRules";
import styles from "./LoginForm.module.scss";
import { FaUser } from "react-icons/fa";
import { useMutation } from "react-query";
import { loginUser } from "../../services";
import { Api } from "../../../../utils/Api";
import Auth from "../../../../utils/Auth";
import { Link, useHistory } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();
  const [message, setMessage] = useState(null);

  const [login, { data, status, error, isLoading }] = useMutation(loginUser);

  const onSend = async () => {
    try {
      await login(values);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (status === "error") {
      const { data } = error.response;
      setMessage(data.message);
    }

    if (status === "success") {
      const token = data.token;
      setMessage(data.message);
      Auth.setToken(token);

      Api.defaults.headers.common["Authorization"] = Auth.getToken();
      history.replace("/");
    }
  }, [data, status, error]);

  const { values, errors, handleChange, handleSubmit } = useForm(
    onSend,
    validateLogin
  );

  return (
    <form className={styles.LoginForm} onSubmit={handleSubmit}>
      <div className={styles.LoginForm__iconDiv}>
        <FaUser className={styles.LoginForm__icon} />
        <h1>login</h1>
      </div>

      <FormInputContainer
        name="email"
        inputName="email"
        inputType="email"
        inputValue={values.email}
        errorName={errors.email}
        placeholderText="Email"
        change={handleChange}
        isRequired
      />

      <FormInputContainer
        name="password"
        inputName="password"
        inputType="password"
        inputValue={values.password}
        errorName={errors.password}
        placeholderText="Password"
        change={handleChange}
        isRequired
      />

      <div className={styles.LoginForm__checkBtn}>
        <div className={styles.LoginForm__checkBtnContainer}>
          <input
            required
            type="radio"
            name="role"
            value="seller"
            onChange={handleChange}
          />
          <label>seller</label>
        </div>

        <div className={styles.LoginForm__checkBtnContainer}>
          <input
            required
            type="radio"
            name="role"
            value="buyer"
            onChange={handleChange}
          />
          <label>buyer</label>
        </div>
      </div>

      {message && (
        <div className={styles.LoginForm__message}>
          <p>{message}</p>
        </div>
      )}

      <div className={styles.LoginForm__btn}>
        <FormButton
          name="login"
          isLoading={isLoading}
          buttonColor="orange"
          textColor="#fff"
          loaderColor="#fff"
          loaderType="TailSpin"
        />
      </div>

      <p className={styles.LoginForm__link}>
        Don't have an account? Register <Link to="/register">here</Link>
      </p>
    </form>
  );
};

export default LoginForm;
