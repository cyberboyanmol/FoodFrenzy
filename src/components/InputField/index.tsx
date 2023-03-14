import React, {forwardRef, useCallback, useState} from 'react';
import {
  View,
  TextInputProps,
  ViewStyle,
  StyleProp,
  TextStyle,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import TextField, {FontSizes, FontWeights} from '../TextField';
import {Colors, Images} from '../../constants';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {setValue, setXAxisValue, setYAxisValue} from '../../utils';

interface InputFieldProps extends TextInputProps {
  title?: string;
  icon?: JSX.Element;
  placeholder?: string;
  isPassword?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  titleProps?: Object;
  [key: string]: any;
}

const InputField = forwardRef<TextInput, InputFieldProps>((props, inputRef) => {
  const {
    title,
    icon,
    placeholder,
    isPassword = false,
    containerStyle,
    inputStyle,
    inputContainerStyle,
    titleProps = {},
    ...restProps
  } = props;

  const [showPassword, setShowPassword] = useState<boolean>(isPassword);
  const toggleShowPassword = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword],
  );

  const animBorder = useSharedValue(0);

  const onFocus = useCallback(() => {
    animBorder.value = withTiming(1);
  }, [animBorder]);
  const onBlur = useCallback(() => {
    animBorder.value = withTiming(0);
  }, [animBorder]);
  const inputContainerExtraStyle = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(
        animBorder.value,
        [0, 1],
        [Colors.border, Colors.primary],
      ),
    };
  });

  return (
    <View style={[containerStyle]}>
      {title && (
        <TextField
          style={styles.title}
          color={Colors.typography_60}
          {...titleProps}>
          {title}
        </TextField>
      )}
      <Animated.View
        style={[
          styles.InputContainerBase,
          inputContainerExtraStyle,
          inputContainerStyle,
        ]}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}

        <TextInput
          onFocus={onFocus}
          onBlur={onBlur}
          ref={inputRef}
          secureTextEntry={showPassword}
          placeholder={placeholder}
          placeholderTextColor={Colors.typography_20}
          {...restProps}
          style={[
            styles.inputBase,
            inputStyle,
            !icon && {paddingLeft: setXAxisValue(20)},
          ]}
        />

        {isPassword && (
          <TouchableOpacity onPress={toggleShowPassword} style={styles.btnEye}>
            {showPassword ? (
              <Image source={Images.EYE_OFF} style={styles.eyeIcon} />
            ) : (
              <Image source={Images.EYE_ON} style={styles.eyeIcon} />
            )}
          </TouchableOpacity>
        )}
      </Animated.View>
    </View>
  );
});

export default React.memo(InputField);

const styles = StyleSheet.create({
  InputContainerBase: {
    height: setYAxisValue(65),
    borderRadius: setValue(10),
    borderColor: Colors.border,
    borderWidth: 1,
    flexDirection: 'row',
  },
  title: {
    marginBottom: setYAxisValue(10),
  },

  inputBase: {
    flex: 1,
    height: '100%',
    paddingRight: setXAxisValue(20),
    fontSize: FontSizes.medium,
    fontFamily: FontWeights[400],
    color: Colors.typography,
    overflow: 'hidden',
  },
  btnEye: {
    position: 'absolute',
    top: setXAxisValue(65 - 12) / 2,
    right: setXAxisValue(20),
  },
  eyeIcon: {
    width: setXAxisValue(18),
    height: setYAxisValue(12),
  },
  iconContainer: {
    height: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
