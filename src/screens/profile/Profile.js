import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useContext } from 'react'
import Greeting from '../../components/title/Title'
import { styles } from './Style'
import UserPhoto from '../../components/userphoto/UserPhoto';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuList from '../../components/menulist/MenuList';
import ContactUser from '../../components/contactusericon/ContactUser';
import { AuthContext } from '../../navigation/authprovider/AuthProvider';
import Editfav from '../../components/contactuseredit/Editfav';
import DrawerBtn from '../../components/button/DrawerBtn';
import { firebase } from '@react-native-firebase/auth';
import BottomLine from '../../components/bottomborderline/BottomLine';


const Profile = ({ navigation }) => {
  // const { user } = useContext(AuthContext)
  var user = firebase.auth().currentUser;

  return (
    <>
      <View style={styles.container}>
          <View style={{flex:1}}> 
            <Greeting name='YOUR ' style={{height:hp('15%'),backgroundColor:'#0d709e'}} title='PROFILE' />
            <DrawerBtn onPress={() => navigation.toggleDrawer()} />
         
        <View style={styles.profilecontaine}>
          <View style={{ margin: hp('8%') }}>
            <UserPhoto source={require('../../assets/images/user.png')} />
          </View>
          <View style={{ marginLeft: hp('8%') }}>
            <View style={styles.userinfo}>
              <Icon name="user" size={wp('5%')} color="#47dded" />
              <Text style={styles.userinfoname} >{user ? user.displayName : null}</Text>
            </View>
            <View style={styles.userinfo}>
              <Icon name="envelope" size={wp('4%')} color="#47dded" />
              <Text style={styles.userinfotext}>{user ? user.email : null}</Text>
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
        <View style={{
            backgroundColor: '#fff',
            height: hp('0.35%'),
        }} />
        <View style={styles.footer}>
          <MenuList name='camera' title='Photo & Images' onPress={() => navigation.navigate('ImageScreen')}
            source={require('../../assets/images/arrowCircle.png')} />
          <MenuList name='music' title='Music Tracks' onPress={() => navigation.navigate('TrackScreen')}
            source={require('../../assets/images/arrowCircle.png')} />
          <View style={styles.contact}>
            <MenuList name='user' title='Contact List' onPress={() => navigation.navigate('ListContact')}
              source={require('../../assets/images/arrowCircle.png')} />
            <View style={styles.favContact}>
              <View style={styles.contactline} />
              <Editfav style={{backgroundColor:'#de800d'}} color='#fff'  name='heart'/>
              <View style={styles.contactline} />
              <View style={styles.contactline} />
              <ContactUser name='user'/>
              <View style={styles.contactline} />
              <ContactUser name='user'/>
              <View style={styles.contactline} />
              <ContactUser name='user'/>
              <View style={styles.contactline} />
              <ContactUser name='user'/>
              <View style={styles.contactline} />
              <View style={styles.contactline} />
              <Editfav style={{backgroundColor:'#fff'}} color="#0d709e" name='pencil' />
              <View style={styles.contactline} />
            </View>
          </View>
          <MenuList name='envelope' title='Messages' onPress={() => navigation.navigate('Inbox')}
            source={require('../../assets/images/arrowCircle.png')} />
        </View>
        </View>
        <View>
        <BottomLine />
        </View>
      </View>
    </>
  )
}

export default Profile