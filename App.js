import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import Login from './Login';
import Map from './Map';
import Table from './Table';
import University from './University';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="University" component={University} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Table" component={Table} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;