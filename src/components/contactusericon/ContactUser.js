import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './Style';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const ContactUser = (props) => {
  return (
    <>
    <TouchableOpacity style={styles.contactuser} >
    <Icon name={props.name} size={widthPercentageToDP('6%')} color="white" style={{alignSelf:'center'}} />
    </TouchableOpacity>
    </>
  )
}

export default ContactUser