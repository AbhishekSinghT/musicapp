import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container:{
        marginBottom:hp('1.5%'),
        backgroundColor:'#fff',
        flexDirection:'row',
        height:hp('8%'),
      },
      img:{
        height:hp('8%'),
        width:wp('8%'),
        resizeMode:'contain',
      },
      texttitle:{
        color:'black',
        marginLeft:hp('1.5%'),
        fontSize:hp('3%'),
        fontWeight:'300'
      },
      listcantainer:{
        justifyContent:'space-between', 
        flexDirection: 'row',
        width:wp('100%') ,
        flex:1,
      }
 
});