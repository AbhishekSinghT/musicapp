import {View, StatusBar} from 'react-native';
import React from 'react';
import Providers from './src/navigation';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreLogs([
    'ViewPropTypes will be removed',
    'ColorPropType will be removed',
  ]);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{flex: 1}}>
        <Providers />
      </View>
    </>
  );
};

export default App;
