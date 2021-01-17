/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "react-query";
import FormButton from "../../../../components/FormButton/FormButton";
import FormInputContainer from "../../../../components/FormInputContainer/FormInputContainer";
import { registerUser } from "../../services";
import styles from "./RegisterForm.module.scss";
import { validateRegister } from "../../../../utils/validationRules";
import useForm from "../../../../utils/useForm";
import { Link, useHistory } from "react-router-dom";
import Auth from "../../../../utils/Auth";
import { Api } from "../../../../utils/Api";

const RegisterForm = () => {
  const history = useHistory();
  const [message, setMessage] = useState(null);

  const [register, { data, status, error, isLoading }] = useMutation(
    registerUser
  );

  const onSend = async () => {
    try {
      await register(values);
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
    validateRegister
  );

  return (
    <form className={styles.RegisterForm} onSubmit={handleSubmit}>
      <div className={styles.RegisterForm__iconDiv}>
        <FaUser className={styles.RegisterForm__icon} />
        <h1>Register</h1>
      </div>
      <FormInputContainer
        name="firstName"
        inputName="firstName"
        inputType="text"
        inputValue={values.firstName}
        errorName={errors.firstName}
        placeholderText="First name"
        change={handleChange}
        isRequired
      />
      <FormInputContainer
        name="lastName"
        inputName="lastName"
        inputType="text"
        inputValue={values.lastName}
        errorName={errors.lastName}
        placeholderText="Last name"
        change={handleChange}
        isRequired
      />
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

      <FormInputContainer
        name="confirmPassword"
        inputName="confirmPassword"
        inputType="password"
        inputValue={values.confirmPassword}
        errorName={errors.confirmPassword}
        placeholderText="Re-enter your Password"
        change={handleChange}
        isRequired
      />
      <div className={styles.RegisterForm__checkBtn}>
        <div className={styles.RegisterForm__checkBtnContainer}>
          <input
            required
            type="radio"
            name="role"
            value="seller"
            onChange={handleChange}
          />
          <label>seller</label>
        </div>
        <div className={styles.RegisterForm__checkBtnContainer}>
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
        <div className={styles.RegisterForm__message}>
          <p>{message}</p>
        </div>
      )}
      <div className={styles.RegisterForm__btn}>
        <FormButton
          name="register"
          isLoading={isLoading}
          buttonColor="orange"
          textColor="#fff"
          loaderColor="#fff"
          loaderType="TailSpin"
        />
      </div>

      <p className={styles.RegisterForm__link}>
        Already have an account? Login <Link to="/login">here</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
