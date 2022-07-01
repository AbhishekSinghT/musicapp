import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row', 
        width: wp('54%'), 
        backgroundColor: '#fccb17', 
        justifyContent: 'space-evenly', 
        alignItems: 'center' ,
        
    },
    item: {
        height: hp('11%'),
        marginBottom: wp('3%'),
        flexDirection: 'row',
        backgroundColor: '#e0e0e0',
    },
    txt: {
        fontSize: hp('1.7%'),
        color: 'black'
    },
    offline: {
        width: wp('3.5%'),
        height: hp('3.5%'),
        borderRadius: wp('50%'),
        aspectRatio: 1 / 1,
        backgroundColor: 'red',
    },
    online: {
        width: wp('3.5%'),
        height: hp('3.5%'),
        borderRadius: wp('50%'),
        aspectRatio: 1 / 1,
        backgroundColor: 'green',
    },
    img: {
        width: wp('8%'),
        height: hp('8%'),
        resizeMode: 'contain'
    },
    statuscontainer: {
        width: wp('25%'),
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
    },
    userinfo: {
        width: wp('48%'),
        justifyContent: 'center',
        marginLeft: wp('5%')
    },
    userinfo1: {
        width: wp('30%'),
        justifyContent: 'center',
        marginLeft: wp('4%')
    }


});