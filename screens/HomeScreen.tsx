import React from 'react';
import Header from '../UI/Header';
import Dashboard from '../UI/Dashboard';
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/types';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <>
        <Header title='Olá, Usuário'/>
        <Dashboard />
    </>
  );
};
export default Home;    