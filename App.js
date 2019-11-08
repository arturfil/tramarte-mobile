import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';

import AccountScreen from './src/screen/AccountScreen';
import SignupScreen from './src/screen/SignupScreen';
import SigninScreen from './src/screen/SigninScreen';
import ProductListScreen from './src/screen/ProductListScreen';
import ProductDetailScreen from './src/screen/ProductDetailScreen';

import {Provider as AuthProvider} from './src/context/AuthContext';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    productFlow: createStackNavigator({
      ProductList: ProductListScreen,
      ProductDetail: ProductDetailScreen
    }),
    Account: AccountScreen
  })
})

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App/>
    </AuthProvider>
  )
}