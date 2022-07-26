import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Commentlist = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          padding: hp('2%'),
        }}>
        <Image
          style={{
            height: hp('5%'),
            width: wp('10%'),
            borderRadius: hp('50%'),
            resizeMode: 'contain',
            aspectRatio: 1 / 1,
          }}
          source={props.source}
        />
        <View style={{width: wp('78%')}}>
          <Text
            style={{
              fontSize: hp('2%'),
              fontWeight: '700',
              marginBottom: hp('0.7%'),
            }}>
            {props.username}
          </Text>
          <Text
            style={{
              fontSize: hp('1.7%'),
            }}>
            {props.usercomment}
          </Text>
        </View>
      </View>
      <Text>{props.heading}</Text>
    </View>
  );
};

export default Commentlist;
