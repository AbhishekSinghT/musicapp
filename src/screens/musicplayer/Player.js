import {
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  Animated,
  Dimensions,
} from 'react-native';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {songs} from '../../model/data';

const setupPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
    });
    await TrackPlayer.add(songs);
  } catch (error) {
    console.log(error);
  }
};

const togglePlayBack = async playBackState => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  console.log(playBackState, State.Playing);
  if (currentTrack != null) {
    if (playBackState == State.Playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
      await TrackPlayer.setRepeatMode(RepeatMode.Queue);
    }
  }
};

const Player = ({navigation}) => {
  const playBackState = usePlaybackState();
  const progress = useProgress();
  const [repeatMode, setRepeatMode] = useState('off');
  const [trackTitle, setTrackTitle] = useState();
  const [trackArtist, setTrackArtist] = useState();
  const [trackArtwork, setTrackArtwork] = useState();

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
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artwork, artist} = track;
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });
  const skipToNext = () => {
    TrackPlayer.skipToNext();
  };

  const skipToPrevious = () => {
    TrackPlayer.skipToPrevious();
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
    setupPlayer();
    return () => {
      TrackPlayer.destroy();
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
            <TouchableOpacity
              style={styles.repeatbtn}
              onPress={changeRepeatMode}>
              <Ionicons name="heart-outline" size={hp('3%')} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.repeatbtn}>
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
                <View style={styles.listcontainer}>
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => skipTo(index)}>
                    <Text style={styles.idtxt}>{item.id}</Text>
                    <Text style={styles.idtxt1}>{item.title}</Text>
                  </TouchableOpacity>
                  <View style={styles.btndot}>
                    <Text style={styles.idtxt}>3:16</Text>
                    <TouchableOpacity>
                      <Image
                        style={styles.img1}
                        source={require('../../assets/images/3dot.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <BottomLine />
      </View>
    </>
  );
};

export default Player;

// const [favorites, setFavorite] = useState("");

// useEffect(async ()=>{
//   let savedFavorite = await localStorage.getItem('__Fav');
//   if(savedFavorite) {
//     setFavorite(savedFavorite);
//   }
// }, [])
{
  /* <div><Button data-id={key}  color={this.state.likeIds.contain(key) ? "google plus" : "twitter"} icon={this.state.likeIds.contain(key) ? "heart" : "heart outline"}

const addFavorite = (key, user) {
    this.setState({
        likeIds: [...likeIds, key] 
} */
}

// import { View, Image, TouchableOpacity, Text, FlatList } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import Greeting from '../../components/title/Title'
// import DrawerBtn from '../../components/button/DrawerBtn'
// import { Slider } from '@miblanchard/react-native-slider';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { styles } from './Style';
// import BottomLine from '../../components/bottomborderline/BottomLine';
// import Tracklist from '../../components/songlist/Tracklist';
// import TrackPlayer, {
//     Capability,
//     Event,
//     RepeatMode,
//     State,
//     usePlaybackState,
//     useProgress,
//     useTrackPlayerEvents,
// } from 'react-native-track-player';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { songs } from '../../model/data';

// ;

// const Player = () => {
//     const playbackstate = usePlaybackState();
//     const progress = useProgress();
//     const [songIndex, setSongIndex] = useState(0);

//     const Item = ({ title,id,duration}) => (
//         <View style={styles.item}>
//              <Text style={styles.Id}>{id}</Text>
//              <TouchableOpacity onPress={() => TrackPlayer.play()}>
//           <Text style={styles.titletxt}>{title}</Text>
//           </TouchableOpacity>
//           <Text style={styles.Id}>{duration}</Text>
//         </View>
//       )

//     const renderItem = ({ item }) => (
//         <Item title={item.title} id={item.id} duration={item.duration} />
//       );

//     const togglePlayback = async (playbackstate) => {
//         const currentTrack = await TrackPlayer.getCurrentTrack();

//         if (currentTrack !== null) {
//             console.log(playbackstate, State.Ready)
//             if (playbackstate == 2) {
//                 await TrackPlayer.pause();
//                 console.log('STOP');
//             } else {
//                 await TrackPlayer.play();
//             }
//         }
//     }

//     const setUpTrackPlayer = async () => {
//         try {
//             await TrackPlayer.setupPlayer({})
//             await TrackPlayer.updateOptions({
//                 stopWithApp: true,
//                 capabilities: [
//                   Capability.Play,
//                   Capability.Pause,
//                   Capability.SkipToNext,
//                   Capability.SkipToPrevious,
//                   Capability.Stop,
//                   Capability.SeekTo,
//                 ],
//                 compactCapabilities: [Capability.Play, Capability.Pause],
//               })
//             await TrackPlayer.add(songs);
//             console.log('Tracks added');
//         } catch (e) {
//             console.log(e);
//         }

//     };
//     const handleChange =async (value) => {
//         await TrackPlayer.seekTo(value);
//       };

//     useEffect(() => {
//         // setSongIndex(val);
//         setUpTrackPlayer();
//         return () => TrackPlayer.destroy();
//         console.log

//     }, []);

//     return (
//         <>
//             <View style={{ flex: 1 }}>
//                 <View>
//                     <Greeting name='MUSIC ' style={styles.title} title='PLAYER' />
//                     <DrawerBtn onPress={() => navigation.toggleDrawer()} />
//                 </View>
//                 <View style={styles.container}>
//                     <View style={styles.header}>
//                         <Text style={styles.txt}>{songs[songIndex].title}</Text>
//                         <View style={styles.borderline} />
//                         <Text style={styles.txt}>{songs[songIndex].artist}</Text>
//                     </View>
//                     <View style={styles.iconbtn}>
//                         <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
//                             <Image style={styles.img1} source={require('../../assets/images/next.png')} />
//                         </TouchableOpacity>
//                         <TouchableOpacity>
//                             <Image style={styles.img2} source={require('../../assets/images/skip.png')} />
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={() => togglePlayback(playbackstate)}>
//                             <Icon name={playbackstate === State.Playing ? 'pause' : 'play'} size={hp('3%')} color="#de800d" />
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={() => skip("fwd")}>
//                             <Image style={styles.img2} source={require('../../assets/images/skip1.png')} />
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
//                             <Image style={styles.img1} source={require('../../assets/images/next1.png')} />
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.bottombtn}>
//                         <TouchableOpacity>
//                             <Image style={styles.img1} source={require('../../assets/images/favsong.png')} />
//                         </TouchableOpacity>
//                         <TouchableOpacity>
//                             <Image style={styles.img1} source={require('../../assets/images/repeat.png')} />
//                         </TouchableOpacity>
//                         <TouchableOpacity>
//                             <Image style={styles.img1} source={require('../../assets/images/randomplay.png')} />
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.sliderbar}>
//                         <Slider
//                             value={progress.position}
//                             thumbTintColor='#fccb17'
//                             maximumValue={progress.duration}
//                             minimumValue={0}
//                             minimumTrackTintColor="#fff"
//                             maximumTrackTintColor="#fff"
//                             onValueChange={(value) => TrackPlayer.seekTo(value)}
//                         />
//                     </View>
//                 </View>
//                 <View style={{ backgroundColor: '#fff', height: hp('0.35%') }} />
//                 <View style={styles.listsong} >
//                     <FlatList
//                         data={songs}
//                         renderItem={renderItem}
//                         keyExtractor={item => item.id}
//                     />
//                 </View>
//                 <BottomLine />
//             </View>

//         </>
//     )
// }

// export default Player
