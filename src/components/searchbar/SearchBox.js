import { View, TextInput,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './Style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const SearchBox = ({onChangeText,placeholder,value,source1,source2}) => {

    return (
        <View style={styles.container}>
          <View style={styles.inputBox}>
          <Icon name='search' size={hp('3%')} color="#fff" />
          <TextInput
          onChangeText={onChangeText}
          value={value}
          style={styles.input}
          placeholder={placeholder}
        />
          </View>
          <View style={styles.btncontainer}>
          <TouchableOpacity style={styles.btnCircle}>
            <Image style={styles.img} source={source1} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCircle}>
            <Image style={styles.img} source={source2} />
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchBox