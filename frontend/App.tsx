import React, { useEffect } from "react";
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { BottomDrawerParamList, RootDrawerParamList, RootStackParamList } from "./navigation/types";
import { extendTheme, NativeBaseProvider, useTheme } from "native-base";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";  
import DrawerMenuContent from "./components/DrawerMenuContent";

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>
type homeScreenProp = DrawerNavigationProp<RootDrawerParamList, 'Home'>;
const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();
// const Bottom = createDrawerNavigator<BottomDrawerParamList>();

const MainStack = () => {
  useTheme
  const [state, setState] = React.useState(false);
  let [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });
  if (!fontsLoaded) { return <AppLoading /> } 
  else {
    return (
      <NativeBaseProvider theme={theme}>
        <NavigationContainer >
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
              <Stack.Screen name="Main" component={MainDrawer} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    )
  }
}
const MainDrawer = () => {
  return (
      <Drawer.Navigator
        drawerContent={props => <DrawerMenuContent {...props} />}>
        <Drawer.Screen name="Pagamentos" component={HomeScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="Favoritos" component={HomeScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="Cupons" component={HomeScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="Notificações" component={HomeScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="Endereços" component={HomeScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="Dados" component={HomeScreen} options={{ headerShown: false }} />
      </Drawer.Navigator>
    )
  }

export default MainStack;

declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
type MyThemeType = typeof theme;
export const theme = extendTheme({ 
  colors: {
    primary: {
      100: '#057659',
      150: 'linear-gradient(173.74deg, rgba(5, 118, 89, 0.98) 9.58%, rgba(2, 90, 68, 0.98) 98.06%);',
      200: '#025A44',
      },
    dark: {
      50: '#C9C9C9',
      100: '#A4A4A4',
      200: '#585858',
      300: '#303030'
    }
  },
  fonts: {
    regular: {
      fontFamily: 'Poppins_400Regular'
    },
    semibold: {
      fontFamily: 'Poppins_700Bold'
    }
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
    'linear-gradient': require('expo-linear-gradient').default,
  } });

