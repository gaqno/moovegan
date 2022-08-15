import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Text } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  AdressStack,
  ConfigurationStack,
  DataStack,
  FavoritesStack,
  HelpStack,
  LogoutStack,
  NotificationsStack,
  PaymentStack,
  SecurityStack,
  TicketsStack,
} from './StackNavigation';

const Tab = createBottomTabNavigator();

const TabsNavigator = (props: any) => {
  return (
    <Tab.Navigator initialRouteName="HomeTab" screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeTab"
        component={PaymentStack}
        options={{
          tabBarLabel: `Olá, ${props}`,
          tabBarIcon: ({ focused }) => (
            <Icon
              as={MaterialCommunityIcons}
              name={focused ? 'home' : 'home-outline'}
              size="25px"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ focused }) => (
            <Icon
              as={MaterialCommunityIcons}
              name={focused ? 'cards-heart' : 'cards-heart-outline'}
              size="25px"
            />
          ),
        }}
      />
      <Tab.Screen
        name="TicketsTab"
        component={TicketsStack}
        options={{
          tabBarLabel: 'Cupons',
          tabBarIcon: ({ focused }) => (
            <Icon
              as={MaterialCommunityIcons}
              name={focused ? 'ticket' : 'ticket-outline'}
              size="25px"
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsTab"
        component={NotificationsStack}
        options={{
          tabBarLabel: 'Notificações',
          tabBarIcon: ({ focused }) => (
            <Icon
              as={MaterialCommunityIcons}
              name={focused ? 'bell' : 'bell-outline'}
              size="25px"
            />
          ),
        }}
      />

      <Tab.Group screenOptions={{ tabBarButton: () => null }}>
        <Tab.Screen name="FavoritesTab" component={FavoritesStack} />
        <Tab.Screen name="AdressTab" component={AdressStack} />
        <Tab.Screen name="DataTab" component={DataStack} />
        <Tab.Screen name="HelpTab" component={HelpStack} />
        <Tab.Screen name="ConfigurationTab" component={ConfigurationStack} />
        <Tab.Screen name="SecurityTab" component={SecurityStack} />
        <Tab.Screen name="LogoutTab" component={LogoutStack} />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default TabsNavigator;
