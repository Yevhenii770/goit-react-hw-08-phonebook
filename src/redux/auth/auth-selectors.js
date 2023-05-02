const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const selectUser = state => state.auth.user;
const selectIsRefreshing = state => state.auth.isRefreshing;
const selectIsLoading = state => state.auth.isLoading;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  selectUser,
  selectIsRefreshing,
  selectIsLoading,
};
export default authSelectors;
