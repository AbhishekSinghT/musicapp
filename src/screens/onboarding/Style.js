import { Dimensions, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    line: {
        borderWidth: hp('0.3%'),
        width: wp('35%'),
        alignSelf: 'center',
        marginTop: hp('3%'),
        borderColor: '#fff',
        marginBottom: hp('6%')
    },
    img: {
        height: hp('30%'),
        width: wp('30%'),
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    titleText: {
        marginTop: hp('10%')
    },
    footer: {
        alignSelf: 'flex-end',
        backgroundColor: '#fff',
        height: hp('12%')
    },
    btn: {
        width: wp('90%'),
        backgroundColor: '#fff',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: hp('50%'),
        marginBottom: hp('2%')
    },
    btnText: {
        color: '#4b99a3',
        fontWeight: '300',
        fontSize: hp('3%'),
        padding: wp('1%'),
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    child: {
        width,
        justifyContent: 'center',
        height: hp('60%')
    },
    text: {
        textAlign: 'center',
        paddingHorizontal: wp('14%'),
        color: '#fff',
        fontWeight: '300',
        fontSize: hp('2.5%')
    },
});