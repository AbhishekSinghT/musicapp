import {View, Text} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Progress = props => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#fff',
        top: hp('20%'),
        borderWidth: 2,
        height: hp('20%'),
        width: wp('70%'),
        marginTop: hp('2%'),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <Text
        style={{
          color: '#0d709e',
          fontSize: hp('2%'),
          fontWeight: '900',
        }}>
        {props.text} % Completed!
      </Text>
    </View>
  );
};

export default Progress;
