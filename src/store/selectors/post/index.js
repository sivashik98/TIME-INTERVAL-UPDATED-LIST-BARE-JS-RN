export const getFetchingPostStatus = store => {
  return store.post.isFetchingPost;
};

export const getRefreshingStatus = store => {
  return store.post.isRefreshing;
};

export const getPost = store => {
  return store.post.post;
};
