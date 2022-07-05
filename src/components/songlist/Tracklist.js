import { View, Text } from 'react-native'
import React from 'react'

const Tracklist = () => {
  return (
    <View>
      <Text>Tracklist</Text>
    </View>
  )
}

export default Tracklist


// import React, {useEffect} from 'react';
// import {Text, View, Button} from 'react-native';

// import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

// import MusicFiles from 'react-native-get-music-files';



// const Tracklist = () => {

//   const getAudioFiles = () => {
//     MusicFiles.getAll({})
//       .then((audioFiles) => {
//         console.log(audioFiles.length)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }
  
//   const handlePermission = () => {
//     request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
//       .then((result) => {
//         switch (result) {
//           case RESULTS.GRANTED:
//             console.log('The permission is granted');
//             break;
//           case RESULTS.DENIED:
//             console.log('The permission has not been requested / is denied but requestable');
//             break;
//           case RESULTS.BLOCKED:
//             console.log('The permission is denied and not requestable anymore');
//             break;
//         }
//       })
//   }
  
//   useEffect(() => {
//     handlePermission()
//   }, [])

//   return (
//     <View>
//       <Text>musicPlayer</Text>
//       <Button title='handle permission' onPress={() => handlePermission()} />
//       <Button title='get audio' onPress={() => getAudioFiles()} />
//     </View>
//   );
// };




// export default Tracklist

// "dependencies": {
//     "@miblanchard/react-native-slider": "^2.1.0",
//     "@react-native-community/slider": "^4.2.4",
//     "@react-native-firebase/app": "^15.0.0",
//     "@react-native-firebase/auth": "^15.0.0",
//     "@react-navigation/drawer": "^6.4.2",
//     "@react-navigation/native": "^6.0.10",
//     "@react-navigation/native-stack": "^6.6.2",
//     "@react-navigation/stack": "^6.2.1",
//     "formik": "^2.2.9",
//     "radium": "^0.26.2",
//     "react": "^17.0.2",
//     "react-native": "^0.69.1",
//     "react-native-gesture-handler": "^2.5.0",
//     "react-native-keyboard-aware-scroll-view": "^0.9.5",
//     "react-native-reanimated": "^2.9.0",
//     "react-native-responsive-screen": "^1.4.2",
//     "react-native-safe-area-context": "^4.3.1",
//     "react-native-screens": "^3.13.1",
//     "react-native-search-list": "^3.0.1",
//     "react-native-swipe-list-view": "^3.2.9",
//     "react-native-swiper": "^1.6.0",
//     "react-native-swiper-flatlist": "^3.0.16",
//     "react-native-vector-icons": "^9.2.0",
//     "yup": "^0.32.11"
//   },