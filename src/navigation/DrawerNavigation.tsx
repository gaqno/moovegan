import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
import TabsNavigator from './TabsNavigation';
import { DrawerItems } from '../components/DrawerItems';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="HomeDrawer"
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <DrawerItems {...props} />}
      >
        <Drawer.Screen name="HomeDrawer" component={TabsNavigator} />
        <Drawer.Screen name="PaymentsDrawer" component={PaymentStack} />
        <Drawer.Screen name="FavoritesDrawer" component={FavoritesStack} />
        <Drawer.Screen name="TicketsDrawer" component={TicketsStack} />
        <Drawer.Screen name="NotificationsDrawer" component={NotificationsStack} />
        <Drawer.Screen name="AdressDrawer" component={AdressStack} />
        <Drawer.Screen name="DataDrawer" component={DataStack} />
        <Drawer.Screen name="HelpDrawer" component={HelpStack} />
        <Drawer.Screen name="ConfigurationDrawer" component={ConfigurationStack} />
        <Drawer.Screen name="SecurityDrawer" component={SecurityStack} />
        <Drawer.Screen name="LogoutDrawer" component={LogoutStack} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigation;
