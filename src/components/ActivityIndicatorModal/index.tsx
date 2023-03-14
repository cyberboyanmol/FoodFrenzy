import {Portal} from '@gorhom/portal';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {useIsFocused} from '@react-navigation/native';
import Animated, {FadeIn} from 'react-native-reanimated';
import {Colors} from '../../constants';

const ActivityIndicatorModal = () => {
  const isFocused = useIsFocused();
  if (!isFocused) return null;
  return (
    <Portal>
      <Animated.View entering={FadeIn} style={styles.container}>
        <View style={styles.modalContainer}>
          <ActivityIndicator size={'large'} color={Colors.primary} />
        </View>
      </Animated.View>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 99,
  },
  modalContainer: {
    backgroundColor: Colors.black_75,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ActivityIndicatorModal;
