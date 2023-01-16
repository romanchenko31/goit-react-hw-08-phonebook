const getIsloggedIn = state => state.auth.isLoggedIn;
const getIsRegistretion = state => state.auth.isRegistretion;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;

const authSelectors = {
  getIsloggedIn,
  getIsRegistretion,
  getUserName,
  getUserEmail,
};

export default authSelectors;
