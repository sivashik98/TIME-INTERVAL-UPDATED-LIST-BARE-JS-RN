import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';

import AdaptedImage from '../../components/AdaptedImage';
import Post from '../../components/Post';

import { basicStyles } from '../../styles';
import { getSampleLoaderData } from '../../helpers/common';

const newsSampleData = getSampleLoaderData(6, 1);

const News = ({
  isFetchingNews,
  isRefreshing,
  news,
  onRefresh,
  onMoveToPost,
}) => {
  const [updateEnabled, setUpdateEnabled] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const isBusyNews = isFetchingNews || isRefreshing;
  const newsData = isBusyNews ? newsSampleData : news;
  const source = require('../../../assets/img/EmptyList.png');
  const intervalUpdate = 60000;
  const timeOutUserAction = 15000;

  useEffect(() => {
    handleUpdateTimeOut();
    handleUpdateInterval();
  }, []);

  const handleRefresh = () => {
    clearTimeout(timeoutId);
    setUpdateEnabled(0);

    onRefresh && onRefresh();

    handleUpdateTimeOut();
  };

  const handleUpdateTimeOut = () => {
    const id = setTimeout(() => {
      setUpdateEnabled(1);
    }, timeOutUserAction);

    setTimeoutId(id);
  };

  const handleUpdateInterval = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        handleRefresh();
        setUpdateEnabled(0);
      }, intervalUpdate);

      setIntervalId(id);
    }
  };

  const handleClearCounters = () => {
    timeoutId && clearTimeout(timeoutId);
    intervalId && clearInterval(intervalId);

    setTimeoutId(null);
    setIntervalId(null);
  };

  const handleClearInterval = () => {
    intervalId && clearInterval(intervalId);

    setIntervalId(null);
  };

  const handleResetPage = () => {
    setUpdateEnabled(0);
    handleUpdateInterval();
    handleRefresh();
  };

  const renderPost = ({ item, index }) => {
    const id = item?.id;
    const title = item?.title;
    const content = item?.body;

    return (
      <Post
        isLoading={isBusyNews}
        key={id}
        title={title}
        content={content}
        onPress={onMoveToPost(id, handleClearCounters, handleResetPage)}
        containerStyles={{ margin: 10 }}
      />
    );
  };

  const renderEmptyHorizontalList = () => {
    return <AdaptedImage source={source} />;
  };

  return (
    <FlatList
      refreshControl={
        updateEnabled ? (
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        ) : null
      }
      data={newsData}
      renderItem={renderPost}
      onMomentumScrollBegin={handleClearInterval}
      onMomentumScrollEnd={handleUpdateInterval}
      ListEmptyComponent={renderEmptyHorizontalList}
      scrollEnabled={newsData.length}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={basicStyles.container}
      windowSize={7}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 10,
  },
});

export default News;
