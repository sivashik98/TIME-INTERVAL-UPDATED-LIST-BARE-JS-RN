import React, { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Post from '../../pages/Post';
import ArrowSVG from '../../../assets/svg/Arrow';

import { basicStyles, commonStyles, commonThings } from '../../styles';
import { fetchPost, refreshData } from '../../store/actions/post';
import {
  getFetchingPostStatus,
  getPost,
  getRefreshingStatus,
} from '../../store/selectors/post';

const PostScreen = ({ navigation, route }) => {
  const { id, onClearCounters, onPressBack } = route.params;
  const dispatch = useDispatch();
  const isFetchingPost = useSelector(getFetchingPostStatus);
  const isRefreshing = useSelector(getRefreshingStatus);
  const post = useSelector(getPost);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={commonStyles.buttonBack}
          activeOpacity={commonThings.activeOpacity}
          onPress={handlePressBack}>
          <ArrowSVG direction={'left'} />
        </TouchableOpacity>
      ),
    });

    onClearCounters();

    dispatch(fetchPost(id));
  }, []);

  const handlePressBack = () => {
    navigation.goBack();

    onPressBack && onPressBack();
  };

  const handleRefresh = () => {
    dispatch(refreshData(id));
  };

  return (
    <View style={basicStyles.screenWrap}>
      <Post
        isFetchingPost={isFetchingPost}
        isRefreshing={isRefreshing}
        post={post}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

export default PostScreen;
