import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  OnboardingStackParamsList,
  OnboardingStackScreenName,
  RootStackScreenName,
  RootStackScreenProps,
} from '../utils';
import {NavigationConfig} from './NavigationConfig';
import {LogIn, Onboarding, SignUp} from '../screens';

const OnboardingStack = createStackNavigator<OnboardingStackParamsList>();

const OnboardingStackNavigator: React.FC<
  RootStackScreenProps<RootStackScreenName.OnboardingStackNavigator>
> = () => {
  return (
    <OnboardingStack.Navigator
      initialRouteName={OnboardingStackScreenName.Onboarding}
      screenOptions={NavigationConfig}>
      <OnboardingStack.Screen
        name={OnboardingStackScreenName.Onboarding}
        component={Onboarding}
      />
      <OnboardingStack.Screen
        name={OnboardingStackScreenName.Login}
        component={LogIn}
      />
      <OnboardingStack.Screen
        name={OnboardingStackScreenName.SignUp}
        component={SignUp}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingStackNavigator;
