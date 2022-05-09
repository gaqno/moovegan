import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        component={Login}
        options={{
          headerShown: false}
        } />
      </Stack.Navigator>  
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>  <Stack.Navigator>
        <Stack.Screen name="Recepies" component={Recepies} />
      </Stack.Navigator>  <Stack.Navigator>
        <Stack.Screen name="Configurations" component={Configurations} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

