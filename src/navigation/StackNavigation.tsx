import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, View } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DrawerNavigation from './DrawerNavigation';
import HomeScreen from '../screens/HomeScreen';
import Payments from '../screens/Payments';
import Favorites from '../screens/Favorites';
import Tickets from '../screens/Tickets';
import Notifications from '../screens/Notifications';
import Security from '../screens/Security';
import Logout from '../screens/Logout';
import Data from '../screens/Data';
import Adress from '../screens/Adress';
import Help from '../screens/Help';
import Configurations from '../screens/Configurations';
import { Login } from '../screens/Login';

const Stack = createStackNavigator();
export default () => (
  <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={DrawerNavigation} />
  </Stack.Navigator>
);

export const HomeScreenStack = ({ navigation }: any) => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: true,
        headerTransparent: true,
        headerLeft: () => (
          <View style={{ margin: 10 }}>
            <Icon
              as={MaterialCommunityIcons}
              color="#000"
              name="menu"
              size={25}
              onPress={() => navigation.openDrawer()}
            />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

export function PaymentStack({ navigation }: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Payments"
        component={Payments}
        options={{
          headerShown: true,
          title: 'Pagamentos',
          headerLeft: () => (
            <View style={{ margin: 10 }}>
              <Icon
                as={MaterialCommunityIcons}
                color="#000"
                name="menu"
                size={25}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export function FavoritesStack({ navigation }: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: true,
          title: 'Favoritos',
          headerLeft: () => (
            <View style={{ margin: 10 }}>
              <Icon
                as={MaterialCommunityIcons}
                color="#000"
                name="menu"
                size={25}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export function TicketsStack({ navigation }: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Tickets"
        component={Tickets}
        options={{
          headerShown: true,
          title: 'Cupons',
          headerLeft: () => (
            <View style={{ margin: 10 }}>
              <Icon
                as={MaterialCommunityIcons}
                color="#000"
                name="menu"
                size={25}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export function NotificationsStack({ navigation }: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: true,
          title: 'Notificações',
          headerLeft: () => (
            <View style={{ margin: 10 }}>
              <Icon
                as={MaterialCommunityIcons}
                color="#000"
                name="menu"
                size={25}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export function AdressStack({ navigation }: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Adress"
        component={Adress}
        options={{
          headerShown: true,
          title: 'Endereços',
          headerLeft: () => (
            <View style={{ margin: 10 }}>
              <Icon
                as={MaterialCommunityIcons}
                color="#000"
                name="menu"
                size={25}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export function DataStack({ navigation }: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Data"
        component={Data}
        options={{
          headerShown: true,
          title: 'Endereços',
          headerLeft: () => (
            <View style={{ margin: 10 }}>
              <Icon
                as={MaterialCommunityIcons}
                color="#000"
                name="menu"
                size={25}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export function HelpStack({ navigation }: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Help"
        component={Help}
        options={{
          headerShown: true,
          title: 'Ajuda',
          headerLeft: () => (
            <View style={{ margin: 10 }}>
              <Icon
                as={MaterialCommunityIcons}
                color="#000"
                name="menu"
                size={25}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export function ConfigurationStack({ navigation }: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Configuration"
        component={Configurations}
        options={{
          headerShown: true,
          title: 'Configurações',
          headerLeft: () => (
            <View style={{ margin: 10 }}>
              <Icon
                as={MaterialCommunityIcons}
                color="#000"
                name="menu"
                size={25}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export function SecurityStack({ navigation }: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Security"
        component={Security}
        options={{
          headerShown: true,
          title: 'Segurança',
          headerLeft: () => (
            <View style={{ margin: 10 }}>
              <Icon
                as={MaterialCommunityIcons}
                color="#000"
                name="menu"
                size={25}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export function LogoutStack({ navigation }: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Logout"
        component={Logout}
        options={{
          headerShown: true,
          title: 'Sair',
          headerLeft: () => (
            <View style={{ margin: 10 }}>
              <Icon
                as={MaterialCommunityIcons}
                color="#000"
                name="menu"
                size={25}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
