import {Platform} from 'react-native';
import {Layout} from '../../constants';
const {
  window: {width, height},
  iphoneMaxHeight,
  iphoneMaxWidth,
} = Layout;
export * from './api';
interface CachingObject {
  [key: string]: number;
}
const cachingYValue: CachingObject = {};
const cachingXValue: CachingObject = {};
const cachingValue: CachingObject = {};
export const setYAxisValue = (value: number): number => {
  if (!cachingYValue[`${value}`]) {
    const ratio = height / iphoneMaxHeight;
    const y = ratio > 1 ? value : value * ratio;
    cachingYValue[`${value}`] = y;
    return y;
  } else {
    return cachingYValue[value];
  }
};

export const setValue = (value: number): number => {
  if (!cachingValue[`${value}`]) {
    const ratio = (height * width) / (iphoneMaxHeight * iphoneMaxWidth);
    const xy = ratio >= 1 ? value : value * ratio;
    cachingValue[`${value}`] = xy;
    return xy;
  } else {
    return cachingValue[value];
  }
};

export const setXAxisValue = (value: number): number => {
  if (!cachingXValue[`${value}`]) {
    const ratio = width / iphoneMaxWidth;
    const x = ratio >= 1 ? value : value * ratio;
    cachingXValue[`${value}`] = x;
    return x;
  } else {
    return cachingXValue[value];
  }
};
export const getHeight = () => height;

export const getWidth = () => width;
export const isAndroid = Platform.OS === 'android';
export const isWeb = Platform.OS === 'web';
