import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import type {
  RootDrawerParamList,
  RootStackParamList,
} from '../navigation/types';
import {Center, Icon, Text, View} from 'native-base';
import {CompositeNavigationProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useQuery} from '@apollo/client';
import {GET_CLIENTS_QUERY} from '../GraphQL/queries';
import {client} from '../lib/apollo';

type HomeNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Login'>,
  DrawerNavigationProp<RootDrawerParamList, 'Home'>
>;

interface Client {
  id: string;
  name: string;
  photo: object;
}

const HomeScreen = () => {
  const {data} = useQuery<{clients: Client[]}>(GET_CLIENTS_QUERY);
  console.log(data);
  return (
    <Center mt={50}>
      {data?.clients.map((client: any) => {
        return <Text key={client.id}>Olá {client.name}</Text>;
      })}
      <Icon as={MaterialCommunityIcons} name="home" />
    </Center>
  );
};

export default HomeScreen;
