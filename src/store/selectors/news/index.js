export const getNews = store => {
  return store.news.news;
};

export const getFetchingNewsStatus = store => {
  return store.news.isFetchingNews;
};

export const getRefreshingStatus = store => {
  return store.news.isRefreshing;
};
