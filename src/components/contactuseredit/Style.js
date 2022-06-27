import { Dimensions, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    contactuser:{
        justifyContent:'center',
        width: wp('7%'),
        aspectRatio: hp('3%') /  hp('3%'),
        borderRadius:hp('50%'),
      },
});