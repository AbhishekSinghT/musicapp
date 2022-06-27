import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  imgContainer: {
    alignSelf: 'center',
    marginTop: hp('7%'),
    height: hp('22%'),
    width: wp('40%'),
    
  },
  img: {
    alignSelf: 'center',
    height: hp('16%'),
    width: wp('28%'),
    resizeMode:'contain',
  },
  inputbox: {
    marginTop: hp('4%')
  },
  btn: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: hp('50%'),
    width: wp('75%'),
    backgroundColor: '#fff',
    flexDirection: 'row',
    margin: hp('1%')
  },
  btnText: {
    color: '#4b99a3',
    fontWeight: '300',
    fontSize: hp('4%'),
    padding: wp('2%')
  },
  footerOr: {
    alignSelf: 'center',
    fontSize: hp('4%'),
    fontWeight: '400',
  },
  footerText: {
    alignSelf: 'center',
    fontSize: hp('2.5%'),
    fontWeight: '400',
  },
  socialLogin: {
    width: wp('50%'),
    height: hp('9%'),
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
    justifyContent: 'space-around',
    alignItems:'center'
  },
  logo: {
    height: hp('7.3%'),
    width: wp('12%'),
    resizeMode:'contain'
  },
  btnSignup:{
    flexDirection:'row',
    justifyContent:'center',
    margin:hp('0.5%')
  },
  signupText:{
    fontWeight:"700",
    fontSize: hp('2.5%'),
    color:'#fff'
  },
  acountText:{
    fontSize: hp('2.5%'), 
  }
});