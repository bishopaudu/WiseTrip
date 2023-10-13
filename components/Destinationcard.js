import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Destinationcard({item}){
    const navigation = useNavigation()
    const Routes = () => {
        navigation.navigate('Book Ticket')
    }
    return (
        <View style={styles.container} key={item.id}>
        <Image source={item.img} resizeMode='cover' style={styles.imageContainer}/> 
        <View style={styles.subContainer}>
            <Text style={{fontSize:15,fontWeight:'400'}}>{item.route.from} To {item.route.to}</Text>
            <Text style={{fontSize:15}}>From -> {item.price}</Text>
            <Text style={{fontSize:12}}>120 Trips</Text>
        </View>
        <TouchableOpacity onPress={() => Routes()} style={{backgroundColor:'blue',borderRadius:10}}>
            <Text style={{padding:8,
                margin:5,
                color:'white'
                }}>Book</Text>
        </TouchableOpacity>
        
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginRight:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5

       
    },
    imageContainer:{
       borderTopLeftRadius:5,
       borderBottomLeftRadius:5,
       padding:5,
        width:120,
        height:100,
    },
    subContainer:{
        flex:1,
        marginLeft:10
    },
   
})