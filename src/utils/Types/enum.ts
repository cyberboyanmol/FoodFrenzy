// In our Apllication there are two stack native and bottom tabs
// let look into the navigation structure

// AnimatedAppNavigation ->AppNavigation->OnboardingStack
// AnimatedAppNavigation ->AppNavigation->HomSatck

// OnboardingStack->
// Onboarding-done
// Login->done
// SignUp
// OTPVerification
// ResetPassword
// SignUpRole
// SignUpRestaurant

// HomeStack->

// HomeTab
// FoodDetail
// CategoryDetail
// RestaurantDetail
// ReviewList
// WriteReview
// Discover
// UserAddress
// AddAddress
// AddressProvinceAndDistrict
// Checkout
// ChangePassword
// OrderDetail
// RestaurantManagement
// ProductsManagement
// CustomersManagement
// OrdersManagement
// UpdateRestaurantInfo
// CreateProduct
// CreateProductCategory
// ServerConfigurations

// BottomTabs

// HomeTab->
// Home
// Cart
// Orders
// Profile

export enum RootStackScreenName {
  OnboardingStackNavigator = 'OnboardingStackNavigator',
  HomeSatckNavigator = 'HomeSatckNavigator',
}

export enum OnboardingStackScreenName {
  Onboarding = 'Onboarding',
  Login = 'Login',
  SignUp = 'SignUp',
  OTPVerification = 'OTPVerification',
  ResetPassword = 'ResetPassword',
  SignUpRole = 'SignUpRole',
  SignUpRestaurant = 'SignUpRestaurant',
}

export enum HomeStackScreenName {
  HomeTabNavigator = 'HomeTabNavigator',
  FoodDetail = 'FoodDetail',
  CategoryDetail = 'CategoryDetail',
  RestaurantDetail = 'RestaurantDetail',
  ReviewList = 'ReviewList',
  WriteReview = 'WriteReview',
  Discover = 'Discover',
  UserAddress = 'UserAddress',
  AddAddress = 'AddAddress',
  AddressProvinceAndDistrict = 'AddressProvinceAndDistrict',
  Checkout = 'Checkout',
  ChangePassword = 'ChangePassword',
  OrderDetail = 'OrderDetail',
  RestaurantManagement = 'RestaurantManagement',
  ProductsManagement = 'ProductsManagement',
  CustomersManagement = 'CustomersManagement',
  OrdersManagement = 'OrdersManagement',
  UpdateRestaurantInfo = 'UpdateRestaurantInfo',
  CreateProduct = 'CreateProduct',
  CreateProductCategory = 'CreateProductCategory',
  ServerConfigurations = 'ServerConfigurations',
}

export enum HomeTabScreenName {
  Home = 'Home',
  Cart = 'Cart',
  Orders = 'Orders',
  Profile = 'Profile',
}
