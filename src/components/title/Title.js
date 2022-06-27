import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Style';

const Greeting = (props) => {
    return (
      <View style={[styles.countainer, props.style]} >
         <Text style={styles.textname}>{props.name}</Text>
        <Text style={styles.texttitle}>{props.title}</Text>
      </View>
    );
}

export default Greeting;

