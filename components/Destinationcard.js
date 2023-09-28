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
            <Text style={{fontSize:20,fontWeight:'400'}}>{item.route.from} To {item.route.to}</Text>
            <Text style={{fontSize:15}}>From -> {item.price}</Text>
            <Text style={{fontSize:12}}>120 Trips</Text>
        </View>
        <TouchableOpacity onPress={() => Routes()} style={{backgroundColor:'blue',borderRadius:10}}>
            <Text style={{padding:8,
                margin:5,
               // borderRadius:10,
                color:'white'
               // borderColor:'#5254e3',
               // borderWidth:0.7,
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
       
    },
    imageContainer:{
        borderRadius:5,
        padding:10,
        width:150,
        height:120
    },
    subContainer:{
        flex:1,
        //justifyContent:'center',
        //alignItem:'center',
        marginLeft:10
    },
   
})