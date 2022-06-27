import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './Style';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const Editfav = (props) => {
  return (
    <TouchableOpacity style={[styles.contactuser, props.style]} >
    <Icon name={props.name} size={widthPercentageToDP('3%')} color={props.color} style={{alignSelf:'center'}} />
    </TouchableOpacity>
  )
}

export default Editfav