import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import ProfileScreen from './src/screens/Profile';

// StackScreens
import NewsStackNavigator from './src/navigation/NewsStackNavigator';

// Icons
import TabHomeSVG from './assets/svg/NavigationTabs/TabHome';
import TabProfileSVG from './assets/svg/NavigationTabs/TabProfile';

import { commonColors } from './src/styles';

const { Navigator, Screen } = createBottomTabNavigator();

const inactiveColor = '#727171';
const activeColor = '#4863C5';
const styles = StyleSheet.create({
  bottomTab: {
    // backgroundColor: "orange",
    // borderWidth: 1,
    justifyContent: 'flex-start',
  },
  bottomTab__icon: {
    // flex: 1,
    // backgroundColor: "blue",
  },
  bottomTab__label: {
    color: inactiveColor,
    fontSize: 14,
    // backgroundColor: "brown",
    // flex: 1.5,
  },
  'bottomTab__label--focused': {
    color: activeColor,
  },
});
const tabBarOptions = {
  tabStyle: styles.bottomTab,
  inactiveTintColor: inactiveColor,
  labelPosition: 'below-icon',
  style: {
    height: 60,
    paddingTop: 6,
    paddingBottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: commonColors.white,
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 10,
  },
  keyboardHidesTabBar: true,
  tabBarBadge: true,
};

const AppTabNavigator = ({}) => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Profile" tabBarOptions={tabBarOptions}>
        <Screen
          name={'Profile'}
          component={ProfileScreen}
          options={{
            tabBarLabel: ({ focused }) => null,
            tabBarIcon: ({ focused }) => {
              const color = focused
                ? commonColors.black
                : commonColors.lightGray;

              return (
                <TabProfileSVG
                  color={color}
                  containerStyles={{ paddingTop: 3 }}
                />
              );
            },
          }}
        />

        <Screen
          name="News"
          component={NewsStackNavigator}
          options={{
            tabBarLabel: ({ focused }) => null,
            tabBarIcon: ({ focused }) => {
              const color = focused
                ? commonColors.black
                : commonColors.lightGray;

              return <TabHomeSVG color={color} />;
            },
            headerShown: false,
          }}
          screenOptions={{}}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppTabNavigator;
