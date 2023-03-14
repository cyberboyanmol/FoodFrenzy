import {StyleSheet} from 'react-native';
import {setValue, setXAxisValue, setYAxisValue} from '../../utils';
import {Colors} from '../../constants';

export default StyleSheet.create({
  TopDecoratorContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -setYAxisValue(20),
  },
  shape: {
    position: 'absolute',
    height: setValue(181),
    width: setValue(181),
    borderRadius: setValue(90),
    backgroundColor: Colors.primary,
    top: -setYAxisValue(90),
    right: -setYAxisValue(90),
  },

  shape2: {
    top: setValue(-90),
    left: 0,
    backgroundColor: Colors.primary_20,
  },
  shape3: {
    justifyContent: 'center',
    alginItems: 'center',
    top: -setValue(80),
    left: -setValue(90),
    zIndex: -1,
  },
  innerShape: {
    top: setValue(10),
    left: setValue(40),
    height: setValue(90),
    width: setValue(90),
    borderRadius: setValue(45),
    backgroundColor: Colors.white,
  },
  mainContainer: {
    marginTop: setYAxisValue(98),
    paddingHorizontal: setXAxisValue(26),
  },
  inputContainer: {
    marginTop: setYAxisValue(25),
  },
  loginBtn: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: setYAxisValue(30),

    height: setYAxisValue(60),
    width: setXAxisValue(248),
    borderRadius: setYAxisValue(30),
    backgroundColor: Colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signInWith: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: setYAxisValue(60),
    flex: 1,
  },
  whiteLine: {
    width: setXAxisValue(84),
    height: 1,
    backgroundColor: Colors.typography_20,
  },
  signInTxt: {
    lineHeight: setYAxisValue(16),
    marginHorizontal: setXAxisValue(15),
  },
  alreadyHaveAccount: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: setYAxisValue(25),
  },
  loginWithGroupBtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: setYAxisValue(20),
  },
  loginWithBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: setXAxisValue(139),
    height: setYAxisValue(54),
    borderRadius: setValue(27),
    backgroundColor: Colors.white,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3.84,
    elevation: 5,
  },
  brandIcon: {
    width: setValue(28),
    height: setValue(28),
    marginLeft: setXAxisValue(13),
    marginRight: setXAxisValue(10),
  },
});
