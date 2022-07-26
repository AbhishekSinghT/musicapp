import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, {useContext, useEffect, useRef, useState} from 'react';
import Greeting from '../../components/title/Title';
import {styles} from './Style';
import UserPhoto from '../../components/userphoto/UserPhoto';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MenuList from '../../components/menulist/MenuList';
import ContactUser from '../../components/contactusericon/ContactUser';
import {AuthContext} from '../../navigation/authprovider/AuthProvider';
import Editfav from '../../components/contactuseredit/Editfav';
import DrawerBtn from '../../components/button/DrawerBtn';
import BottomLine from '../../components/bottomborderline/BottomLine';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';


const Profile = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const Sheet = useRef(null);
  const optionSheet = useRef(null);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [userData, setUserData] = useState('');
  const [posts, setPosts] = useState(null);

  

  const chooseMainPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 1,
      mediaType: 'photo',
    })
      .then(image => {
        const imageUri = image.path;
        setImage(imageUri);
      })
      .catch(e => {
        if (e.code !== 'E_PICKER_CANCELLED') {
          console.log(e);
        }
      });
  };
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      mediaType: 'photo',
    })
      .then(response => {
        const imageUri = response.path;
        setImage(imageUri);
      })
      .catch(e => {
        if (e.code !== 'E_PICKER_CANCELLED') {
          console.log(e);
        }
      });
  };
  const sheetOpen = () => {
    Sheet.current.open();
  };

  const sheetClose = () => {
    Sheet.current.close();
  };
  const removeSheetOpen = () => {
    optionSheet.current.open();
  };
  const removeSheetClose = () => {
    optionSheet.current.close();
  };

  const getUser = async () => {
    await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          // console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      });
  };

  const handleRemove = async () => {
    firestore()
      .collection('users')
      .doc(user.uid)
      .update({
        userImg: '',
      })
      .then(() => {
        Alert.alert('Profile Picture Has Been Remove Successfully!');
        removeSheetClose();
        getUser();
      });
  };

  const handleUpdate = async () => {
    let imgUrl = await uploadImage();
    await firestore()
      .collection('users')
      .doc(user.uid)
      .update({
        userImg: imgUrl,
      })
      .then(() => {
        Alert.alert('Profile Picture Updated!');
        setImage(null);
        sheetClose();
        getUser();
      });
  };

  const uploadImage = async () => {
    setImage(null);
    if (image == null) {
      return null;
    }
    const uploadUri = image;
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
      setImage(null);
      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <View style={styles.container}>
        {image == null ? (
          <>{null}</>
        ) : (
          Alert.alert('Do Want To Upload', 'Your Profile Picture', [
            {
              text: 'cancel',
              onPress: sheetClose,
              style: 'cancel',
            },
            {text: 'upload', onPress: handleUpdate},
          ])
        )}
        <View style={{flex: 1}}>
          <Greeting
            name="YOUR "
            style={{height: hp('15%'), backgroundColor: '#0d709e'}}
            title="PROFILE"
          />
          <DrawerBtn onPress={() => navigation.toggleDrawer()} />

          <View style={styles.profilecontaine}>
            {userData.userImg ? (
              <>
                <TouchableOpacity
                  style={{margin: hp('8%')}}
                  onPress={() => removeSheetOpen()}>
                  <UserPhoto source={{uri: userData.userImg}} />
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  style={{margin: hp('8%')}}
                  onPress={() => sheetOpen()}>
                  <UserPhoto source={require('../../assets/images/user.png')} />
                </TouchableOpacity>
              </>
            )}
            <View style={{marginLeft: hp('8%')}}>
              <View style={styles.userinfo}>
                <Icon name="user" size={wp('5%')} color="#47dded" />
                <Text style={styles.userinfoname}>{userData.displayName}</Text>
              </View>
              <View style={styles.userinfo}>
                <Icon name="envelope" size={wp('4%')} color="#47dded" />
                <Text style={styles.userinfotext}>{userData.email}</Text>
              </View>
              <View style={styles.userinfo}>
                <Icon name="globe" size={wp('4.7%')} color="#47dded" />
                <Text style={styles.userinfotext}>www.johnsite.com</Text>
              </View>
              <View style={styles.btncontainer}>
                <TouchableOpacity style={styles.btnpre}>
                  <Icon name="cog" size={hp('1.5%')} color="#de800d" />
                  <Text style={styles.btntext}> preferences</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnedit}>
                  <Icon name="pencil" size={hp('1.5%')} color="#de800d" />
                  <Text style={styles.btntext}>edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              height: hp('0.35%'),
            }}
          />
          <View style={styles.footer}>
            <MenuList
              name="camera"
              title="Photo & Images"
              onPress={() => navigation.navigate('ImageScreen')}
              source={require('../../assets/images/arrowCircle.png')}
            />
            <MenuList
              name="music"
              title="Music Tracks"
              onPress={() => navigation.navigate('TrackScreen')}
              source={require('../../assets/images/arrowCircle.png')}
            />
            <View style={styles.contact}>
              <MenuList
                name="user"
                title="Contact List"
                onPress={() => navigation.navigate('ListContact')}
                source={require('../../assets/images/arrowCircle.png')}
              />
              <View style={styles.favContact}>
                <View style={styles.contactline} />
                <Editfav
                  style={{backgroundColor: '#de800d'}}
                  color="#fff"
                  name="heart"
                />
                <View style={styles.contactline} />
                <View style={styles.contactline} />
                <ContactUser name="user" />
                <View style={styles.contactline} />
                <ContactUser name="user" />
                <View style={styles.contactline} />
                <ContactUser name="user" />
                <View style={styles.contactline} />
                <ContactUser name="user" />
                <View style={styles.contactline} />
                <View style={styles.contactline} />
                <Editfav
                  style={{backgroundColor: '#fff'}}
                  color="#0d709e"
                  name="pencil"
                />
                <View style={styles.contactline} />
              </View>
            </View>
            <MenuList
              name="envelope"
              title="Messages"
              onPress={() => navigation.navigate('Inbox')}
              source={require('../../assets/images/arrowCircle.png')}
            />
          </View>
        </View>
        <View>
          <RBSheet
            ref={Sheet}
            height={hp('30%')}
            openDuration={250}
            customStyles={{
              container: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            }}>
            {uploading ? (
              <View
                style={{
                  height: hp('4%'),
                  marginTop: hp('2%'),
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: '#0d709e',
                    fontSize: hp('2%'),
                    fontWeight: '900',
                  }}>
                  {transferred} % Completed!
                </Text>
              </View>
            ) : (
              <View></View>
            )}

            <View style={styles.rowContainer}>
              <TouchableOpacity
                onPress={takePhotoFromCamera}
                style={{alignItems: 'center'}}>
                <Ionicons name="camera" color="#0d709e" size={hp('5%')} />
                <Text style={styles.rowTxt}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={chooseMainPhoto}
                style={{alignItems: 'center'}}>
                <Ionicons name="albums" color="#0d709e" size={hp('5%')} />
                <Text style={styles.rowTxt}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </RBSheet>
          <RBSheet
            ref={optionSheet}
            height={hp('30%')}
            openDuration={250}
            customStyles={{
              container: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            }}>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                onPress={handleRemove}
                style={{alignItems: 'center'}}>
                <Ionicons
                  name="person-remove-outline"
                  color="#0d709e"
                  size={hp('5%')}
                />
                <Text style={styles.rowTxt}>Remove</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  sheetOpen(), removeSheetClose();
                }}
                style={{alignItems: 'center'}}>
                <Ionicons name="person-add" color="#0d709e" size={hp('5%')} />
                <Text style={styles.rowTxt}>Profile change</Text>
              </TouchableOpacity>
            </View>
          </RBSheet>
          <BottomLine />
        </View>
      </View>
    </>
  );
};

export default Profile;
