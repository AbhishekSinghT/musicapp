import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fccb17',
        flexDirection: 'row',
        alignItems: 'center',
        height: hp('8%'),
    },
    inputBox: {
        borderRadius: wp("50%"),
        width: wp("100%"),
        height: hp('4.5%'),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: wp('3%'),
        backgroundColor: '#bd8c31',
        flex:1,
        marginLeft:wp('3%'),
    },
    btncontainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:wp('25%'),
    },
    img: {
        height: hp('7%'),
        width: wp('7%'),
        resizeMode: 'contain'
    },
    input: {
        flex: 1,
        height: hp('3.5%'),
        width: wp('30%'),
        margin: hp('1.5%'),
        padding: hp('0.3%'),
        fontSize: hp('2.5%'),
        color: '#fff',
    },


});