import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Profile from '../../pages/Profile';

import {
  getFetchingUserStatus,
  getRefreshingStatus,
  getUser,
} from '../../store/selectors/profile';
import { fetchUser, refreshData } from '../../store/actions/profile';

import { basicStyles } from '../../styles';

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const isFetchingUser = useSelector(getFetchingUserStatus);
  const isRefreshing = useSelector(getRefreshingStatus);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const handleRefresh = () => {
    dispatch(refreshData());
  };

  return (
    <SafeAreaView style={basicStyles.screenWrap}>
      <Profile
        isFetchingUser={isFetchingUser}
        isRefreshing={isRefreshing}
        user={user}
        onRefresh={handleRefresh}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
