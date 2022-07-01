import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container:{
        marginBottom:hp('2%'),
        backgroundColor:'#fff',
        flexDirection:'row',
        height:hp('8%'),
      },
      img:{
        height:hp('4.5%'),
        width:wp('8%'),
        resizeMode:'contain',
      },
      texttitle:{
        color:'black',
        marginLeft:hp('1.5%'),
        fontSize:hp('2%'),
        fontWeight:'300'
      },
      listcantainer:{
        justifyContent:'space-between',
        alignItems:"center", 
        flexDirection: 'row',
        width:wp('100%') ,
        flex:1,
      }
 
});