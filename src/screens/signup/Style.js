import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  img:{
    height: hp('16%'),
    width:wp('30%'),
    alignSelf:'center',
    marginTop:hp('6%'),
    marginBottom:hp('1%'),
    resizeMode:'contain',
  },
  line:{
    borderWidth:hp('0.3%'),
    width:wp('35%'),
    alignSelf:'center',
    marginTop:hp('3%'),
    borderColor:'#fff'
  },
  logo: {
    height: hp('7.3%'),
    width: wp('14%'),
    resizeMode:'contain',
    alignSelf:'center'
  },
  btn:{
    width:wp('16%'),
    height:hp('9.5%'),
    flexDirection:'column',
    justifyContent:'center',
    resizeMode:'contain',
  },
  btncontainer:{
    alignItems:'center',
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
  },
  usericon:{
    marginTop: hp('6%'),
    marginBottom: hp('2%'),
  }
});