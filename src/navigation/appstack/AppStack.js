import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../screens/profile/Profile';
import ImageScreen from '../../screens/photo&image/ImageScreen'
import TrackScreen from '../../screens/musictrack/TrackScreen';
import ListContact from '../../screens/contactlist/ListContact';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName='Profile' screenOptions={{headerShown: false}}>
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="ImageScreen" component={ImageScreen} />
    <Stack.Screen name="TrackScreen" component={TrackScreen} />
    <Stack.Screen name="ListContact" component={ListContact} />
    
  </Stack.Navigator>
  );
}

export default AppStack;