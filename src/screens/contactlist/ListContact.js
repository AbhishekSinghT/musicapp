import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Greeting from '../../components/title/Title'
import DrawerBtn from '../../components/button/DrawerBtn'
import SearchBox from '../../components/searchbar/SearchBox';
import ListSwipe from '../../components/contactflatlist/ListSwipe';
import BottomLine from '../../components/bottomborderline/BottomLine'
import { styles } from './Style';

const ListContact = () => {
    const [color, setColor] = useState(false)


    return (
        <View style={{ flex: 1 }}>
            <View>
                <Greeting name='CONTACT ' style={styles.icon} title='LIST' />
                <DrawerBtn   />
            </View>
            <View>
                <SearchBox
                    source1={require('../../assets/images/heart.png')}
                    source2={require('../../assets/images/plus.png')}
                />
            </View>
            <View style={styles.filterbtn}>
                <Text styles={styles.sorttext}>Sort by:</Text>
                <View style={styles.btncontainer}>
                    <TouchableOpacity style={color === true ? styles.btn : styles.activebtn} onPress={() => setColor(false)}>
                        <Text style={color === true ? styles.txt : styles.activetxt}  >statuts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setColor(true)} style={color === true ? styles.activebtn : styles.btn}>
                        <Text style={color === true ? styles.activetxt : styles.txt}>name</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.listcontainer}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={<View>
                        <ListSwipe />
                    </View>} />

            </View>
            <BottomLine />
        </View>
    )
}

export default ListContact