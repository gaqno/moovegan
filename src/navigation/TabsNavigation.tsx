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

const TabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="HomeTab" screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="PaymentsTab"
        component={PaymentStack}
        options={{
          tabBarLabel: 'Imóveis',
          tabBarIcon: ({ focused }) => (
            <Icon
              as={MaterialCommunityIcons}
              name="home"
              color={focused ? 'red.100' : 'gray'}
              size="25px"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{
          tabBarLabel: 'Clientes',
          tabBarIcon: ({ focused }) => (
            <Icon
              as={MaterialCommunityIcons}
              name="account-multiple"
              color={focused ? 'red.100' : 'gray'}
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
              name="home-roof"
              color={focused ? 'red.100' : 'gray'}
              size="25px"
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsTab"
        component={NotificationsStack}
        options={{
          tabBarLabel: 'Serviços',
          tabBarIcon: ({ focused }) => (
            <Icon
              as={MaterialCommunityIcons}
              name="briefcase"
              color={focused ? 'red.100' : 'gray'}
              size="25px"
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsTab"
        component={NotificationsStack}
        options={{
          tabBarLabel: 'Alertas',
          tabBarIcon: ({ focused }) => (
            <Icon
              as={MaterialCommunityIcons}
              name="bell-ring"
              color={focused ? 'red.100' : 'gray'}
              size="25px"
            />
          ),
        }}
      />
      <Tab.Group screenOptions={{ tabBarButton: () => null }}>
        <Tab.Screen name="PaymentsTab" component={PaymentStack} />
        <Tab.Screen name="FavoritesTab" component={FavoritesStack} />
        <Tab.Screen name="TicketsTab" component={TicketsStack} />
        <Tab.Screen name="NotificationsTab" component={NotificationsStack} />
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
