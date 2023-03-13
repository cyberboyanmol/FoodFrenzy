import React from 'react';
import {Text, TextStyle, StyleProp, StyleSheet} from 'react-native';
import {Colors} from '../../constants';
import {setYAxisValue} from '../../utils';

export const FontWeights = {
  100: 'SofiaPro-UltraLight',
  200: 'SofiaPro-ExtraLight',
  300: 'SofiaPro-Light',
  400: 'SofiaPro-Medium',
  500: 'SofiaPro-Medium',
  600: 'SofiaPro-Medium',
  700: 'SofiaPro-SemiBold',
  800: 'SofiaPro-Bold',
  900: 'SofiaPro-Black',
};
export const FontSizes = {
  normal: setYAxisValue(16),
  small: setYAxisValue(14),
  medium: setYAxisValue(18),
  large: setYAxisValue(20),
  h6: setYAxisValue(24),
  h5: setYAxisValue(28),
  h4: setYAxisValue(32),
  h3: setYAxisValue(36),
  h2: setYAxisValue(40),
  h1: setYAxisValue(46),
};

interface TextFieldProps {
  children: string;
  fontWeight?: keyof typeof FontWeights;
  fontSize?: keyof typeof FontSizes | number;
  color?: string;
  lineHeightRatio?: number;
  lineHeight?: number;
  style?: StyleProp<TextStyle>;
  align?: 'left' | 'right' | 'center' | 'justify';
  [key: string]: any;
}

const TextField: React.FC<TextFieldProps> = ({
  children,
  fontWeight = 400,
  fontSize = 'normal',
  color = Colors.typography,
  lineHeightRatio,
  lineHeight,
  style,
  align = 'left',
  ...restProps
}) => {
  const size: number =
    typeof fontSize === 'number' ? fontSize : FontSizes[fontSize];

  const textStyles = {
    fontFamily: FontWeights[fontWeight],
    color: color,
    fontSize: size,
    ...(lineHeightRatio && {lineHeight: size * lineHeightRatio}),
    ...(lineHeight && {lineHeight}),
    textAlign: align,
  };

  return (
    <Text style={[styles.base, textStyles, style]} {...restProps}>
      {children}
    </Text>
  );
};

export default TextField;

const styles = StyleSheet.create({
  base: {
    color: Colors.typography,
  },
});
