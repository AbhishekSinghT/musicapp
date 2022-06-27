import { View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { styles } from './Style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const TabBtn = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnCircle}>
            <Image style={styles.img} source={props.source1} />
            </TouchableOpacity>
            <View style={styles.contactline} />
            <TouchableOpacity style={styles.btnCircle}>
            <Image style={styles.img} source={props.source2} />
            </TouchableOpacity>
            <View style={styles.contactline} />
            <TouchableOpacity style={styles.btnCircle}>
            <Image style={styles.img} source={props.source3} />
            </TouchableOpacity>
            <View style={styles.contactline} />
            <TouchableOpacity style={styles.btnCircle}>
            <Image style={styles.img} source={props.source4} />
            </TouchableOpacity>
            <View style={styles.contactline} />
            <TouchableOpacity style={styles.btnCircle}>
            <Image style={styles.img} source={props.source5} />
            </TouchableOpacity>
        </View>
    )
}

export default TabBtn