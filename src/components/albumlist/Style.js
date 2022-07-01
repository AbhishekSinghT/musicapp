import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    marginBottom: hp('2.7%'),
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: hp('10%'),
  },
  img: {
    height: hp('5%'),
    width: wp('5%'),
    resizeMode: 'contain',
  },
  listcantainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: wp('100%'),
    flex: 1,
    alignItems: 'center'
  },
  iconmusic: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('10%'),
    aspectRatio: hp('3%') / hp('3%'),
    borderRadius: hp('50%'),
    backgroundColor: '#76b4e3',
    marginLeft: hp('2%')
  },
  txt: {
    color: '#094a80',
    fontSize: hp('2%'),
    fontWeight: '400'
  },
  borderline: {
    backgroundColor: "#094a80",
    width: wp('0.5%'),
    height: hp('3%'),
    marginLeft: wp('2%'),
    marginRight: wp('2%')
  }

});