// Services contains all api calls made from this module
// Api calls made to an external service should also be added here

import { Api } from "../../utils/Api";

export const getAllProducts = async () => {
  const { data } = await Api.get("/products");
  return data;
};

