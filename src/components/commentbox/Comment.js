import {
  View,
  Text,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Comment = porps => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <>
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: hp('1%'),
            borderWidth: 2,
            borderColor: '#e0dfdc',
            width: wp('100%'),
            paddingHorizontal: hp('1%'),
            alignItems: 'center',
            marginBottom: keyboardStatus ? hp('5%') : hp('0.5%'),
          }}>
          <TextInput
            keyboardType="default"
            value={porps.value}
            placeholderTextColor="black"
            autoFocus={true}
            placeholder="Write a comment..."
            multiline={true}
            maxLength={300}
            selectionColor="gray"
            style={{
              backgroundColor: '#e0dfdc',
              borderRadius: hp('5%'),
              width: wp('80%'),
              alignSelf: 'center',
              paddingHorizontal: hp('2%'),
            }}
            onChangeText={porps.onPress}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#0d709e',
              width: wp('100%'),
              borderRadius: hp('10%'),
              height: hp('12%'),
              width: wp('12%'),
              aspectRatio: hp('1%') / hp('1%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="send" size={hp('3%')} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Comment;
