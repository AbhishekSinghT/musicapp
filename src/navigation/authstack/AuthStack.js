import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/login/Login';
import SignUp from '../../screens/signup/SignUp';
import Intro from '../../screens/onboarding/Intro';


const Stack = createStackNavigator();
const AuthStack = () => {


  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Intro" component={Intro} />
    </Stack.Navigator>
  );
};

export default AuthStack;