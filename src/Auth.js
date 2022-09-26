const Auth = {
    isAuthenticated: window.localStorage.getItem("auth"),
    authenticate() {
      this.isAuthenticated = true;
      window.localStorage.setItem("auth",true)
    },
    signout() {
      this.isAuthenticated = false;
      window.localStorage.setItem("auth",false)
    },
    getAuth() {
        return this.isAuthenticated;
      }
  };

  export default Auth;