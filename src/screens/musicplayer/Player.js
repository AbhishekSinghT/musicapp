import {
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  Animated,
  Dimensions,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import React, {useState, useEffect, useRef} from 'react';
import Greeting from '../../components/title/Title';
import DrawerBtn from '../../components/button/DrawerBtn';
import Slider from '@react-native-community/slider';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from './Style';
import BottomLine from '../../components/bottomborderline/BottomLine';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {songs} from '../../model/data';
import RowSheet from '../../components/bottomRBsheet/Rowsheet';

const setupPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
      compactCapabilities: [Capability.Play],
    });
    await TrackPlayer.add(songs);
  } catch (error) {
    console.log(error);
  }
};

const togglePlayBack = async playBackState => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  console.log(playBackState, State.Paused);
  if (currentTrack != null) {
    if (playBackState == State.Playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  }
};

const Player = ({navigation}) => {
  const playBackState = usePlaybackState();
  const progress = useProgress();
  const [repeatMode, setRepeatMode] = useState('off');
  const [trackTitle, setTrackTitle] = useState();
  const [trackArtist, setTrackArtist] = useState();
  const [trackname, setTrackName] = useState();
  const [tracksinger, setTrackSinger] = useState();
  const Sheet = useRef(null);

  const changeRepeatMode = () => {
    if (repeatMode == 'off') {
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setRepeatMode('track');
    }

    if (repeatMode == 'track') {
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setRepeatMode('repeat');
    }

    if (repeatMode == 'repeat') {
      TrackPlayer.setRepeatMode(RepeatMode.Off);
      setRepeatMode('off');
    }
  };

  const repeatIcon = () => {
    if (repeatMode == 'off') {
      return 'repeat-off';
    }

    if (repeatMode == 'track') {
      return 'repeat-once';
    }

    if (repeatMode == 'repeat') {
      return 'repeat';
    }
  };

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
      if (event.nextTrack == null) {
        await TrackPlayer.stop();
      } else {
        const track = await TrackPlayer.getTrack(event.nextTrack);
        const {title, artist} = track;
        setTrackTitle(title);
        setTrackArtist(artist);
      }
    }
  });
  const sheetOpen = async index => {
    Sheet.current.open();
    const track = await TrackPlayer.getTrack(index);
    const {title, artist} = track;
    setTrackName(title);
    setTrackSinger(artist);
  };

  const skipToNext = () => {
    TrackPlayer.skipToNext();
  };

  const skipToPrevious = async () => {
    TrackPlayer.skipToPrevious();
    await TrackPlayer.play();
  };
  const JumpForward = () => {
    (async () => {
      let position = await TrackPlayer.getPosition();
      await TrackPlayer.seekTo(position + 10);
    })();
  };
  const JumpBackward = () => {
    (async () => {
      let position = await TrackPlayer.getPosition();
      await TrackPlayer.seekTo(position - 10);
    })();
  };
  const skipTo = async index => {
    await TrackPlayer.skip(index);
    await TrackPlayer.play();
    console.log(index);
  };

  useEffect(() => {
    setupPlayer({});
    return async () => {
      await TrackPlayer.destroy();
    };
  }, []);

  return (
    <>
      <View style={{flex: 1}}>
        <View>
          <Greeting name="MUSIC " style={styles.title} title="PLAYER" />
          <DrawerBtn onPress={() => navigation.toggleDrawer()} />
        </View>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.txt}>{trackArtist}</Text>
            <View style={styles.borderline} />
            <Text style={styles.txt}>{trackTitle}</Text>
          </View>
          <View style={styles.iconbtn}>
            <TouchableOpacity onPress={skipToPrevious}>
              <Image
                style={styles.img1}
                source={require('../../assets/images/next.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={JumpBackward}>
              <Image
                style={styles.img2}
                source={require('../../assets/images/skip.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.playback}
              onPress={() => togglePlayBack(playBackState)}>
              <Ionicons
                name={
                  playBackState === State.Playing
                    ? 'ios-pause-outline'
                    : 'md-play-outline'
                }
                size={hp('5%')}
                color="#fff"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={JumpForward}>
              <Image
                style={styles.img2}
                source={require('../../assets/images/skip1.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={skipToNext}>
              <Image
                style={styles.img1}
                source={require('../../assets/images/next1.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottombtn}>
            <TouchableOpacity style={styles.repeatbtn}>
              <Ionicons name="heart-outline" size={hp('3%')} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={changeRepeatMode}
              style={styles.repeatbtn}>
              <MaterialCommunityIcons
                name={`${repeatIcon()}`}
                size={hp('3%')}
                color={repeatMode !== 'off' ? '#fff' : '#fff'}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.repeatbtn}>
              <Ionicons name="shuffle" size={hp('3%')} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.sliderbar}>
            <Slider
              style={styles.progressBar}
              value={progress.position}
              thumbTintColor="#fccb17"
              maximumValue={progress.duration}
              minimumValue={0}
              minimumTrackTintColor="#fff"
              maximumTrackTintColor="#fff"
              onSlidingComplete={async value => {
                await TrackPlayer.seekTo(value);
              }}
            />
          </View>
        </View>
        <View style={{backgroundColor: '#fff', height: hp('0.35%')}} />
        <View style={styles.listsong}>
          <FlatList
            data={songs}
            keyExtractor={index => index.id}
            renderItem={({item, index}) => {
              return (
                <>
                  <TouchableOpacity
                    style={styles.listcontainer}
                    onPress={() => skipTo(index)}>
                    <View style={styles.item}>
                      <Text style={styles.idtxt}>{item.id}</Text>
                      <Text style={styles.idtxt1}>{item.title}</Text>
                    </View>
                    <View style={styles.btndot}>
                      <Text style={styles.idtxt}>{item.duration}</Text>
                      <TouchableOpacity onPress={() => sheetOpen(index)}>
                        <Image
                          style={styles.img1}
                          source={require('../../assets/images/3dot.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </>
              );
            }}
          />
        </View>
        <RBSheet
          ref={Sheet}
          height={hp('60%')}
          openDuration={250}
          customStyles={{
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          }}>
          <RowSheet artist={tracksinger} album={trackname} />
        </RBSheet>
        <BottomLine />
      </View>
    </>
  );
};

export default Player;
