import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    countainer:{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'flex-end',
    },
    textname:{
        color:'#fff',
        fontSize: hp('3.3%'),
        fontWeight:'300',
        marginBottom:hp('2%')
    },
    texttitle:{
        color:'#fff',
        fontSize: hp('3.3%'),
        fontWeight:'900',
        marginBottom:hp('2%')

    },
 
});