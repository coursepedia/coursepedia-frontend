export const userAuth = {
  isAuthenticated: false,
  // user: "",
  authenticate(cb) {
    userAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    userAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
