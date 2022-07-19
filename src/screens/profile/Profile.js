import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
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
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [users, setUsers] = useState(null);
  const [userData, setUserData] = useState(null);

  const chooseMainPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
      mediaType: 'photo',
    }).then(image => {
      Alert.alert('Alert Title', 'My Alert Msg', [
        {
          text: 'Uplaod',
          onPress: handleUpdate,
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      const imageUri = image.path;
      setImage(imageUri);
    });
  };
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      multiple: true,
      width: 300,
      height: 300,
      cropping: true,
    }).then(response => {
      console.log(response);
      const imageUri =
        Platform.OS === 'ios' ? response.sourceURL : response.path;
      console.log(imageUri);
    });
  };
  const sheetOpen = () => {
    Sheet.current.open();
  };

  const getUser = async () => {
    const currentUser = await firestore()
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
  const handleUpdate = async () => {
    let imgUrl = await uploadImage();
    firestore()
      .collection('users')
      .doc(user.uid)
      .update({
        userImg: imgUrl,
      })
      .then(() => {
        console.log('User Updated!');
        Alert.alert(
          'Profile Updated!',
          'Your profile has been updated successfully.',
        );
      });
  };

  const uploadImage = async () => {
    if (image == null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
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
      setUsers(url);
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
        <View style={{flex: 1}}>
          <Greeting
            name="YOUR "
            style={{height: hp('15%'), backgroundColor: '#0d709e'}}
            title="PROFILE"
          />
          <DrawerBtn onPress={() => navigation.toggleDrawer()} />

          <View style={styles.profilecontaine}>
            {userData == null ? (
              <>
                <TouchableOpacity
                  style={{margin: hp('8%')}}
                  onPress={() => sheetOpen()}>
                  <UserPhoto source={require('../../assets/images/user.png')} />
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  style={{margin: hp('8%')}}
                  onPress={() => sheetOpen()}>
                  <UserPhoto source={{uri: userData.userImg}} />
                </TouchableOpacity>
              </>
            )}
            <View style={{marginLeft: hp('8%')}}>
              <View style={styles.userinfo}>
                <Icon name="user" size={wp('5%')} color="#47dded" />
                <Text style={styles.userinfoname}>
                  {userData ? userData.displayName : null}
                </Text>
              </View>
              <View style={styles.userinfo}>
                <Icon name="envelope" size={wp('4%')} color="#47dded" />
                <Text style={styles.userinfotext}>
                  {userData ? userData.email : null}
                </Text>
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
            height={hp('20%')}
            openDuration={250}
            customStyles={{
              container: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            }}>
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
          <BottomLine />
        </View>
      </View>
    </>
  );
};

export default Profile;
