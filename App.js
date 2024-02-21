// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import FST from './FST';
import FSSM from './FSSM';
import Admin from './Admin';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="AppMap" component={HomeScreen} />
        <Stack.Screen name="FST" component={FST} />
        <Stack.Screen name="FSSM" component={FSSM} />
        <Stack.Screen name="Admin" component={Admin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
