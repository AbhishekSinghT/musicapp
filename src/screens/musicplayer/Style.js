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
  item: {
    flexDirection: 'row',
  },
  idtxt: {
    fontSize: hp('2%'),
    marginLeft: wp('2%'),
    color: '#bdb7b7',
  },
  idtxt1: {
    fontSize: hp('2%'),
    marginLeft: wp('2%'),
    color: '#1a1778',
  },
  listcontainer: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('9%'),
    marginBottom: wp('4%'),
  },
  btndot: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('25%'),
    justifyContent: 'space-around',
  },
  container: {
    height: hp('33%'),
    backgroundColor: '#09929c',
  },
  header: {
    width: wp('100%'),
    height: hp('5%'),
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: hp('1%'),
  },
  listsong: {
    flex: 1,
    backgroundColor: '#88d0f2',
    padding: wp('4%'),
  },
  iconbtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: wp('15'),
    alignItems: 'center',
    // marginTop: hp('1%'),
  },
  bottombtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: wp('30%'),
    marginVertical: hp('3%'),
  },
  sliderbar: {
    paddingHorizontal: wp('3%'),
  },
  img: {
    height: hp('6%'),
    width: wp('12%'),
    resizeMode: 'contain',
  },
  img2: {
    height: hp('5%'),
    width: wp('9.5%'),
    resizeMode: 'contain',
  },
  img1: {
    height: hp('4%'),
    width: wp('7.5%'),
    resizeMode: 'contain',
  },
  txt: {
    color: '#030b4a',
    fontSize: hp('2.3%'),
    fontWeight: '900',
  },
  borderline: {
    backgroundColor: '#030b4a',
    width: wp('0.8%'),
    height: hp('3%'),
    marginLeft: wp('2%'),
    marginRight: wp('2%'),
  },
  progressBar: {
    height: hp('2%'),
    flexDirection: 'row',
  },
  playback: {
    aspectRatio: hp('3%') / hp('3%'),
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('50%'),
    backgroundColor: '#86c3c4',
  },
  repeatbtn: {
    aspectRatio: hp('3%') / hp('3%'),
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: hp('0.4%'),
    borderRadius: wp('50%'),
    borderColor: '#86c3c4',
  },
});
