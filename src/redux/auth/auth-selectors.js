const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const selectUser = state => state.auth.user;
const selectIsLoading = state => state.auth.isLoading;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  selectUser,
  selectIsLoading,
};
export default authSelectors;
