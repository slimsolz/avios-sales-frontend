// Services contains all api calls made from this module
// Api calls made to an external service should also be added here

import { Api } from "../../utils/Api";

export const loginUser = async (body) => {
  const { data } = await Api.post("/auth/login", body);
  return data;
};

export const registerUser = async (body) => {
  const { data } = await Api.post("/auth/register", body);
  return data;
};
