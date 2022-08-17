import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './Routes';
import { AuthProvider } from './contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider value={{ signed: false }}>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
