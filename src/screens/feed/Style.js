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
  nametxt: {
    fontSize: hp('2%'),
    fontWeight: '900',
    color: '#044b80',
  },
  posthead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: hp('8%'),
    alignItems: 'center',
    backgroundColor: '#cbcbd4',
    paddingHorizontal: hp('1.5%'),
  },
  postfooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('1.5%'),
  },
  btnfooter: {
    flexDirection: 'row',
    paddingHorizontal: hp('0.5%'),
    alignItems: 'center',
  },
  headingtxt: {
    fontSize: hp('2%'),
    fontWeight: '900',
    color: '#044b80',
    paddingVertical: hp('1.5%'),
  },
  posttxt: {
    fontSize: hp('1.8%'),
    fontWeight: '400',
    color: '#044b80',
    paddingVertical: hp('1.5%'),
  },
});
