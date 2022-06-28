import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
      backgroundColor:'#76b4e3',
        flex:1,
        margin:5,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    slide1: {
        padding:5,
        flex: 1,
        flexDirection: 'row'
    },
  
});