import React from 'react';
import {View} from 'react-native';
import {setXAxisValue, setValue, setYAxisValue} from '../../utils';
interface PaddingProps {
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  children?: React.ReactNode;
}
const CustomPadding: React.FC<PaddingProps> = ({
  padding = 0,
  paddingBottom = 0,
  paddingHorizontal = 0,
  paddingLeft = 0,
  paddingRight = 0,
  paddingTop = 0,
  paddingVertical = 0,
  children,
}) => {
  const styles = {
    paddingBottom: paddingBottom && setYAxisValue(paddingBottom),
    paddingTop: paddingTop && setYAxisValue(paddingTop),
    paddingLeft: paddingLeft && setXAxisValue(paddingLeft),
    paddingRight: paddingRight && setXAxisValue(paddingRight),
    paddingVertical: paddingVertical && setYAxisValue(paddingVertical),
    paddingHorizontal: paddingHorizontal && setXAxisValue(paddingHorizontal),
    padding: padding && setValue(padding),
  };
  return <View style={styles}>{children}</View>;
};

export default React.memo(CustomPadding);
