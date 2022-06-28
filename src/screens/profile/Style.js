import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#88d0f2',
  },
  profilecontaine: {
    backgroundColor: '#09929c',
    height: hp('27%'),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: hp('0.3%'),
  },
  userinfo: {
    flexDirection: 'row',
    margin: hp('0.3%'),
    width: wp('65%'),
  },
  userinfotext: {
    fontSize: hp('2.2%'),
    color: '#fff',
    fontWeight: '300',
    marginLeft: hp('2%'),
  },
  userinfoname: {
    marginLeft: hp('2%'),
    fontSize: hp('2.2%'),
    color: '#fff',
    fontWeight: '900'
  },
  btnpre: {
    borderWidth: wp('0.6%'),
    height: hp('3.5%'),
    justifyContent: 'center',
    borderRadius: hp('50%'),
    borderColor: '#47dded',
    paddingHorizontal: hp('1%'),
  },
  btncontainer: {
    flexDirection: 'row',
    marginTop: hp('2%')
  },
  btntext: {
    color: '#47dded',
    fontSize: hp('2%'),
  },
  btnedit: {
    borderWidth: wp('0.6%'),
    height: hp('3.5%'),
    justifyContent: 'center',
    borderRadius: hp('50%'),
    borderColor: '#47dded',
    paddingHorizontal: hp('1%'),
    marginLeft: hp('1%')
  },
  footer: {
    margin: hp('2.5%'),
  },
  contact: {
    backgroundColor: '#bbe8f0',
    flex: 1,
    marginBottom: hp('3%'),
    justifyContent: 'space-between'
  },
  favContact: {
    flexDirection: 'row',
    flex:1,
    alignItems: 'center',
    marginBottom: hp('2.5%'),
  },
  contactline: {
    flex: 1,
    height: hp('0.4%'),
    backgroundColor: '#de800d'
  }
});