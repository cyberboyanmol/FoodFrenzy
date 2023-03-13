import React, {useCallback} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Container, TextField} from '../../components';
import styles from './styles';
import {Colors, Images} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  OnboardingStackScreenName,
  OnboardingStackScreenProps,
  setYAxisValue,
} from '../../utils';
const Onboarding: React.FC<
  OnboardingStackScreenProps<OnboardingStackScreenName.Onboarding>
> = ({navigation}) => {
  const {bottom}: EdgeInsets = useSafeAreaInsets();

  const onLoginPress = useCallback(() => {
    navigation.navigate(OnboardingStackScreenName.Login);
  }, [navigation]);

  const onSignUpPress = useCallback(() => {
    navigation.navigate(OnboardingStackScreenName.SignUp);
  }, [navigation]);

  return (
    <Container translucent disableFirst disableLast>
      {/* bgImage */}
      <View style={styles.backgroundContainer}>
        <Image style={styles.bgImage} source={Images.WELCOME_IMAGE} />
        <LinearGradient
          style={styles.gradientBg}
          colors={['rgba(0,0,0,.2)', '#191B2F']}
        />
      </View>
      {/* welcome to foodhub */}
      <View style={styles.welcomeContainer}>
        <TextField style={styles.welcomeTxt} fontSize={'h1'} fontWeight={800}>
          Welcome to
        </TextField>
        <TextField
          color={Colors.primary}
          style={styles.welcomeTxt}
          fontSize={'h1'}
          fontWeight={800}>
          FoodHub
        </TextField>

        <View style={styles.slogan}>
          <TextField color={Colors.typography_80}>
            Your favourite foods delivered
          </TextField>
          <TextField color={Colors.typography_80}>fast at your door.</TextField>
        </View>
      </View>
      {/* bottom Container */}
      <View
        style={[
          //   styles.bottomContainer,
          {paddingBottom: bottom > 0 ? bottom : setYAxisValue(20)},
        ]}>
        <View style={styles.signInWith}>
          <View style={styles.whiteLine} />
          <TextField style={styles.signInTxt} color={Colors.white}>
            Sign in with
          </TextField>
          <View style={styles.whiteLine} />
        </View>

        <View style={styles.loginWithGroupBtn}>
          <TouchableOpacity style={styles.loginWithBtn}>
            <Image style={styles.brandIcon} source={Images.FACEBOOK} />
            <TextField fontSize={13}>FACEBOOK</TextField>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginWithBtn}>
            <Image style={styles.brandIcon} source={Images.GOOGLE} />
            <TextField fontSize={13}>GOOGLE</TextField>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onSignUpPress} style={styles.SignupBtn}>
          <TextField color={Colors.white}>Start with email or phone</TextField>
        </TouchableOpacity>
        <View style={styles.signInContainer}>
          <TextField color={Colors.white}>Already have and account?</TextField>
          <TouchableOpacity onPress={onLoginPress} style={styles.logInBtn}>
            <TextField color={Colors.white}>Sign In</TextField>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default Onboarding;
