import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import Swiper from 'react-native-swiper';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/firestore';
import React, {useEffect, useState, useCallback, useContext} from 'react';
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
import BottomLine from '../../components/bottomborderline/BottomLine';
import Modal from 'react-native-modal';
import {AuthContext} from '../../navigation/authprovider/AuthProvider';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const list = [];
const Feed = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [passedProps, setPassedProps] = useState([]);
  const [status, setStatus] = useState(true);
  const [likes, setLikes] = useState('');
  const [liked, setLiked] = useState(false);
  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    wait(2000).then(() => setIsRefreshing(false));
  }, []);
  const fetchPosts = async () => {
    try {
      await firestore()
        .collection('posts')
        .orderBy('postTime', 'desc')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const {
              userName,
              heading,
              post,
              profile,
              postImg,
              postTime,
              likes,
              comments,
            } = doc.data();
            list.push({
              id: doc.id,
              userName: userName,
              heading: heading,
              profile: profile,
              post: post,
              postImg: postImg,
              postTime: postTime,
              likes: likes,
              comments: comments,
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
  // console.log(user);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  // const getUser = async () => {
  //   const currentUser = await firestore()
  //     .collection('posts')
  //     .doc(user.id)
  //     .get()
  //     .then(documentSnapshot => {
  //       if (documentSnapshot.exists) {
  //         // console.log('User Data', documentSnapshot.data());
  //         // setUserData(documentSnapshot.data());
  //       }
  //     });
  // };
  // const getUser = () => {
  //   const getInfo = firebase.database().ref('/users/event/' + id);
  //   getInfo.on('value', snapshot => {
  //     console.log('User data: ', snapshot.val());
  //     setLikes(snapshot.val().likes);
  //     // setIntersted(snapshot.val().interested)
  //     // setInterestedNmb(snapshot.val().interestedNmb)
  //     // setInterestedName(snapshot.val().interestedName)
  //     setLiked(snapshot.val().liked);
  //   });
  // };

  const likeButton = async index => {
    console.log(posts[index].id);
    const currentUser = await firestore()
      .collection('posts')
      .doc(posts[index].id)
      .update({
        likes: likes + 1,
        liked: true,
      });
  };

  useEffect(() => {
    fetchPosts();
    onRefresh();
    // getUser();
  }, []);

  const EmptyPost = () => {
    return (
      <View style={styles.empContainer}>
        <Text style={styles.empTxt}>
          Not any post available scroll to refresh
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <Greeting name="FRIEND " style={styles.title} title="FEED" />
        <DrawerBtn onPress={() => navigation.toggleDrawer()} />
      </View>
      <View style={{flex: 1}}>
        {posts == null ? (
          <View style={{flex: 1}}>
            <FlatList
              refreshing={isRefreshing}
              onRefresh={onRefresh}
              ListEmptyComponent={
                <>
                  <EmptyPost />
                </>
              }
            />
          </View>
        ) : (
          <View style={{flex: 1, margin: 10}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={posts}
              keyExtractor={(item, index) => String(index)}
              refreshing={isRefreshing}
              onRefresh={onRefresh}
              renderItem={({item, index}) => {
                return (
                  <View
                    key={index}
                    style={{
                      flex: 1,
                      margin: hp('1%'),
                    }}>
                    <View style={styles.posthead}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          // justifyContent: 'space-between',
                          width: wp('50%'),
                        }}>
                        <View style={styles.usericon}>
                          {item.profile ? (
                            <>
                              <Image
                                style={styles.userimage}
                                source={{uri: item.profile}}
                              />
                            </>
                          ) : (
                            <>
                              <View style={styles.usericon}>
                                <Image
                                  style={styles.userimage}
                                  source={require('../../assets/images/user.png')}
                                />
                              </View>
                            </>
                          )}
                        </View>
                        <View>
                          <Text style={styles.nametxt}>{item.userName}</Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text style={{color: 'black', marginRight: hp('1%')}}>
                          {moment(item.postTime.toDate()).fromNow()}
                        </Text>
                        <Ionicons
                          name="md-ellipse"
                          color={user != null ? 'red' : 'green'}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        borderTopWidth: 5,
                        borderColor: '#fccb17',
                      }}
                    />
                    <View>
                      <ScrollView horizontal style={styles.scrollContainer}>
                        {item.postImg.map((itemImage, index) => (
                          <TouchableOpacity
                            key={index}
                            style={{
                              margin: 10,
                              justifyContent: 'flex-start',
                              backgroundColor: '#cccac6',
                              height: hp('20%'),
                              width: wp('38%'),
                            }}
                            onPress={() => {
                              toggleModal(index);
                              setSelectedIndex(index);
                              setPassedProps(item.postImg);
                            }}>
                            <Image
                              style={{
                                height: hp('20%'),
                                margin: 0,
                                overflow: 'hidden',
                                resizeMode: 'stretch',
                              }}
                              source={{uri: itemImage}}
                            />
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                      <View style={{flex: 1}}>
                        <Modal
                          transparent={false}
                          style={{margin: 0, flex: 1}}
                          isVisible={isModalVisible}>
                          <View style={{flex: 1}}>
                            <Swiper loop={false} index={selectedIndex}>
                              {passedProps.map((item, index) => (
                                <View
                                  key={index}
                                  style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flex: 1,
                                  }}>
                                  <Image
                                    style={{
                                      height: hp('100%'),
                                      width: wp('100%'),
                                      resizeMode: 'contain',
                                    }}
                                    source={{uri: item}}
                                  />
                                </View>
                              ))}
                            </Swiper>

                            <Button title="close" onPress={toggleModal} />
                          </View>
                        </Modal>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.headingtxt}>{item.heading}</Text>
                      <Text style={styles.posttxt}>{item.post}</Text>
                    </View>
                    <View style={{borderTopWidth: 5, borderColor: '#dcdce3'}} />
                    <View style={styles.postfooter}>
                      <TouchableOpacity
                        onPress={() => likeButton(index)}
                        style={styles.btnfooter}>
                        <Ionicons
                          name="heart-outline"
                          size={hp('3%')}
                          color="#66cbd9"
                        />
                        <Text style={{color: 'black', fontSize: 10}}>
                          {item.likes}
                        </Text>
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
        )}
      </View>
      <BottomLine />
    </View>
  );
};

export default Feed;
