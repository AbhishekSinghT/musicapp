import { View, Image } from 'react-native'
import React from 'react'
import { styles } from './Style'

const UserPhoto = ({source}) => {
  return (
    <View>
     <Image style={styles.img} source={source} />
    </View>
  )
}

export default UserPhoto