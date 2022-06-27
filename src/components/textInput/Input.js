import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { styles } from './Style';

 const Input = ({ placeholder, value, onChangeText, error, secureTextEntry,source}) => {
  return (
    <>
      <View style={styles.countainer}>
        <Image style={styles.img} source={source} />
        <TextInput
          onChangeText={onChangeText}
          value={value}
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
      </View>
      <View>
        <Text style={styles.inputText}>{error}</Text>
      </View>
    </>

  );
}

export default Input;
