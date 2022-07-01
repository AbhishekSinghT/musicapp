import Profile from '../../screens/profile/Profile';
import ImageScreen from '../../screens/photo&image/ImageScreen'
import TrackScreen from '../../screens/musictrack/TrackScreen';
import ListContact from '../../screens/contactlist/ListContact';
import React, { useContext } from 'react';
import { Alert } from 'react-native';
import { AuthContext } from '../../navigation/authprovider/AuthProvider'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


function CustomDrawerContent(props) {

  const { user, logout } = useContext(AuthContext)
  const onPress = () => {
    Alert.alert(
      'Log out',
      'Do you want to logout?',
      [{ text: 'Cancel', onPress: () => { return null } },
      { text: 'Confirm', onPress: () => { logout(); } }],
      { cancelable: false })
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={onPress}
      />
    </DrawerContentScrollView>
  );
}



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNav = ({ route, navigation }) => {
  return (
    <>

      <Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="TrackScreen" component={TrackScreen} />
        <Stack.Screen name="ListContact" component={ListContact} />
      </Stack.Navigator>
    </>
  );
};


export default function AppStack() {
  return (
    <Drawer.Navigator useLegacyImplementation
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="ImageScreen" component={ImageScreen} />
      <Drawer.Screen name="TrackScreen" component={TrackScreen} />
      <Drawer.Screen name="ListContact" component={ListContact} />
    </Drawer.Navigator>
  );
}
