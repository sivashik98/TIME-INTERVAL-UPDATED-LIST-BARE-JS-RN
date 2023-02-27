import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import NewsScreen from '../../screens/News';
import PostScreen from '../../screens/Post';

import ArrowSVG from '../../../assets/svg/Arrow';

import { basicStyles, commonStyles, commonThings } from '../../styles';

const { Navigator, Screen } = createStackNavigator();

const NewsStackNavigator = ({ navigation }) => {
  const options =
    (title, isBack = true) =>
    ({ navigation }) => {
      const handleBack = () => navigation.goBack();

      return {
        title,
        headerStyle: basicStyles.navigationHeaderStyle,
        headerTitleStyle: {
          fontSize: 16,
        },
        headerTitleAlign: 'center',
        tabBarVisible: false,
        headerStatusBarHeight: 0,
        gestureEnabled: isBack,
        gestureDirection: 'horizontal',
        // headerShown: false,
        headerBorder: 0,
        headerLeft: isBack
          ? () => (
              <TouchableOpacity
                style={commonStyles.buttonBack}
                activeOpacity={commonThings.activeOpacity}
                onPress={handleBack}>
                <ArrowSVG direction={'left'} />
              </TouchableOpacity>
            )
          : null,
      };
    };

  return (
    <SafeAreaView style={commonStyles.flex} edges={['top']}>
      <Navigator key="home-stack" initialRouteName="Home">
        <Screen name={'News'} component={NewsScreen} options={options('', 0)} />

        <Screen
          name={'Post'}
          component={PostScreen}
          options={options('Post', 1)}
        />
      </Navigator>
    </SafeAreaView>
  );
};

export default NewsStackNavigator;
