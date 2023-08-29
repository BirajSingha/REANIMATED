import React from 'react';
import Home from '../screeens/Home';
import Others from '../screeens/Others';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from '../screeens/Details';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="HomeScreen" component={Home} /> */}
      <Stack.Screen name="Others" component={Others} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default HomeStack;
