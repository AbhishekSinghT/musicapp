import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    img:{
        height: hp('18%'),
        width:wp('33%'),
        alignSelf:'center',
        resizeMode:'contain',
      },
 
});