import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {Container} from '../../components';
import {Images} from '../../constants';
const Loading = () => {
  return (
    <Container
      translucent={true}
      disableFirst
      disableLast
      statusBarProps={{barStyle: 'light-content'}}>
      <View style={styles.container}>
        <Image source={Images.LOADING_IMAGE} style={styles.image} />
      </View>
    </Container>
  );
};

export default Loading;
