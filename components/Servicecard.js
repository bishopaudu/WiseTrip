import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
//import {useState} from 'react'
export default function Servicecard({item}){
  const navigation = useNavigation()
     const onpress = (routeName) => {
       navigation.navigate(routeName)
        console.log('touched' + routeName)
  }
    return (
        <TouchableOpacity onPress={() => onpress(item.name)}  style={styles.service} key={item.id}>
              <View style={{padding:5}}>
                <Image source={item.img}  resizeMode='cover'/>
                </View>
              <Text style={{fontWeight:'300',padding:15,fontSize:25}}>{item.name}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    service:{  
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',  
      margin:10,
      backgroundColor: '#fff',
      borderWidth:1,
      borderColor:'#e0e0e0',
      borderRadius:5,
      height:'60',
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
      
    }
  
  })