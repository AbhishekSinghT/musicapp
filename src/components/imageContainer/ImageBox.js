import { View, Text ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { styles } from './Style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const ImageBox = () => {
  const Square = (props) => {
    return (
      <View
        style={styles.squarebox}
      >
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Icon name={props.name} size={widthPercentageToDP('6%')} color="white" style={{ alignSelf: 'center', opacity: 0.5 }} />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntxt}>
              {props.title}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Square name="camera" title="all photos" />
          <Square name="heart" title="favorites" />
        </View>
        <View style={{ flexDirection: "row" }}>
        <Square name="file" title="albums" />
        <Square name="trash" title="deleted" />
        </View>
      </View>
      <View style={styles.contactline} />
    </>
  )
}

export default ImageBox