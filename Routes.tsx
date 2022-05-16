import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./navigation/types";
import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";

const MyStack = createStackNavigator<RootStackParamList>();
const Router = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }} 
        />
        <MyStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
        />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;