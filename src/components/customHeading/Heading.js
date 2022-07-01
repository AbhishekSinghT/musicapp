import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Heading = (props) => {
  return (
    <View>
      <Text style={{color:'#1a1778',fontSize:hp('2%'),fontWeight:'900'}}>{props.title}</Text>
    </View>
  )
}

export default Heading