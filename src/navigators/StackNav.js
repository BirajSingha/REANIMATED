import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Others from '../screeens/Others';
import Details from '../screeens/Details';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Players from '../screeens/Players';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="Others"
            component={Others}
            options={{presentation: 'transparentModal'}}
          />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen
            name="Players"
            component={Players}
            options={{animation: 'slide_from_right'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default StackNav;
