import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import { useIsFocused } from '@react-navigation/native';
import News from '../../pages/News';

import {
  getFetchingNewsStatus,
  getNews,
  getRefreshingStatus,
} from '../../store/selectors/news';
import { fetchNews, refreshData } from '../../store/actions/news';

import { basicStyles } from '../../styles';

const NewsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFetchingNews = useSelector(getFetchingNewsStatus);
  const isRefreshing = useSelector(getRefreshingStatus);
  const news = useSelector(getNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  const handleRefresh = () => {
    dispatch(refreshData());
  };

  const handleMoveToPost = (id, onClearCounters, onResetNewsPage) => () => {
    navigation.navigate('Post', {
      id,
      onClearCounters,
      onPressBack: onResetNewsPage,
    });
  };

  return (
    <View style={basicStyles.screenWrap}>
      <News
        isFetchingNews={isFetchingNews}
        isRefreshing={isRefreshing}
        news={news}
        onRefresh={handleRefresh}
        onMoveToPost={handleMoveToPost}
      />
    </View>
  );
};

export default NewsScreen;

// useFocusEffect(
//   useCallback(() => {
//     dispatch(fetchPortfolios());
//     dispatch(fetchUser());
//     dispatch(fetchInsights());
//   }, [isFocused])
// );
