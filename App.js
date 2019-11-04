import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';

import AccountScreen from './src/screen/AccountScreen';
import SignupScreen from './src/screen/SignupScreen';
import SigninScreen from './src/screen/SigninScreen';
import ProductListScreen from './src/screen/ProductListScreen';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    productFlow: createStackNavigator({
      productList: ProductListScreen
    }),
    Accout: AccountScreen
  })
})

export default createAppContainer(switchNavigator);