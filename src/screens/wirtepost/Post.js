import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import Greeting from '../../components/title/Title';
import DrawerBtn from '../../components/button/DrawerBtn';
import {styles} from './Style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BottomLine from '../../components/bottomborderline/BottomLine';
import TabBtn from '../../components/tabcustombtn/TabBtn';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-crop-picker';
import {LogBox} from 'react-native';
import {AuthContext} from '../../navigation/authprovider/AuthProvider';
import Progress from '../../components/progress/Progress';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);
let imageArr = [];
const Post = ({navigation}) => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [addImages, setAddimages] = useState(null);
  const [headline, setHeadline] = useState(true);
  const [addValue, setAddValue] = useState('');
  const [focus, setFocus] = useState('');
  const [userData, setUserData] = useState('');

  const {user} = useContext(AuthContext);

  const takePhotoFromCamera = async () => {
    ImagePicker.openCamera({
      multiple: true,
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      const imageUri = image.path;
      setAddimages(imageUri);
    });
  };
  const handleRemoveItem = index => {
    let newList = [...images];
    if (index !== -1) {
      newList.splice(index, 1);
      setImages(newList);
    } else {
    }
  };

  const choosePhotoFromLibrary = () => {
    let imagelist = [];
    ImagePicker.openPicker({
      mediaType: 'any',
      compressVideoPreset: 'HighestQuality',
      multiple: true,
      compressImageQuality: 0.8,
    })
      .then(response => {
        response.map(image => {
          imagelist.push({
            path: image.path,
            type: image.mime,
          });
        });
        setImages(imagelist);
      })
      .catch(e => {
        if (e.code !== 'E_PICKER_CANCELLED') {
          console.log(e);
        }
      });
  };

  const chooseMainPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
      mediaType: 'photo',
    })
      .then(image => {
        const imageUri = image.path;
        setAddimages(imageUri);
      })
      .catch(e => {
        if (e.code !== 'E_PICKER_CANCELLED') {
          console.log(e);
        }
      });
  };

  const handleOnblur = () => {
    if (focus.length == 0) {
      setHeadline(true);
    } else {
      setHeadline(false);
    }
  };

  const getUser = async () => {
    await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          setUserData(documentSnapshot.data());
        }
      });
  };

  const submitPost = async () => {
    const newData = images.map(item => {
      return item.path;
    });
    if (addImages != null) {
      await moveFile(addImages);
    }
    if (images != undefined) {
      for (var i = 0; i < newData.length; i++) {
        await moveFile(newData[i]);
      }
    }
    await getUser();
    firestore()
      .collection('posts')
      .add({
        postImg: imageArr,
        profile: userData.userImg,
        userName: userData.displayName,
        userId: user.uid,
        heading: focus,
        postheader: addValue,
        postTime: firestore.Timestamp.fromDate(new Date()),
        likes: [],
        comments: [],
      })
      .then(() => {
        setAddValue('');
        setFocus('');
        setAddimages(null);
        setImages([]);
        Alert.alert('Post uploaded');
        navigation.navigate('Feed');
      })
      .catch(error => {
        console.log('something went worng with added post', error);
      });
  };

  const moveFile = async uploadUri => {
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(`photos/${filename}`);

    const task = storageRef.putFile(uploadUri);

    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });
    try {
      await task;
      const url = await storageRef.getDownloadURL();
      setUploading(false);
      imageArr.push(url);
    } catch (e) {
      console.log(e);
      return null;
    }
  };
  useEffect(() => {
    getUser();
    const unsubscribe = navigation.addListener('focus', () => {
      setAddValue('');
      setFocus('');
      setAddimages(null);
      setImages([]);
    });
    return unsubscribe;
  }, [navigation]);

  const SendBtn = () => {
    return (
      <>
        {addImages || addValue || focus ? (
          <>
            <TouchableOpacity onPress={submitPost} style={styles.btnsend}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: hp('3.2%'),
                  fontWeight: '300',
                }}>
                Send
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>{null}</>
        )}
      </>
    );
  };

  return (
    <View style={{flex: 1}}>
      {uploading ? (
        <Progress text={transferred} />
      ) : (
        <View style={{display: 'none'}}></View>
      )}
      <View>
        <Greeting name="WRITE " style={styles.title} title="POST" />
        <DrawerBtn onPress={() => navigation.toggleDrawer()} />
        <SendBtn />
      </View>
      <View style={{flex: 1}}>
        <View style={styles.container}>
          {addImages != null ? (
            <>
              <View style={styles.imgcircle}>
                <Image
                  style={{
                    width: wp('40%'),
                    height: hp('40%'),
                    resizeMode: 'contain',
                  }}
                  source={{uri: addImages}}
                />
              </View>
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={chooseMainPhoto}
                style={styles.btnCircle}>
                <MaterialCommunityIcons
                  name="camera-outline"
                  size={hp('6%')}
                  color="#0d709e"
                />
                <Text style={styles.addtxt}>add main photo</Text>
              </TouchableOpacity>
            </>
          )}

          {headline == true ? (
            <>
              <TouchableOpacity
                style={styles.headline}
                onPress={() => setHeadline(false)}>
                <MaterialCommunityIcons
                  name="lead-pencil"
                  size={hp('2.3%')}
                  color="#de800d"
                />
                <Text style={styles.headtxt}>Post Headline</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <View style={{marginTop: hp('3%')}}>
                <TextInput
                  onBlur={handleOnblur}
                  autoFocus={true}
                  value={focus}
                  multiline={true}
                  maxLength={40}
                  placeholderTextColor="#fff"
                  selectionColor="#c7c3c4"
                  style={styles.txtinput}
                  onChangeText={text => setFocus(text)}
                />
              </View>
            </>
          )}
        </View>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View style={{flex: 1}}>
            <TextInput
              value={addValue}
              placeholderTextColor="black"
              autoFocus={true}
              placeholder="What's on your mind?"
              multiline={true}
              maxLength={300}
              selectionColor="gray"
              style={styles.postinput}
              onChangeText={text => setAddValue(text)}
            />
          </View>
          <Text style={{fontSize: hp('2%'), color: 'black'}}>
            Character Left : {addValue.length === null ? 0 : addValue.length}
            /300
          </Text>
          {images == false ? (
            <>{null}</>
          ) : (
            <>
              <View style={{height: hp('13%'), height: hp('16%')}}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={images}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({item, index}) => {
                    return (
                      <View
                        key={index}
                        style={{
                          height: hp('10%'),
                          width: wp('20%'),
                          margin: hp('1%'),
                        }}>
                        <Image
                          style={{
                            height: hp('10%'),
                            width: wp('20%'),
                            borderRadius: hp('3%'),
                            padding: hp('1%'),
                          }}
                          source={{uri: item.path}}
                        />
                        <TouchableOpacity
                          onPress={() => handleRemoveItem(index)}
                          style={styles.btn}>
                          <Text
                            style={{
                              fontSize: hp('2%'),
                              color: 'black',
                              marginTop: hp('1%'),
                            }}>
                            REMOVE
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              </View>
            </>
          )}
        </View>
      </View>
      <View style={{height: hp('10%')}}>
        <TabBtn
          TakePhoto={takePhotoFromCamera}
          ChoosePhoto={choosePhotoFromLibrary}
          name1="format-color-text"
          name2="camera-outline"
          name3="ios-attach"
          name4="microphone"
          name5="md-settings"
        />
        <BottomLine />
      </View>
    </View>
  );
};

export default Post;
