import {Portal} from '@gorhom/portal';
import React from 'react';
import {Pressable, StyleSheet, Image, View} from 'react-native';
import Animated from 'react-native-reanimated';

import {Colors, Images} from '../../constants';
import TextField from '../TextField';
import {setValue, setYAxisValue} from '../../utils';
import {useIsFocused} from '@react-navigation/native';
import CustomPadding from '../CustomPadding';

interface ErrorModalProps {
  errorMsg?: string;
  onRequestClose?: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  errorMsg = 'something went wrong try again',
  onRequestClose,
}) => {
  const isFocused = useIsFocused();
  if (!isFocused) return null;
  return (
    <Portal>
      <Animated.View style={styles.container}>
        <View style={styles.modalContainer}>
          <Pressable onPress={onRequestClose} style={styles.backDrop} />
          <View style={styles.ErrorModal}>
            <Image style={styles.closeBtn} source={Images.CLOSE_ICON} />
            <CustomPadding paddingTop={25} />
            <TextField fontSize={'large'} fontWeight={700}>
              Oops
            </TextField>
            <CustomPadding paddingTop={5} />
            <TextField fontSize={15} fontWeight={300}>
              {errorMsg}
            </TextField>
          </View>
        </View>
      </Animated.View>
    </Portal>
  );
};

export default ErrorModal;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 99,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.black_75,
    justifyContent: 'center',
  },
  backDrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -99,
  },
  ErrorModal: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: setYAxisValue(25),
    borderRadius: setValue(8),
    backgroundColor: Colors.white,
  },
  closeBtn: {
    height: setValue(80),
    width: setValue(80),
  },
});
