export const getUser = store => {
  return store.profile.user;
};

export const getFetchingUserStatus = store => {
  return store.profile.isFetchingUser;
};

export const getRefreshingStatus = store => {
  return store.profile.isRefreshing;
};
