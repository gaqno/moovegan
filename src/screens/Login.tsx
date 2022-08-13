import React from 'react';
import { StyleSheet } from 'react-native';
import { Center, useDisclose } from 'native-base';
import { LandingPage } from '../components/LandingPage';
import { LoginPopup } from '../components/LoginPopup';

const Login = ({ navigation }: any) => {
  const { onOpen, isOpen, onClose } = useDisclose();
  return (
    <Center flex={1} bg="primary.200">
      <LandingPage onOpen={onOpen} />
      <LoginPopup isOpen={isOpen} onClose={onClose} navigation={navigation} />
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#075E47',
  },
  form: {
    paddingTop: 50,
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
});
export default Login;
