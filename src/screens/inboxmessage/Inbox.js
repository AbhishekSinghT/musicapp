import {View, FlatList, Text} from 'react-native';
import React from 'react';
import {styles} from './Style';
import Greeting from '../../components/title/Title';
import DrawerBtn from '../../components/button/DrawerBtn';
import SearchBox from '../../components/searchbar/SearchBox';
import ListArtist from '../../components/albumlist/ListArtist';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DATA = [
  {
    id: 1,
    title: 'john Doe',
    time: 'Today, 12 AM',
    message:
      'when the state changes. Without setting this prop, FlatList would not know it needs to re-render any items because it is a PureComponent and the prop comparison will not show any',
    status: '1',
  },
  {
    id: 2,
    title: 'john ',
    time: 'Today, 12 AM',
    message:
      'when the state changes. Without setting this prop, FlatList would not know it needs to re-render any items because it is a PureComponent and the prop comparison will not show any',
    status: '0',
  },
  {
    id: 3,
    title: ' Doe',
    time: 'Today, 12 AM',
    message:
      'when the state changes. Without setting this prop, FlatList would not know it needs to re-render any items because it is a PureComponent and the prop comparison will not show any',
    status: '1',
  },
  {
    id: 4,
    title: 'yoyo',
    time: 'Today, 12 AM',
    message:
      'when the state changes. Without setting this prop, FlatList would not know it needs to re-render any items because it is a PureComponent and the prop comparison will not show any',
    status: '0',
  },
  {
    id: 5,
    title: 'jojo',
    time: 'Today, 12 AM',
    message:
      'when the state changes. Without setting this prop, FlatList would not know it needs to re-render any items because it is a PureComponent and the prop comparison will not show any',
    status: '1',
  },
  {
    id: 8,
    title: 'toto',
    time: 'Today, 12 AM',
    message:
      'when the state changes. Without setting this prop, FlatList would not know it needs to re-render any items because it is a PureComponent and the prop comparison will not show any',
    status: '0',
  },
  {
    id: 6,
    title: 'ramesh',
    time: 'Today, 12 AM',
    message:
      'when the state changes. Without setting this prop, FlatList would not know it needs to re-render any items because it is a PureComponent and the prop comparison will not show any',
    status: '1',
  },
  {
    id: 7,
    title: 'prime',
    time: 'Today, 12 AM',
    message:
      'when the state changes. Without setting this prop, FlatList would not know it needs to re-render any items because it is a PureComponent and the prop comparison will not show any',
    status: '0',
  },
];

const Item = ({title, message, time, status}) => (
  <View style={styles.item}>
    <ListArtist
      style={{height: hp('18%')}}
      activestatus={[
        status == 0 ? styles.offline : styles.none,
        status == 1 ? styles.online : styles.none,
      ]}
      line={{display: 'none'}}
      title={title}
      textmessage={message}
      albums={time}
      name="user"
      source={require('../../assets/images/backarrowYL.png')}
      logoheight={{height: hp('9%'), width: wp('8%')}}
    />
  </View>
);

const Inbox = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      message={item.message}
      time={item.time}
      status={item.status}
    />
  );
  return (
    <View style={styles.container}>
      <View>
        <Greeting name="INBOX " style={styles.header} title="MESSAGES" />
        <DrawerBtn onPress={() => navigation.toggleDrawer()} />
      </View>
      <View>
        <SearchBox
          style={{display: 'none'}}
          source1={require('../../assets/images/plus.png')}
          source2={require('../../assets/images/plus.png')}
        />
      </View>
      <View style={{flex: 1, margin: wp('3%')}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Inbox;
