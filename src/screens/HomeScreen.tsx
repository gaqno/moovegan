import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import type {
  RootDrawerParamList,
  RootStackParamList,
} from '../navigation/types';
import {Button, Center, Icon, Text, View} from 'native-base';
import {CompositeNavigationProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {userApi} from '../features/users/usersApiSlice';

type HomeNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Login'>,
  DrawerNavigationProp<RootDrawerParamList, 'Home'>
>;

const HomeScreen = () => {
  const {data: users, isFetching, refetch} = userApi.useGetProfileQuery();
  return (
    <Center mt={50}>
      <Text>Olá!</Text>
      <Text>{JSON.stringify(users)}</Text>
      <Button onPress={refetch}>Is refetching? {String(isFetching)}</Button>
      <Icon as={MaterialCommunityIcons} name="home" />
    </Center>
  );
};

export default HomeScreen;
