// Auth handles authentication on the app
// This may include getting and setting tokens, removing tokens etc

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
}
