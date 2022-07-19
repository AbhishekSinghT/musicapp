import {View, Image} from 'react-native';
import React from 'react';
import {styles} from './Style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const UserPhoto = ({source}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          height: hp('14%'),
          width: wp('25%'),
          borderRadius: hp('50%'),
          aspectRatio: 1 / 1,
          overflow: 'hidden',
        }}>
        <Image style={styles.img} source={source} />
      </View>
    </View>
  );
};

export default UserPhoto;
