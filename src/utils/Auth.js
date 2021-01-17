// Auth handles authentication on the app
// This may include getting and setting tokens, removing tokens etc

import JwtDecode from "jwt-decode";

export default class Auth {
  static isAuthenticated() {
    const token = localStorage.getItem("token");
    return token ? true : false;
  }

  static setToken(token) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  static getToken() {
    let token = localStorage.getItem("token");
    return !!token === true ? JSON.parse(token) : null;
  }

  static removeToken() {
    localStorage.removeItem("token");
  }

  static getRole() {
    const token = localStorage.getItem("token");
    if (token) {
      const { role, id } = JwtDecode(token.slice(7));
      return { role, id };
    }
    return null;
  }
}
