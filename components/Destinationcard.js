import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Destinationcard({item}){
    const navigation = useNavigation()
    const Routes = () => {
        navigation.navigate('Routes')
    }
    return (
        <View style={styles.container} key={item.id}>
        <Image source={item.img} resizeMode='cover' style={styles.imageContainer}/> 
        <View style={styles.subContainer}>
            <Text>{item.route.from} To {item.route.to}</Text>
            <Text>from {item.price}</Text>
            <Text>120 Trips</Text>
        </View>     
        <FontAwesome name="arrow-circle-right" size={24} color="black" onPress={Routes}/>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginRight:10,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
        borderRadius:5,
        padding:10,
        width:150,
        height:120
    },
    subContainer:{
        flex:1,
        justifyContent:'center',
        alignItem:'center',
        marginLeft:10
    },
   
})