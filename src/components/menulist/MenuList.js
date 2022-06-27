import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './Style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MenuList = (props) => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: "#de800d", width: wp('2%') }}>
      </View>
      <View style={styles.listcantainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name={props.name} size={hp('3%')} style={{ marginLeft: hp('2.5%') }} color="#09929c" />
          <Text style={styles.texttitle}>{props.title}</Text>
        </View>
        <TouchableOpacity onPress={props.onPress} style={{ marginRight: hp('2%') }}>
          <Image style={styles.img} source={props.source} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MenuList