import { View, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './Style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const SearchBox = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Icon name='search' size={hp('3%')} color="#fff" />
        <TextInput
          onChangeText={props.onChangeText}
          value={props.value}
          style={styles.input}
          placeholder={props.placeholder}
        />
      </View>
      <View style={{flexDirection:'row',paddingHorizontal:5}}>
      <View style={[styles.btncontainer1,props.style]}>
        <TouchableOpacity style={styles.btnCircle}>
          <Image style={styles.img} source={props.source1} />
        </TouchableOpacity>
      </View>
      <View style={styles.btncontainer}>
      <TouchableOpacity style={styles.btnCircle}>
          <Image style={styles.img} source={props.source2} />
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default SearchBox