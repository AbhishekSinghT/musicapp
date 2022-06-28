import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './Style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper'


const ListPlay = () => {
    const Box = (props) => {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <Icon name='play' size={hp('3%')} color="#fff" />
                        <Text style={{
                            color: '#094a80', fontSize: hp('2%'),
                            top: hp('4.5%'), fontWeight: '400'
                        }}> {props.song}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', height: hp('5%') }}>
                        <Text style={{ color: '#094a80', fontSize: hp('2.3%'), fontWeight: '400' }}>
                            {props.title}
                        </Text>
                    </View>
                </View>
            </>

        );
    };
    const Square = (props) => {
        return (
            <View style={styles.slide1}>
                <TouchableOpacity style={{ flex: 1 }}>
                    <Box song={props.song1} title={props.title1} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }}>
                    <Box song={props.song2} title={props.title2} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }}>
                    <Box song={props.song3} title={props.title3} />
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <>
            <View style={{ height: hp('25%') }}>
                <Swiper showsButtons={false}
                    index={1}
                    dotStyle={{ flex: 1 }}
                    activeDotColor={'#1a1778'}
                    containerStyle={{ flex: 1 }}
                    activeDotStyle={{ flex: 1, top: 25, height: 3, }}
                    showsVerticalScrollIndicator={true}
                    dotColor={'transparent'}	>
                    <Square title1='My Playlist' title2='Favorites' title3='Winter' song1='12 tracks' song2='12 tracks' song3='12 tracks' />
                    <Square title1='My Playlist' title2='Favorites' title3='Winter' song1='12 tracks' song2='12 tracks' song3='12 tracks' />
                    <Square title1='My Playlist' title2='Favorites' title3='Winter' song1='12 tracks' song2='12 tracks' song3='12 tracks' />
                </Swiper>
            </View>
        </>
    )
}

export default ListPlay