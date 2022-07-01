import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../navigation/authprovider/AuthProvider'
import Greeting from '../../components/title/Title'
import DrawerBtn from '../../components/button/DrawerBtn';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImageBox from '../../components/imageContainer/ImageBox';
import TabBtn from '../../components/tabcustombtn/TabBtn';
import ImgFooter from '../../components/imageContainer/imagefooter/ImgFooter';
import BottomLine from '../../components/bottomborderline/BottomLine';


const ImageScreen = () => {
  const { user, logout } = useContext(AuthContext)
  const onPress = () => {
    Alert.alert(
      'Log out',
      'Do you want to logout?',
      [{ text: 'Cancel', onPress: () => { return null }},
        {text: 'Confirm', onPress: () => {logout();}}],
      { cancelable: false })
  }
  return (
    <>
    <View style={{flex:1}}>
      <View>
        <Greeting name='PHOTOS & ' style={{ height: hp('15%'), backgroundColor: '#0d709e' }} title='IMAGES' />
        <DrawerBtn />
      </View>
      <ScrollView >
        <ImageBox />
        <ImgFooter/>
      </ScrollView>
      <View style={{height:hp('10%')}}>
      <TabBtn 
      source2={require('../../assets/images/plus.png')}
      source3={require('../../assets/images/search.png')}
      source4={require('../../assets/images/backarrow.png')}
       />
       <BottomLine/>
      </View>
      </View>
    </>
  )
}

export default ImageScreen