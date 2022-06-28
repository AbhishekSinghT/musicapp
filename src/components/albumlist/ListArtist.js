import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './Style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Heading from '../customHeading/Heading';

const ListArtist = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: "#0d709e", width: wp('2%') }}>
            </View>
            <View style={styles.listcantainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.iconmusic} >
                        <Icon name={props.name} size={wp('5.5%')} color="white" style={{ alignSelf: 'center' }} />
                    </View>
                    <View style={{ marginLeft: wp('3%') }}>
                        <Heading title="John Doe" />
                        <View style={{ flexDirection: 'row',alignItems:'center' }}>
                            <Text style={styles.txt}>{props.albums} </Text>
                            <View style={styles.borderline}>
                            </View>
                            <Text style={styles.txt}>{props.songs}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={props.onPress} style={{ marginRight: hp('2%') }}>
                        <Image style={styles.img} source={props.source} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ListArtist