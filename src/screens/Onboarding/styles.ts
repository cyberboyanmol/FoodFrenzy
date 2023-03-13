import {StyleSheet} from 'react-native';
import {setValue, setXAxisValue, setYAxisValue} from '../../utils';
import {Colors} from '../../constants';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  gradientBg: {
    ...StyleSheet.absoluteFillObject,
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: setXAxisValue(28),
  },
  welcomeTxt: {
    lineHeight: setYAxisValue(40) * 1.28,
  },
  slogan: {
    marginTop: setYAxisValue(20),
  },

  signInWith: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteLine: {
    width: setXAxisValue(84),
    height: 1,
    backgroundColor: Colors.white,
  },
  signInTxt: {
    lineHeight: setYAxisValue(16),
    marginHorizontal: setXAxisValue(15),
  },
  loginWithGroupBtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: setYAxisValue(20),
  },
  loginWithBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: setXAxisValue(139),
    height: setYAxisValue(50),
    borderRadius: setXAxisValue(27),
    backgroundColor: Colors.white,
  },
  brandIcon: {
    height: setValue(28),
    width: setValue(28),
    marginLeft: setXAxisValue(13),
    marginRight: setXAxisValue(10),
  },
  SignupBtn: {
    height: setYAxisValue(54),
    width: setXAxisValue(315),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: setYAxisValue(20),
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: setXAxisValue(27),
  },
  logInBtn: {
    alignSelf: 'flex-end',
    marginLeft: setXAxisValue(10),
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
  },
  signInContainer: {
    margin: setYAxisValue(20),
    // width: setXAxisValue(315),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    align: 'center',
  },
});
