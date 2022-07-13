import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './Style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TabBtn = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnCircle}>
        <MaterialCommunityIcons
          name={props.name1}
          size={hp('3%')}
          color="#fff"
        />
      </TouchableOpacity>
      <View style={styles.contactline} />
      <TouchableOpacity style={styles.btnCircle} onPress={props.TakePhoto}>
        <MaterialCommunityIcons
          name={props.name2}
          size={hp('3%')}
          color="#fff"
        />
      </TouchableOpacity>
      <View style={styles.contactline} />
      <TouchableOpacity style={styles.btnCircle} onPress={props.ChoosePhoto}>
        <Ionicons
          name={props.name3}
          size={hp('3%')}
          color="#fff"
          //   style={{transform: rotate(45)}}
        />
      </TouchableOpacity>
      <View style={styles.contactline} />
      <TouchableOpacity style={styles.btnCircle}>
        <MaterialCommunityIcons
          name={props.name4}
          size={hp('3%')}
          color="#fff"
        />
      </TouchableOpacity>
      <View style={styles.contactline} />
      <TouchableOpacity style={styles.btnCircle}>
        <Ionicons name={props.name5} size={hp('3%')} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default TabBtn;
