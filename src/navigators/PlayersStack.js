import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Players from '../screeens/Players';
import OtherPlayers from '../screeens/OtherPlayers';

const Stack = createNativeStackNavigator();

const PlayersStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PlayersScreen" component={Players} />
      <Stack.Screen name="OtherPlayers" component={OtherPlayers} />
    </Stack.Navigator>
  );
};

export default PlayersStack;

const styles = StyleSheet.create({});
