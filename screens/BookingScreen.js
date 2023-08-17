import {Text,View,StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BookingScreen() {
    const navigation = useNavigation()
    const nav =() => {
        navigation.goBack()
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
            <View style={styles.iconContainer}>
            <AntDesign name="arrowleft" size={24} color="black" onPress={nav}/>
            </View>
            <Text>Book Tickets</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    headerContainer:{
        flexDirection:'row',

    },
    headerText:{
        padding:10,
        fontSize:20,
        fontWeight:'200'
    },
    iconContainer:{
        marginRight:40
    }
})