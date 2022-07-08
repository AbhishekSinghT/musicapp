import {View, StatusBar} from 'react-native';
import React from 'react';
import Providers from './src/navigation';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

const App = () => {
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
