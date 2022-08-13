import React from 'react';
import AppLoading from 'expo-app-loading';
import StackNavigation from './src/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { extendTheme, NativeBaseProvider } from 'native-base';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { AuthProvider } from './src/context/authProvider';
export default (props: any) => {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <AuthProvider>
            <StackNavigation />
          </AuthProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
};

export const theme = extendTheme({
  fontConfig: {
    Poppins: {
      100: { normal: 'Poppins_100Thin' },
      200: { normal: 'Poppins_400Regular' },
      300: { normal: 'Poppins_600SemiBold' },
      400: { normal: 'Poppins_700Bold' },
    },
  },
  fonts: {
    heading: 'Poppins_600SemiBold',
    body: 'Poppins_400Regular',
    mono: 'Poppins_100Thin',
  },
  colors: {
    primary: {
      100: '#057659',
      200: '#025A44',
    },
    dark: {
      50: '#C9C9C9',
      100: '#A4A4A4',
      200: '#585858',
      300: '#303030',
    },
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});
