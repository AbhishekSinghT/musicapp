import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    squarebox: {
         flex: 1, 
         aspectRatio:2/2, 
         margin:hp('1.5%') ,
         backgroundColor:'#118fa8'
    },
    container: {
        flexDirection: "column",
        padding:hp('1%'), 
    },
    btn:{
        borderRadius:wp('50%'),
        width:wp('25%'),
        margin:hp('2.5%'),
        height:hp('3.7%'),
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    btntxt:{
       color:'#094a80',
       fontSize:hp('2%')
    },
    contactline: {
        marginTop:hp('2%'),
       width:wp('30%'),
        height: hp('0.6%'),
        backgroundColor: 'blue',
        alignSelf:'center'
      }


});