import {View, Text} from 'react-native';
import React from 'react';
import Greeting from '../../components/title/Title';
import DrawerBtn from '../../components/button/DrawerBtn';
import {styles} from './Style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BottomLine from '../../components/bottomborderline/BottomLine';
import TabBtn from '../../components/tabcustombtn/TabBtn';

const Post = ({navigation}) => {
  const SendBtn = () => {
    return (
      <View>
        <Text>Post</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <Greeting name="WRITE " style={styles.title} title="POST" />
        <DrawerBtn onPress={() => navigation.toggleDrawer()} />
      </View>
      <View style={{flex: 1}}></View>
      <View style={{height: hp('10%')}}>
        <TabBtn
          name1="format-color-text"
          name2="camera-outline"
          name3="ios-attach"
          name4="microphone"
          name5="md-settings"
        />
        <BottomLine />
      </View>
    </View>
  );
};

export default Post;
