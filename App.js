
import { View, StatusBar } from 'react-native'
import React from 'react'
import Providers from './src/navigation'

const App = () => {
  return (
    <>
    <StatusBar translucent backgroundColor="transparent" />
    <View style={{flex:1}}>
      <Providers/>
    </View>
    </>
  )
}

export default App
