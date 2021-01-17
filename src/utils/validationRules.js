export function validateLogin(values) {
  let errors = {};
  if (!values.email || values.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/i.test(
      values.password
    )
  ) {
    errors.password = "Password is invalid";
  }

  return errors;
}

export function validateRegister(values) {
  let errors = {};
  if (!values.email || values.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*[@$!#_%.*?&-])(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%_*#.?&-]{8,}$/.test(
      values.password
    )
  ) {
    errors.password = "Password is invalid";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (
    values.confirmPassword &&
    values.password !== values.confirmPassword
  ) {
    errors.confirmPassword = "Passwords don't match";
  }
  if (!values.firstName || values.firstName.trim() === "") {
    errors.firstName = "First name is required";
  } else if (
    !/^([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}$/.test(values.firstName.trim())
  ) {
    errors.firstName = "can only contain an (a-z) or ('.-)";
  } else if (values.firstName.trim().length > 30) {
    errors.firstName = "not more than 30 characters";
  }
  if (!values.lastName || values.lastName.trim() === "") {
    errors.lastName = "Last name is required";
  } else if (
    !/^([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}$/.test(values.lastName.trim())
  ) {
    errors.lastName = "can only contain an (a-z) or ('.-)";
  } else if (values.lastName.trim().length > 30) {
    errors.lastName = "not more than 30 characters";
  }

  return errors;
}
