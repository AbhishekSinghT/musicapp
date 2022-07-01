import { StyleSheet ,Dimensions} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: 'column',
  },
  maincontainer:{
    flex: 1,
    height: (Dimensions.get('window').height /hp('100%') ) * hp('100%'),
  },
  imgContainer: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end',
    height: hp('30%'),
    padding:hp('4%'),
  },
  img: {
    height: hp('14%'),
    width: wp('24%'),
    resizeMode:'contain',
  },
  inputbox: {
    flex:1,
    marginTop: hp('4%'),
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
    fontSize: hp('2.5%'),
    padding: wp('2%')
  },
  footerOr: {
    alignSelf: 'center',
    fontSize: hp('3%'),
    fontWeight: '400',
  },
  footerText: {
    alignSelf: 'center',
    fontSize: hp('2%'),
    fontWeight: '400',
  },
  socialLogin: {
    width: wp('40%'),
    height: hp('10%'),
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
    justifyContent: 'space-evenly',
    alignItems:'center'
  },
  logo: {
    height: hp('8%'),
    width: wp('8%'),
    resizeMode:'contain'
  },
  btnSignup:{
    height: hp('5%'),
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  signupText:{
    fontWeight:"700",
    fontSize: hp('2%'),
    color:'#fff'
  },
  acountText:{
    fontSize: hp('2%'), 
  },
  bottomline:{
    backgroundColor:'#0d709e',
    height:hp('1.5%'),
  }
});