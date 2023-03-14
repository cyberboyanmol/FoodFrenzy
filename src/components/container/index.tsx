import {StyleSheet, StatusBar, View} from 'react-native';
import React, {FC} from 'react';
import {useSafeAreaInsets, EdgeInsets} from 'react-native-safe-area-context';

interface ContainerProps {
  children: React.ReactNode;
  disableFirst?: boolean;
  translucent?: boolean;
  disableLast?: boolean;
  statusBarProps?: StatusBarProps;
}

interface StatusBarProps {
  backgroundColor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
}

const Container: FC<ContainerProps> = ({
  children,
  disableFirst,
  translucent = false,
  disableLast,
  statusBarProps,
}) => {
  const {bottom, top}: EdgeInsets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      {!disableFirst && <View style={[styles.bar, {height: top}]} />}
      <StatusBar
        translucent={translucent}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        {...statusBarProps}
      />
      <View style={styles.container}>{children}</View>
      {!disableLast && (
        <View style={[styles.bar, {height: bottom > 0 ? bottom : 15}]} />
      )}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bar: {
    width: '100%',
    backgroundColor: '#fff',
  },
});
