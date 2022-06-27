import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    countainer: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        borderWidth: wp('0.6%'),
        borderRadius: hp('50%'),
        width: wp('75%'),
        borderColor: '#6ee1f0',
        flexDirection: 'row',
        margin: hp('0.2%')
    },
    img: {
        height: hp('5%'),
        width: wp('7%'),
        alignSelf: 'center',
        marginLeft: wp('4%')
    },
    input: {
        height: hp('5%'),
        width: wp('55%'),
        margin: hp('1.5%'),
        padding: hp('0.3%'),
        fontSize: hp('3%')
    },
    inputText: {
        color: '#fff',
        fontSize: hp('2.5%'),
        alignSelf: 'center',
    }

});