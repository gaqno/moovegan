import React from 'react';
import { StyleSheet } from 'react-native';
import { Center, useDisclose } from 'native-base';
import { LandingPage } from '../components/LandingPage';
import { LoginPopup } from '../components/LoginPopup';

export const Login = ({ navigation }: any) => {
  const { onOpen, isOpen, onClose } = useDisclose();
  return (
    <Center flex={1} bg="primary.200">
      <LandingPage onOpen={onOpen} />
      <LoginPopup isOpen={isOpen} onClose={onClose} navigation={navigation} />
    </Center>
  );
};
