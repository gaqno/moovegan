import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";


// create a "stack"
const MyStack = createNativeStackNavigator();

const App = () => {
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
        component={Home} 
        options={{ headerShown: false }} 
        />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default App;