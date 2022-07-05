import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    marginBottom: hp('2.7%'),
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: hp('18%'),
  },
  img: {
    height: hp('5%'),
    width: wp('5%'),
    resizeMode: 'contain',
  },
  listcantainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    flex: 1 ,
    backgroundColor:'#d7dedd'
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
  txtmessage:{
    color: '#7a7d7d',
    fontSize: hp('1.8%'),
    fontWeight: '400'
  },
  borderline: {
    backgroundColor: "#094a80",
    width: wp('0.5%'),
    height: hp('3%'),
    marginLeft: wp('2%'),
    marginRight: wp('2%')
  },
  bottom:{
    height:hp('6%'),
    backgroundColor:'#b7bdbd',
    padding:hp('0.7%'),
    justifyContent:'center'
  }

});