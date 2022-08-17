import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerItems } from './components/DrawerItems';
import { Login } from './screens/Login';
import { Configuration } from './screens/Configuration';
import { Text, View } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Notifications } from './screens/Notifications';
import { Payments } from './screens/Payments';
import { Favorites } from './screens/Favorites';
import { Ticket } from './screens/Ticket';
import { Adress } from './screens/Adress';
import { Help } from './screens/Help';
import { Security } from './screens/Security';
import { Logout } from './components/Logout';
import { Store } from './screens/Store';
import { HomeScreen } from './screens/HomeScreen';
import { Details } from './screens/Details';
import { Data } from './screens/Data';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const outlineIcons = (icon: any, focused?: any, color?: string) => (
  <MaterialCommunityIcons
    name={focused ? icon : icon.concat('-outline')}
    color={color || '#FFFFFF'}
    size={25}
  />
);

const DrawerSidebarIcon = (config?: { right: boolean, details?: boolean } | false) => {
  let navigation = useNavigation();
  return (
    <>
      {!config && (
        <MaterialCommunityIcons
          name="menu-open"
          style={{ marginHorizontal: 20 }}
          size={30}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      )}
      <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
        {config && config.right && (outlineIcons('bell', false, 'black'))}
        <View style={{ marginHorizontal: 5 }} />
        {config && config.right && (outlineIcons('basket', false, 'black'))}
      </View>
      {config && config.details && outlineIcons('heart-circle')}
    </>
  );
};

const DrawerSidebarScreen = () => (
  <DrawerContentScrollView>
    <DrawerItems />
  </DrawerContentScrollView>
);

export const Routes = () => {
  let initialRoute = 'Login';
  let isSignedIn = true;
  return (
    <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={MyDrawer} />
    </Stack.Navigator>
  );
};

const MyDrawer = () => (
  <Drawer.Navigator
    screenOptions={{ headerShown: false }}
    drawerContent={() => DrawerSidebarScreen()}>
    <Drawer.Screen name="Drawer" component={HomeTabs} />
  </Drawer.Navigator>
);

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerLeft: () => DrawerSidebarIcon(),
        headerRight: () => DrawerSidebarIcon({ right: true }),
        tabBarLabelStyle: { color: 'white' },
        tabBarStyle: {
          backgroundColor: "#057659",
          paddingBottom: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => outlineIcons('home-variant', focused),
          headerTitle: 'Olá, ${user.nickname}',
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="Loja"
        component={Store}
        options={{
          tabBarIcon: ({ focused }) => outlineIcons('home', focused),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => outlineIcons('heart', focused),
        }}
      />
      <Tab.Group screenOptions={{ tabBarButton: () => null }}>
        <Tab.Screen name="Details" component={Details} />
        <Tab.Screen name="Pagamento" component={Payments} />
        <Tab.Screen name="Cupons" component={Ticket} />
        <Tab.Screen name="Notificações" component={Notifications} />
        <Tab.Screen name="Endereços" component={Adress} />
        <Tab.Screen name="Data" component={Data} />
        <Tab.Screen name="Ajuda" component={Help} />
        <Tab.Screen name="Configurações" component={Configuration} />
        <Tab.Screen name="Segurança" component={Security} />
        <Tab.Screen name="Sair" component={Logout} />
        <Tab.Screen
          name="LogoutTab"
          children={() => <Text className="text-center">A component for ! </Text>}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};
