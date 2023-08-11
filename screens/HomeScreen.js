import {View,Text,StyleSheet,Pressable, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import CarouselScreen from '../components/CarouselScreen';


export default function HomeScreen(){
    const navigation = useNavigation()
    const userNav =() => {
        navigation.navigate('Auth')
    }

    const notificationNav =() => {
        navigation.navigate('Notification')
    }
    return (
        <>
        <View style={styles.container}>
            <Pressable style={styles.iconsStyle} onPress={userNav}>
            <AntDesign name="user" size={30} color="black" />
            </Pressable>
            <Text style={{fontWeight:'bold',letterSpacing:2,fontSize:30}}>WiseTrips</Text>
            <Pressable style={styles.iconsStyle} onPress={notificationNav}>
            <Ionicons name="notifications" size={30} color="blue" />
            </Pressable>
        </View>
        <CarouselScreen/>
        <View>
            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
            <Text style={{fontSize:20,marginLeft:20}}>Our Services</Text>
            <TouchableOpacity>
            <Text style={{fontSize:20,marginLeft:20,marginRight:20}}>See More</Text>
            </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between"
    },
    iconsStyle:{
        //backgroundColor:'gray',
        padding:10,
        borderRadius:30,
        margin:5
    }
})
