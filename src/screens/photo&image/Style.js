import { Dimensions, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
   
});