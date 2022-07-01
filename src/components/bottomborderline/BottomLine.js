import { View, Text } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BottomLine = () => {
    return (
        <View style={{
            backgroundColor: '#0d709e',
            height: hp('1.5%'),
        }} />
    )
}

export default BottomLine