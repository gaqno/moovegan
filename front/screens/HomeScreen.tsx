import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import type { RootDrawerParamList, RootStackParamList } from '../navigation/types';
import {Center, Flex, Text, View } from 'native-base';
import { CompositeNavigationProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type HomeNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Login'>,
  DrawerNavigationProp<RootDrawerParamList, 'Home'>
  >

const HomeScreen = () => {
  return (
    <>
      <Center flex={1}>
        <Text>Home Screen</Text>
      </Center>
      <Flex alignSelf='center'>
        <Text>Home Screen</Text>
      </Flex>
    </>
  );
};
export default HomeScreen;    