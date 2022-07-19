import {View, StatusBar} from 'react-native';
import React from 'react';
import Providers from './src/navigation';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreLogs([
    'ViewPropTypes will be removed',
    'ColorPropType will be removed',
  ]);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{flex: 1}}>
        <Providers />
      </View>
    </>
  );
};

export default App;
// import React, {useState} from 'react';
// import {Text, Dimensions, StyleSheet, View, Button} from 'react-native';
// import Modal from 'react-native-modal';
// import {SwiperFlatList} from 'react-native-swiper-flatlist';

// function ModalTester() {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const colors = ['tomato', 'thistle', 'skyblue', 'teal'];
//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   return (
//     <View style={{flex: 1}}>
//       <Button title="Show modal" onPress={toggleModal} />

//       <Modal isVisible={isModalVisible}>
//         <View style={{flex: 1}}>
//           <SwiperFlatList
//             index={2}
//             showPagination
//             data={colors}
//             renderItem={({item}) => (
//               <View style={[styles.child, {backgroundColor: item}]}>
//                 <Text style={styles.text}>{item}</Text>
//               </View>
//             )}
//           />

//           <Button title="Hide modal" onPress={toggleModal} />
//         </View>
//       </Modal>
//     </View>
//   );
// }

// export default ModalTester;
// const {width} = Dimensions.get('window');
// const styles = StyleSheet.create({
//   container: {flex: 1, backgroundColor: 'white'},
//   child: {width, justifyContent: 'center'},
//   text: {fontSize: width * 0.5, textAlign: 'center'},
// });
