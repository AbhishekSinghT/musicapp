import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  title: {
    height: hp('15%'),
    backgroundColor: '#0d709e',
  },
  container: {
    backgroundColor: '#09929c',
    height: hp('28%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCircle: {
    aspectRatio: hp('3%') / hp('3%'),
    height: hp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('50%'),
    backgroundColor: '#fff',
    paddingHorizontal: hp('2%'),
  },
  headline: {
    flexDirection: 'row',
    marginTop: hp('3%'),
    alignItems: 'center',
    height: hp('6%'),
  },
  headtxt: {
    fontSize: hp('2.3%'),
    fontWeight: '900',
    color: '#fff',
    marginLeft: hp('1%'),
  },
  addtxt: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#0d709e',
    fontSize: hp('2%'),
  },
  btnsend: {
    position: 'absolute',
    top: hp('9'),
    right: hp('2'),
  },
  imgcircle: {
    overflow: 'hidden',
    aspectRatio: hp('3%') / hp('3%'),
    height: hp('15%'),
    borderRadius: wp('50%'),
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  txtinput: {
    fontSize: hp('2.3%'),
    fontWeight: '900',
    color: '#fff',
    width: wp('90%'),
    paddingHorizontal: wp('1%'),
    textAlign: 'center',
  },
  postinput: {
    fontSize: hp('2.3%'),
    fontWeight: '400',
    color: 'black',
    width: wp('100%'),
    height: hp('30%'),
    textAlignVertical: 'top',
  },
});
