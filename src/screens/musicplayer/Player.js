import { View, Image, TouchableOpacity, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Greeting from '../../components/title/Title'
import DrawerBtn from '../../components/button/DrawerBtn'
import { Slider } from '@miblanchard/react-native-slider';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './Style';
import BottomLine from '../../components/bottomborderline/BottomLine';
import Tracklist from '../../components/songlist/Tracklist';
import TrackPlayer, {
    Capability,
    Event,
    RepeatMode,
    State,
    usePlaybackState,
    useProgress,
    useTrackPlayerEvents,
} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/FontAwesome';
import { songs } from '../../model/data';


const Item = ({ title,id}) => (
    <View style={styles.item}>
         <Text style={styles.Id}>{id}</Text>
      <Text style={styles.titletxt}>{title}</Text>
    </View>
  );


const Player = () => {
    const playbackstate = usePlaybackState();
    const progress = useProgress();

    const renderItem = ({ item }) => (
        <Item title={item.title} id={item.id} />
      );

    const togglePlayback = async (playbackstate) => {
        const currentTrack = await TrackPlayer.getCurrentTrack([]);

        if (currentTrack !== null) {
            console.log(playbackstate, State.Ready)
            if (playbackstate == 2) {
                await TrackPlayer.pause();
                console.log('STOP');
            } else {
                await TrackPlayer.play();
            }
        }
    }

    const setUpTrackPlayer = async () => {
        try {
            await TrackPlayer.setupPlayer();
            await TrackPlayer.add(songs);
            console.log('Tracks added');
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        TrackPlayer.updateOptions({
            stopWithApp: false,
            capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
            compactCapabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE,
            ],
        });
        setUpTrackPlayer();
        return () => TrackPlayer.destroy();
    }, []);

    return (
        <>
            <View style={{ flex: 1 }}>
                <View>
                    <Greeting name='MUSIC ' style={styles.title} title='PLAYER' />
                    <DrawerBtn onPress={() => navigation.toggleDrawer()} />
                </View>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.txt}>{songs.title}</Text>
                        <View style={styles.borderline} />
                        <Text style={styles.txt}>{songs.artist}</Text>
                    </View>
                    <View style={styles.iconbtn}>
                        <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
                            <Image style={styles.img1} source={require('../../assets/images/next.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.img2} source={require('../../assets/images/skip.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => togglePlayback(playbackstate)}>
                            <Icon name={playbackstate === State.Playing ? 'pause' : 'play'} size={hp('3%')} color="#de800d" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.img2} source={require('../../assets/images/skip1.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
                            <Image style={styles.img1} source={require('../../assets/images/next1.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottombtn}>
                        <TouchableOpacity>
                            <Image style={styles.img1} source={require('../../assets/images/favsong.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.img1} source={require('../../assets/images/repeat.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.img1} source={require('../../assets/images/randomplay.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sliderbar}>
                        <Slider
                            value={progress.position}
                            thumbTintColor='#fccb17'
                            maximumValue={progress.duration}
                            minimumValue={0}
                            minimumTrackTintColor="#fff"
                            maximumTrackTintColor="#fff"
                            onSlidingComplete={async (value) => {
                                await TrackPlayer.seekTo(value);
                            }}
                        />
                    </View>
                </View>
                <View style={{ backgroundColor: '#fff', height: hp('0.35%') }} />
                <View style={styles.listsong} >
                    <FlatList
                        data={songs}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <BottomLine />
            </View>

        </>
    )
}

export default Player




