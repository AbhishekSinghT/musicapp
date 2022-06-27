import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const ImgFooter = () => {
    const Square = (props) => {
        return (
            <View style={styles.squarebox}>
                <View style={{ justifyContent:'center',alignItems:'center',flex: 1 }}>
                    <Icon name={props.name} size={widthPercentageToDP('6%')} color="gray" style={{ alignSelf: 'center', opacity: 0.5 }} />
                </View>
            </View>
        );
    };
    return (
        <>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Square name="camera" />
                    <Square name="camera" />
                    <Square name="camera" />
                    <Square name="camera" />
                    <Square name="camera" />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Square name="camera" />
                    <Square name="camera" />
                    <Square name="camera" />
                    <Square name="camera" />
                    <Square name="camera" />
                </View>
            </View>
        </>
    )
}

export default ImgFooter