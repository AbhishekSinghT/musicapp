import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './Style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Heading from '../customHeading/Heading';

const ListArtist = (props) => {
    return (
        <>
            <View style={[styles.container, props.style]}>

                <View style={{ backgroundColor: "#0d709e", width: wp('2%'), }} />
                <View style={{ flex: 1 }}>
                    <View style={styles.listcantainer}>
                        <View style={{ width: 30, flex: 1, justifyContent: 'center' }}>
                            <View style={{ height: hp('12%'), flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.iconmusic} >
                                    <Icon name={props.name} size={wp('5.5%')} color="white" style={{ alignSelf: 'center' }} />
                                </View>
                                <View style={{ marginLeft: wp('3%') }}>
                                    <Heading title={props.title} />
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={styles.txt}>{props.albums} </Text>
                                        <View style={[styles.borderline, , props.line]} />
                                        <Text style={styles.txt}>{props.songs}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 10, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={props.onPress} style={{ paddingHorizontal: 10 }}>
                                <Image style={[styles.img,props.logoheight]} source={props.source} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={props.onPress} style={[props.logo]}>
                                <Text
                                    style={props.activestatus}></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.bottom, props.bottomstyle]}>
                        <Text style={styles.txtmessage}>{props.textmessage}</Text>
                    </View>
                </View>

            </View>
        </>
    )
}

export default ListArtist