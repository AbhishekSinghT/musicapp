import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import Greeting from '../../components/title/Title';
import DrawerBtn from '../../components/button/DrawerBtn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from './Style';
import moment from 'moment';

const list = [];
const Feed = ({navigation}) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        await firestore()
          .collection('posts')
          .orderBy('postTime', 'desc')
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              const {
                userId,
                heading,
                post,
                postImg,
                postTime,
                likes,
                comments,
              } = doc.data();
              list.push({
                id: doc.id,
                userName: userId,
                heading: heading,
                post: post,
                postImg: postImg,
                postTime: postTime,
                likes: '150',
                comments: '100',
                liked: false,
              });
              setPosts(list);
              if (loading) {
                setLoading(false);
              }
            });
          });
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);
  return (
    <View style={{flex: 1}}>
      <View>
        <Greeting name="FRIEND " style={styles.title} title="FEED" />
        <DrawerBtn onPress={() => navigation.toggleDrawer()} />
      </View>
      <View style={{flex: 1, margin: 10}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={posts}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => {
            return (
              <View
                key={index}
                style={{
                  flex: 1,
                  margin: 5,
                }}>
                <View style={styles.posthead}>
                  <View>
                    <Text style={styles.nametxt}>{item.userName}</Text>
                  </View>
                  <View>
                    <Text>{moment(item.postTime.toDate()).fromNow()}</Text>
                  </View>
                </View>
                <View style={{borderWidth: 2, borderColor: '#fccb17'}} />
                <ScrollView horizontal style={{flexDirection: 'row'}}>
                  {item.postImg.map((item, index) => {
                    return (
                      <View key={index}>
                        <Image
                          style={{
                            height: hp('20%'),
                            width: wp('38%'),
                            borderWidth: 2,
                            resizeMode: 'contain',
                            margin: 10,
                          }}
                          source={{uri: item}}
                        />
                      </View>
                    );
                  })}
                </ScrollView>
                <View>
                  <Text style={styles.headingtxt}>{item.heading}</Text>
                  <Text style={styles.posttxt}>{item.post}</Text>
                </View>
                <View style={{borderWidth: 2, borderColor: '#dcdce3'}} />
                <View style={styles.postfooter}>
                  <TouchableOpacity style={styles.btnfooter}>
                    <Ionicons
                      name="heart-outline"
                      size={hp('3%')}
                      color="#66cbd9"
                    />
                    <Text>{item.likes}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnfooter}>
                    <MaterialCommunityIcons
                      name="comment-outline"
                      size={hp('3%')}
                      color="#66cbd9"
                    />
                    <Text>{item.likes}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnfooter}>
                    <MaterialCommunityIcons
                      name="share-outline"
                      size={hp('3%')}
                      color="#66cbd9"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Feed;
