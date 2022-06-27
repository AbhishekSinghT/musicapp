import { TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const DrawerBtn = () => {
  return (
    <>
    <TouchableOpacity style={{width:wp('7.5%'),  aspectRatio: hp('3%') /  hp('3%'),position:'absolute',top:hp('8.5%'),left:hp('2%'),justifyContent:'center',alignItems:'center',borderRadius:150,backgroundColor:'#044b80'}}>
      <Icon name="reorder" size={wp('4%')} color="white" />
    </TouchableOpacity>
    </>
  )
}

export default DrawerBtn