import React, {useRef} from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const RowSheet = props => {
  return (
    <>
      <View
        style={{
          borderBottomWidth: hp('0.1%'),
          borderColor: '#cbcfc6',
          justifyContent: 'center',
          alignItems: 'center',
          height: hp('10%'),
        }}>
        <Text style={{fontSize: hp('2.2%'), fontWeight: '500'}}>
          {props.album}
        </Text>
        <Text style={{fontSize: hp('1.8%')}}>{props.artist}</Text>
      </View>
      <View style={{flex: 1, padding: hp('2.5%')}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: hp('3%'),
          }}>
          <MaterialIcons name="next-plan" size={hp('3.5%')} color="#5b5e55" />
          <Text style={{fontSize: hp('2%'), marginLeft: wp('3%')}}>
            Play Next
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: hp('3%'),
          }}>
          <MaterialIcons name="watch-later" size={hp('3.5%')} color="#5b5e55" />
          <Text style={{fontSize: hp('2%'), marginLeft: wp('3%')}}>
            Play Later
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: hp('3%'),
          }}>
          <Ionicons name="md-heart" size={hp('3.5%')} color="#5b5e55" />
          <Text style={{fontSize: hp('2%'), marginLeft: wp('3%')}}>
            Add To Favourites
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: hp('3%'),
          }}>
          <MaterialCommunityIcons
            name="playlist-plus"
            size={hp('3.5%')}
            color="#5b5e55"
          />
          <Text style={{fontSize: hp('2%'), marginLeft: wp('3%')}}>
            Add To Playlist
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: hp('3%'),
          }}>
          <MaterialCommunityIcons
            name="share"
            size={hp('3.5%')}
            color="#5b5e55"
          />
          <Text style={{fontSize: hp('2%'), marginLeft: wp('3%')}}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: hp('3%'),
          }}>
          <MaterialCommunityIcons
            name="account-box"
            size={hp('4%')}
            color="#5b5e55"
          />
          <Text style={{fontSize: hp('2%'), marginLeft: wp('3%')}}>
            Album: {props.album}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: hp('3%'),
          }}>
          <MaterialCommunityIcons
            name="album"
            size={hp('4%')}
            color="#5b5e55"
          />
          <Text style={{fontSize: hp('2%'), marginLeft: wp('3%')}}>
            Artist: {props.artist}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default RowSheet;
