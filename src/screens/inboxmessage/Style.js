import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container:{
    flex:1
  },
  header:{
     height: hp('15%'), 
     backgroundColor: '#0d709e' 
    },
    offline: {
      width: wp('1.5%'),
      height: hp('1.5%'),
      borderRadius: wp('50%'),
      aspectRatio: 1 / 1,
      backgroundColor: 'red',
  },
  online: {
      width: wp('1.5%'),
      height: hp('1.5%'),
      borderRadius: wp('50%'),
      aspectRatio: 1 / 1,
      backgroundColor: 'green',
  },
});