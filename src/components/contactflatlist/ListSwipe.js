import { View,  Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import React, { useState } from 'react'
import { styles } from './Style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Heading from '../customHeading/Heading'
import ContactUser from '../contactusericon/ContactUser';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
    {
        id: 1,
        title: 'john Doe',
        email: 'johndeo@site.com',
        status: '1'
    },
    {
        id: 2,
        title: 'john ',
        email: 'johndeo@site.com',
        status: '0'
    },
    {
        id: 3,
        title: ' Doe',
        email: 'johndeo@site.com',
        status: '1'
    },
    {
        id: 4,
        title: 'yoyo',
        email: 'johndeo@site.com',
        status: '0'
    },
    {
        id: 5,
        title: 'jojo',
        email: 'johndeo@site.com',
        status: '1'
    },
    {
        id: 8,
        title: 'toto',
        email: 'johndeo@site.com',
        status: '0'
    },
    {
        id: 6,
        title: 'ramesh',
        email: 'johndeo@site.com',
        status: '1'
    },
    {
        id: 7,
        title: 'prime',
        email: 'johndeo@site.com',
        status: '0'
    },
];


const ListSwipe = () => {
    const [shouldShow, setShouldShow] = useState(true)

    const shouldShowHandler = (index) => {
        console.log(index)
        setShouldShow(index)
    }
    const onPress = (index) => {
        setShouldShow(index !== index)
    }
    
    const handleRemove = (index) => {
        console.log(index)
    }

    return (
        <>
                <View style={{flex:1}}>
                    {DATA.map((Item, index) => {
                        return (
                                <SafeAreaView key={index}>
                                    <View style={styles.item}>
                                        {shouldShow === index ? (
                                            <>
                                                <View style={styles.container}>
                                                    <TouchableOpacity>
                                                        <Icon name='pencil' size={wp('5%')} color="white" style={{ alignSelf: 'center' }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity  >
                                                        <Icon name='heart' size={wp('5%')} color="white" style={{ alignSelf: 'center' }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => handleRemove(index)} >
                                                        <Icon name='trash' size={wp('5%')} color="white" style={{ alignSelf: 'center' }} />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.userinfo1}>
                                                    <TouchableOpacity onPress={onPress}>
                                                        <Heading title={Item.title} />
                                                        <Text style={styles.txt}>{Item.email}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ width: wp('25%'), justifyContent: 'space-evenly',
                                                flexDirection: 'row', alignItems: 'center'}}>
                                                    <Image style={styles.img} source={require('../../assets/images/message.png')} />
                                                    <Text
                                                        style={[
                                                            Item.status == 0 ? styles.offline : styles.none,
                                                            Item.status == 1 ? styles.online : styles.none,
                                                        ]}></Text>
                                                </View>
                                            </>
                                        ) : (
                                            <>
                                                <View style={{ backgroundColor: "#0d709e", width: wp('2%'), }} />
                                                <View style={{ alignSelf: 'center', marginLeft: wp('3%') }}>
                                                    <ContactUser name='user' onPress={() => shouldShowHandler(index)} />
                                                </View>
                                                <View style={styles.userinfo}>
                                                        <Heading title={Item.title} />
                                                        <Text style={styles.txt}>{Item.email}
                                                        </Text>
                                                </View>
                                                <View style={styles.statuscontainer}>
                                                    <Image style={styles.img} source={require('../../assets/images/message.png')} />
                                                    <Text
                                                        style={[
                                                            Item.status == 0 ? styles.offline : styles.none,
                                                            Item.status == 1 ? styles.online : styles.none,
                                                        ]}></Text>
                                                </View>
                                            </>)}
                                    </View>
                                </SafeAreaView>
                        )
                    })}
                </View>
        </>
    )
}

export default ListSwipe


