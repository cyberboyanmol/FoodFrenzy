import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Images} from '../../constants';
import {setValue, setXAxisValue, setYAxisValue} from '../../utils';
import {useNavigation} from '@react-navigation/native';
const BackButton = () => {
  const navigation = useNavigation();
  const GoBack = () => navigation.goBack();

  return (
    <TouchableOpacity onPress={GoBack} style={styles.ButtonBase}>
      <Image source={Images.LEFT_ARROW} style={styles.BackIcon} />
    </TouchableOpacity>
  );
};

export default React.memo(BackButton);

const styles = StyleSheet.create({
  ButtonBase: {
    width: setValue(38),
    height: setValue(38),
    position: 'absolute',
    top: setYAxisValue(53),
    left: setXAxisValue(27),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: setValue(10),
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  BackIcon: {
    width: setValue(5),
    height: setYAxisValue(10),
  },
});
