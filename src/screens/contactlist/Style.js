import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
   filterbtn: {
      height: hp('8%'),
      flexDirection: 'row',
      paddingHorizontal: wp('2%'),
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   btncontainer: {
      flexDirection: 'row',
      width: wp('50%'),
      justifyContent: 'space-around'
   },
   btn: {
      height: hp('4%'),
      borderRadius: hp('50%'),
      borderWidth: hp('0.3%'),
      paddingHorizontal: wp('5%'),
      justifyContent: 'center',
      borderColor: 'gray'
   },
   icon: {
      height: hp('15%'),
      backgroundColor: '#0d709e'
   },
   listcontainer: {
      flex: 1,
      margin: wp('3.2%'),
   },
   txt: {
      fontSize: hp('2%'),
      color: 'gray',

   },
   activetxt: {
      fontSize: hp('2%'),
      color: '#0d709e',
      fontWeight: '600'
   },
   activebtn: {
      height: hp('4%'),
      borderRadius: hp('50%'),
      borderWidth: hp('0.4%'),
      paddingHorizontal: wp('5%'),
      justifyContent: 'center',
      borderColor: '#0d709e'
   }


});