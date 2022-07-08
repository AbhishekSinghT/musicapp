import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DrawerBtn = props => {
  return (
    <>
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          width: wp(9),
          aspectRatio: hp(2) / hp(2),
          position: 'absolute',
          top: hp(9),
          left: hp(2),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: hp('50%'),
          backgroundColor: '#044b80',
        }}>
        <Icon name="reorder" size={wp(5)} color="white" />
      </TouchableOpacity>
    </>
  );
};

export default DrawerBtn;
