import type {StackScreenProps} from '@react-navigation/stack';
import {
  OnboardingStackScreenName,
  HomeStackScreenName,
  RootStackScreenName,
  HomeTabScreenName,
} from './enum';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type RootStackParamsList = {
  [RootStackScreenName.OnboardingStackNavigator]: NavigatorScreenParams<OnboardingStackParamsList>;
  [RootStackScreenName.HomeSatckNavigator]: NavigatorScreenParams<HomSatckScreenParamsList>;
};

export type OnboardingStackParamsList = {
  [OnboardingStackScreenName.Onboarding]: undefined;
  [OnboardingStackScreenName.Login]: undefined;
  [OnboardingStackScreenName.SignUp]: undefined;
  [OnboardingStackScreenName.OTPVerification]: undefined;
  [OnboardingStackScreenName.ResetPassword]: undefined;
  [OnboardingStackScreenName.SignUpRole]: undefined;
  [OnboardingStackScreenName.SignUpRestaurant]: undefined;
};

export type HomSatckScreenParamsList = {
  [HomeStackScreenName.HomeTabNavigator]: NavigatorScreenParams<HomeTabScreenParamsList>;
  [HomeStackScreenName.FoodDetail]: undefined;
  [HomeStackScreenName.CategoryDetail]: undefined;
  [HomeStackScreenName.RestaurantDetail]: undefined;
  [HomeStackScreenName.ReviewList]: undefined;
  [HomeStackScreenName.WriteReview]: undefined;
  [HomeStackScreenName.Discover]: undefined;
  [HomeStackScreenName.UserAddress]: undefined;
  [HomeStackScreenName.AddAddress]: undefined;
  [HomeStackScreenName.AddressProvinceAndDistrict]: undefined;
  [HomeStackScreenName.Checkout]: undefined;
  [HomeStackScreenName.ChangePassword]: undefined;
  [HomeStackScreenName.OrderDetail]: undefined;
  [HomeStackScreenName.RestaurantManagement]: undefined;
  [HomeStackScreenName.ProductsManagement]: undefined;
  [HomeStackScreenName.CustomersManagement]: undefined;
  [HomeStackScreenName.OrdersManagement]: undefined;
  [HomeStackScreenName.UpdateRestaurantInfo]: undefined;
  [HomeStackScreenName.CreateProduct]: undefined;
  [HomeStackScreenName.CreateProductCategory]: undefined;
  [HomeStackScreenName.ServerConfigurations]: undefined;
};

export type HomeTabScreenParamsList = {
  [HomeTabScreenName.Home]: undefined;
  [HomeTabScreenName.Cart]: undefined;
  [HomeTabScreenName.Orders]: undefined;
  [HomeTabScreenName.Profile]: undefined;
};
// In react navigation there are two checking
// 1. type check of navigator
// 2. type check of screen

// type checking of Screen
export type RootStackScreenProps<
  RouteName extends keyof RootStackParamsList = RootStackScreenName,
> = StackScreenProps<RootStackParamsList, RouteName>;

export type OnboardingStackScreenProps<
  RouteName extends keyof OnboardingStackParamsList = OnboardingStackScreenName,
> = CompositeScreenProps<
  StackScreenProps<OnboardingStackParamsList, RouteName>,
  RootStackScreenProps<keyof RootStackParamsList>
>;

export type HomeStackScreenProps<
  RouteName extends keyof HomSatckScreenParamsList = HomeStackScreenName,
> = CompositeScreenProps<
  StackScreenProps<HomSatckScreenParamsList, RouteName>,
  RootStackScreenProps<keyof RootStackParamsList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList {}
  }
}

export * from './enum';
