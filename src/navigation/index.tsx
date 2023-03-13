import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationConfig} from './NavigationConfig';
import {RootStackParamsList, RootStackScreenName} from '../utils';
import OnboardingStackNavigator from './OnboardingStackNavigator';

const RootStack = createStackNavigator<RootStackParamsList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={RootStackScreenName.OnboardingStackNavigator}
        screenOptions={NavigationConfig}>
        <RootStack.Screen
          name={RootStackScreenName.OnboardingStackNavigator}
          component={OnboardingStackNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
