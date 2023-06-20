import React, {useState} from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import {
  ActivityIndicatorModal,
  BackButton,
  Container,
  ErrorModal,
  InputField,
  TextField,
} from '../../components';
import styles from './styles';
import {
  OnboardingStackScreenName,
  OnboardingStackScreenProps,
} from '../../utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors, Images} from '../../constants';

const LogIn: React.FC<
  OnboardingStackScreenProps<OnboardingStackScreenName.Login>
> = () => {
  // navigation.navigate();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const onLoginPress = () => {
    console.log('login successfully');
  };
  const onForgetPassword = () => {
    console.log('forget Password');
  };
  return (
    <Container disableFirst translucent>
      <View style={styles.TopDecoratorContainer}>
        <View style={styles.shape} />
        <View style={[styles.shape, styles.shape2]} />
        <View style={[styles.shape, styles.shape3]}>
          <View style={styles.innerShape} />
        </View>
      </View>
      <BackButton />
      <View style={{flex: 1}} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        scrollEnabled={false}>
        <View style={styles.mainContainer}>
          <TextField fontWeight={800} fontSize={'h4'} lineHeightRatio={1.2}>
            Login
          </TextField>
          <InputField
            onChangeText={setUsername}
            value={username}
            containerStyle={styles.inputContainer}
            title="E-mail"
            placeholder="Your email or phone "
          />
          <InputField
            onChangeText={setPassword}
            value={password}
            containerStyle={styles.inputContainer}
            title="Password"
            isPassword={true}
            placeholder="Enter Your Password "
          />
        </View>
        <View style={styles.alreadyHaveAccount}>
          <TextField
            onPress={onForgetPassword}
            color={Colors.primary}
            fontWeight={700}
            fontSize={'medium'}>
            Forgot password?
          </TextField>
        </View>
        <TouchableOpacity onPress={onLoginPress} style={styles.loginBtn}>
          <TextField color={Colors.white} fontWeight={700}>
            LOGIN
          </TextField>
        </TouchableOpacity>
        <View style={styles.alreadyHaveAccount}>
          <TextField fontSize={'small'} color={Colors.typography_40}>
            Don't have account?{' '}
            <TextField
              onPress={onForgetPassword}
              color={Colors.primary}
              fontSize={'normal'}>
              Sign Up
            </TextField>
          </TextField>
        </View>

        <View style={styles.signInWith}>
          <View style={styles.whiteLine} />
          <TextField
            style={styles.signInTxt}
            fontSize={'small'}
            fontWeight={600}
            color={Colors.typography_80}>
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
      </KeyboardAwareScrollView>
      {/*ActivityIndicator and ErrorModal if any arror occur in future  */}
    </Container>
  );
};

export default LogIn;
