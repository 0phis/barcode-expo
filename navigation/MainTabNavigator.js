import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import {AddButton} from '../components/AddButton';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BarcodeScannerScreen from '../screens/BarcodeScannerScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const BarcodeScanerStack = createStackNavigator({
  BarcodeScaner: BarcodeScannerScreen,
});

BarcodeScanerStack.navigationOptions = {
  tabBarLabel: 'BarcodeScaner',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-barcode-outline${focused ? '' : '-outline'}` : 'md-barcode'}
    />
  ),
};

const BottomTab = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  Adding: {
    screen: () => null, 
    navigationOptions: () => ({
        tabBarIcon: <AddButton /> 
    })
  },
  SettingsStack,
  BarcodeScanerStack,
}, {
  tabBarOptions: {
      showLabel: false, // hide labels
      activeTintColor: '#F8F8F8', // active icon color
      inactiveTintColor: '#586589',  // inactive icon color
      style: {
          backgroundColor: '#171F33' // TabBar background
      }
  }
});


export default BottomTab;
