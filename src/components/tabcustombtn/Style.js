import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fccb17',
        justifyContent: 'space-between',
        alignItems:'center',
        flex: 1,
        paddingHorizontal:wp('8%'),
    },
    contactline: {
        width: wp('0.5%'),
        height: hp('5%'),
        backgroundColor: '#c29800',
        alignSelf: 'center'
    },
    img:{
        height:hp('10%'),
        width:wp('10%'),
        resizeMode:'contain'
    }


});