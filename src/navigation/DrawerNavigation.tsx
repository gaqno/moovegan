import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  AdressStack,
  DataStack,
  FavoritesStack,
  NotificationsStack,
  PaymentStack,
  TicketsStack,
} from './StackNavigation';
import TabsNavigator from './TabsNavigation';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Profile"
        screenOptions={{ headerShown: false }}
        // drawerContent={(props) => <DrawerItems {...props} />}
      >
        <Drawer.Screen name="HomeDrawer" component={TabsNavigator} />
        <Drawer.Screen name="PaymentsDrawer" component={PaymentStack} />
        <Drawer.Screen name="FavoritesDrawer" component={FavoritesStack} />
        <Drawer.Screen name="TicketsDrawer" component={TicketsStack} />
        <Drawer.Screen name="NotificationsDrawer" component={NotificationsStack} />
        <Drawer.Screen name="AdressDrawer" component={AdressStack} />
        <Drawer.Screen name="DataDrawer" component={DataStack} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigation;
