import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Greeting from '../../components/title/Title';
import DrawerBtn from '../../components/button/DrawerBtn';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchBox from '../../components/searchbar/SearchBox';
import Heading from '../../components/customHeading/Heading';
import {styles} from './Style';
import ListPlay from '../../components/playlists/ListPlay';
import ListArtist from '../../components/albumlist/ListArtist';
import BottomLine from '../../components/bottomborderline/BottomLine';

const TrackScreen = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1}}>
        <View>
          <Greeting
            name="MUSIC "
            style={{height: hp('15%'), backgroundColor: '#0d709e'}}
            title="TRACKS"
          />
          <DrawerBtn onPress={() => navigation.toggleDrawer()} />
        </View>
        <View>
          <SearchBox
            source1={require('../../assets/images/heart.png')}
            source2={require('../../assets/images/plus.png')}
          />
        </View>
        <View style={styles.header}>
          <Heading title="Playlists" />
        </View>
        <View>
          <ListPlay />
        </View>
        <View style={styles.header}>
          <Heading title="Artists" />
        </View>
        <View style={{flex: 1, margin: 10}}>
          <FlatList
            ListHeaderComponent={
              <View>
                <ListArtist
                  style={{height: hp('10%')}}
                  bottomstyle={{display: 'none'}}
                  logo={{display: 'none'}}
                  name="music"
                  title="Music Tracks"
                  albums="1 Album"
                  songs="23 songs"
                  source={require('../../assets/images/playOutline.png')}
                />
                <ListArtist
                  style={{height: hp('10%')}}
                  bottomstyle={{display: 'none'}}
                  logo={{display: 'none'}}
                  name="music"
                  title="Music Tracks"
                  albums="1 Album"
                  songs="23 songs"
                  source={require('../../assets/images/playOutline.png')}
                />
                <ListArtist
                  style={{height: hp('10%')}}
                  bottomstyle={{display: 'none'}}
                  logo={{display: 'none'}}
                  name="music"
                  title="Music Tracks"
                  albums="1 Album"
                  songs="23 songs"
                  source={require('../../assets/images/playOutline.png')}
                />
                <ListArtist
                  style={{height: hp('10%')}}
                  bottomstyle={{display: 'none'}}
                  logo={{display: 'none'}}
                  name="music"
                  title="Music Tracks"
                  albums="1 Album"
                  songs="23 songs"
                  source={require('../../assets/images/playOutline.png')}
                />
                <ListArtist
                  style={{height: hp('10%')}}
                  bottomstyle={{display: 'none'}}
                  logo={{display: 'none'}}
                  name="music"
                  title="Music Tracks"
                  albums="1 Album"
                  songs="23 songs"
                  source={require('../../assets/images/playOutline.png')}
                />
                <ListArtist
                  style={{height: hp('10%')}}
                  bottomstyle={{display: 'none'}}
                  logo={{display: 'none'}}
                  name="music"
                  title="Music Tracks"
                  albums="1 Album"
                  songs="23 songs"
                  source={require('../../assets/images/playOutline.png')}
                />
              </View>
            }
          />
        </View>
        <BottomLine />
      </View>
    </>
  );
};

export default TrackScreen;
