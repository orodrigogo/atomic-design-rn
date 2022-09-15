import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileSvg from '../assets/icons/profile.svg';
import SearchSvg from '../assets/icons/search.svg';
import VideoSvg from '../assets/icons/video.svg';
import HomeSvg from '../assets/icons/home.svg';
import BagSvg from '../assets/icons/bag.svg';

import { Feed } from '../pages/Feed';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        showLabel: false
      }}>
      <AppTab.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarIcon: (() => (
            <HomeSvg />
          ))
        }}
      />
      <AppTab.Screen
        name="Search"
        component={Feed}
        options={{
          tabBarIcon: (() => (
            <SearchSvg />
          ))
        }}
      />
      <AppTab.Screen
        name="New"
        component={Feed}
        options={{
          tabBarIcon: (() => (
            <VideoSvg />
          ))
        }}
      />
      <AppTab.Screen
        name="Favorite"
        component={Feed}
        options={{
          tabBarIcon: (() => (
            <BagSvg />
          ))
        }}
      />
      <AppTab.Screen
        name="Profile"
        component={Feed}
        options={{
          tabBarIcon: (() => (
            <ProfileSvg />
          ))
        }}
      />
    </AppTab.Navigator>
  )
}

export default AuthRoutes;