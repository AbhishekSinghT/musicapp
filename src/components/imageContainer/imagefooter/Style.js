import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    squarebox: {
         flex: 1, 
         aspectRatio:2/2, 
         margin:hp('1.5%') ,
         borderColor:'gray',
         borderWidth:hp('0.4%'),
         opacity:0.5,
         backgroundColor:'#fff'
    },
    container: {
        flexDirection: "column",
        padding:hp('1%'), 
    },
    contactline: {
        marginTop:hp('2%'),
       width:wp('30%'),
        height: hp('0.6%'),
        backgroundColor: 'blue',
        alignSelf:'center'
      }


});