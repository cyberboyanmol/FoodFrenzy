import React from 'react';
import {Text} from 'react-native';
import {ActivityIndicatorModal, Container} from '../../components';
const SignUp = () => {
  return (
    <Container translucent>
      {/* <ErrorModal /> */}
      <ActivityIndicatorModal />
      {/* <Text>hello from SignUp</Text> */}
    </Container>
  );
};

export default SignUp;
