import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    img:{
        height: hp('14%'),
        width:wp('25%'),
        alignSelf:'center',
        resizeMode:'contain',
      },
 
});