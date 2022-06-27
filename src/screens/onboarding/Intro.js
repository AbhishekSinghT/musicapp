import { Text, Image, View, TouchableOpacity } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './Style';
import Greeting from '../../components/title/Title';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { AuthContext } from '../../navigation/authprovider/AuthProvider';
import React,{useContext} from 'react';


const Intro = ({ route, navigation }) => {
    const { register } = useContext(AuthContext)
    const { name,email,password } = route.params;
    const onPress=()=>{
        register(name,email,password)
    }
   
    return (
        <>
            <LinearGradient colors={['#0d709e', '#0a86bf', '#09a0e6',]} style={styles.linearGradient}>
                <View style={styles.titleText}>
                    <Greeting name='HELLO ' title='FRIEND' />
                </View>
                <View style={styles.line}>
                </View>
                <SwiperFlatList index={0}
                showPagination
                 paginationActiveColor={'#e0be10'}
                 paginationDefaultColor={'#75b8ce'}
                 paginationStyle={{marginBottom:heightPercentageToDP('10%')}}
                 >
                    <View style={[styles.child, { backgroundColor: '#76b4e3' }]}>
                    <Image style={styles.img} source={require('../../assets/images/intrologo.png')} />
                    <Text style={styles.text}>Lorem Ipsum is simply dummy text
                     of the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's standard dummy 
                     text ever since the 1500s, when an unknown printer took a 
                     galley of type 
                     </Text>
                        <View style={styles.footer}></View>
                    </View>
                    <View style={[styles.child, { backgroundColor: '#76b4e3' }]}>
                    <Image style={styles.img} source={require('../../assets/images/intrologo.png')} />
                    <Text style={styles.text}>Lorem Ipsum is simply dummy text
                     of the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's standard dummy 
                     text ever since the 1500s, when an unknown printer took a 
                     galley of type 
                     </Text>
                        <View style={styles.footer}></View>
                    </View>
                    <View style={[styles.child, { backgroundColor: '#76b4e3' }]}>
                    <Image style={styles.img} source={require('../../assets/images/intrologo.png')} />
                    <Text style={styles.text}>Lorem Ipsum is simply dummy text
                     of the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's standard dummy 
                     text ever since the 1500s, when an unknown printer took a 
                     galley of type 
                     </Text>
                        <View style={styles.footer}></View>
                    </View>
                </SwiperFlatList>
                <TouchableOpacity style={styles.btn} onPress={onPress}  >
                    <Text style={styles.btnText}>Get start</Text>
                </TouchableOpacity>
            </LinearGradient>
        </>
    )
}

export default Intro