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
import React, {
  useEffect,
  useState,
  useCallback,
  useContext,
  useReducer,
  useRef,
} from 'react';
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
import {v4 as uuidv4} from 'uuid';
import RBSheet from 'react-native-raw-bottom-sheet';
import Comment from '../../components/commentbox/Comment';
import Commentlist from '../../components/commentlist/Commentlist';
import {useNetInfo} from '@react-native-community/netinfo';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

var list = [];
const Feed = ({navigation}) => {
  const Sheet = useRef();
  const {user} = useContext(AuthContext);
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [passedProps, setPassedProps] = useState([]);
  const [comment, setComment] = useState('');
  const [liked, setLiked] = useState('');
  const [userData, setUserData] = useState('');
  const [postId, setPostId] = useState('');
  const [commentData, setCommentData] = useState('');
  const netInfo = useNetInfo();

  const onRefresh = useCallback(() => {
    fetchPosts();

    setIsRefreshing(true);
    wait(2000).then(() => setIsRefreshing(false));
  }, []);
  const fetchPosts = () => {
    firestore()
      .collection('posts')
      .orderBy('postTime', 'desc')
      .onSnapshot({
        next: querySnapshot => {
          const tasks = querySnapshot.docs.map(docSnapshot => ({
            id: docSnapshot.id,
            userId: docSnapshot.data().userId,
            userName: docSnapshot.data().userName,
            heading: docSnapshot.data().heading,
            profile: docSnapshot.data().profile,
            post: docSnapshot.data().postheader,
            postImg: docSnapshot.data().postImg,
            postTime: docSnapshot.data().postTime,
            likes: docSnapshot.data().likes,
            comments: docSnapshot.data().comments,
          }));
          setPosts(tasks);
        },
        error: error => console.log(error),
      });
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const getUser = async () => {
    await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        setUserData(documentSnapshot.data());
      });
  };
  const onClose = () => {
    setCommentData('');
    setPostId('');
  };

  const getComment = async itemId => {
    await firestore()
      .collection('posts')
      .doc(itemId)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          setCommentData(documentSnapshot.data().comments);
        }
      });
  };

  const handleComment = async () => {
    await firestore()
      .collection('posts')
      .doc(postId)
      .update({
        comments: firestore.FieldValue.arrayUnion({
          userId: user.uid,
          profile: userData.userImg,
          userName: userData.displayName,
          comment: comment,
          // commentId: uuidv4(),
          commentTime: firestore.Timestamp.fromDate(new Date()),
        }),
      })
      .then(() => {
        setComment('');
        getComment(postId);
        Alert.alert('Comments Added Successfully!');
      });
  };
  useEffect(() => {
    if (!netInfo.isConnected) {
      setLoading(true);
      console.log('disconnected');
    } else {
      setLoading(false);
      console.log('connected');
    }
  }, [netInfo.isConnected]);

  useEffect(() => {
    fetchPosts();
    getUser();
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

  const LikeBtn = ({id, likes}) => {
    const postRef = firestore().collection('posts').doc(id);
    const {user} = useContext(AuthContext);
    const likeButton = async () => {
      if (likes?.includes(user.uid)) {
        postRef.update({
          likes: firestore.FieldValue.arrayRemove(user.uid),
        });
      } else {
        postRef.update({
          likes: firestore.FieldValue.arrayUnion(user.uid),
        });
      }
    };

    return (
      <TouchableOpacity onPress={likeButton} style={styles.btnfooter}>
        <Ionicons
          name={likes?.includes(user.uid) ? 'heart' : 'heart-outline'}
          size={hp('3%')}
          color="#66cbd9"
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
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
            <>
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
                              <Text style={styles.nametxt}>
                                {item.userName}
                              </Text>
                            </View>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginRight: hp('1%'),
                                fontSize: hp('1.8%'),
                              }}>
                              {moment(item.postTime.toDate()).fromNow()}
                            </Text>
                            <Ionicons
                              name="md-ellipse"
                              color={user != null ? 'green' : 'red'}
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
                              supportedOrientations={['portrait']}
                              onRequestClose={toggleModal}
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
                        <View
                          style={{borderTopWidth: 5, borderColor: '#dcdce3'}}
                        />
                        <View style={styles.postfooter}>
                          <LikeBtn id={item.id} likes={item.likes} />
                          <Text style={styles.likesTxt}>
                            {item.likes ? item.likes.length : '0'}
                          </Text>
                          <TouchableOpacity
                            onPress={() => {
                              getComment(item.id);
                              setPostId(item.id);
                              Sheet.current.open();
                            }}
                            style={styles.btnfooter}>
                            <MaterialCommunityIcons
                              name="comment-outline"
                              size={hp('3%')}
                              color="#66cbd9"
                            />
                            <Text style={styles.likesTxt}>
                              {item.comments ? item.comments.length : '0'}
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => console.log(item.id)}
                            style={styles.btnfooter}>
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
              <RBSheet
                closeDuration={200}
                animationType="slide"
                ref={Sheet}
                onClose={onClose}
                height={hp('98%')}
                openDuration={250}
                customStyles={{
                  container: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  },
                }}>
                <View style={{flex: 1}}>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        paddingVertical: hp('2%'),
                        fontSize: hp('2.5%'),
                        color: '#0d709e',
                      }}>
                      comments
                    </Text>
                    <View
                      style={{
                        borderTopWidth: 2,
                        borderColor: '#dcdce3',
                      }}
                    />
                    <FlatList
                      data={commentData}
                      keyExtractor={(item, index) => String(index)}
                      renderItem={({item, index}) => {
                        return (
                          <View key={index}>
                            <Commentlist
                              source={{uri: item.profile}}
                              username={item.userName}
                              usercomment={item.comment}
                            />
                          </View>
                        );
                      }}
                    />
                  </View>
                </View>
                <Comment
                  value={comment}
                  onChangeText={text => setComment(text)}
                  onPress={handleComment}
                />
              </RBSheet>
            </>
          )}
        </View>
        <BottomLine />
      </View>
    </>
  );
};

export default Feed;
