
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import ProfileScreen from './ProfileScreen'
import ExploreScreen from './ExploreScreen'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


// import NotificationScreen from './NotificationScreen'

// const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#e91e63"
    barStyle={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Details',
        tabBarIcon: ({ color }) => (
          <Icon name="notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Icon name="person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({ color }) => (
          <Icon name="aperture" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>

)
export default MainTabScreen
const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Over view',
      headerLeft: () => {
        <Icon.Button name="ios-menu" size={25}
          backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      }
    }} />
  </HomeStack.Navigator>
)

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
      headerLeft: () => {
        <Icon.Button name="ios-menu" size={25}
          backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      }
    }} />
  </DetailsStack.Navigator>
)
