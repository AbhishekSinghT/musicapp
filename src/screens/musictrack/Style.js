import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'center',
        height:hp('5%'),
        alignItems:'center',
    },
 
});