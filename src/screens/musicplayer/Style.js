import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  title: {
    height: hp('15%'),
    backgroundColor: '#0d709e'
  },
  item: {
    borderWidth: 1,
    flexDirection: 'row',
  },
  container: {
    height: hp('30'),
    backgroundColor: '#09929c',

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: hp('1%')

  },
  listsong: {
    borderWidth: 1,
    flex: 1,
    margin: 10
  },
  iconbtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: wp('15'),
    alignItems: 'center',
    marginVertical: hp('2%')
  },
  bottombtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: wp('35'),
    marginVertical: 5
  },
  sliderbar: {
    paddingHorizontal: wp('5'),
  },
  img: {
    height: hp('6%'),
    width: wp('12%'),
    resizeMode: 'contain'
  },
  img2: {
    height: hp('4.5%'),
    width: wp('9%'),
    resizeMode: 'contain'
  },
  img1: {
    height: hp('3.5%'),
    width: wp('7%'),
    resizeMode: 'contain'
  },
  txt: {
    color: '#030b4a',
    fontSize: hp('2%'),
    fontWeight: '900'
  },

  borderline: {
    backgroundColor: "#030b4a",
    width: wp('0.8%'),
    height: hp('3%'),
    marginLeft: wp('2%'),
    marginRight: wp('2%')
  },



});