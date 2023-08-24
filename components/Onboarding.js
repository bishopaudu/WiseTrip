import {View,Text,StyleSheet,Dimensions} from 'react-native'
import LottieView from "lottie-react-native";

export default function Onboarding({item}) {
    const {width}  = Dimensions.get('window')
    return (
        <View style={[styles.container,{width}]}>
          <LottieView 
          source={item.asset} autoPlay loop style={[styles.animation,{width}]}/>

          <View style={{flex:0.3}}>
          <Text style={styles.title}>{item.title}</Text>
            <Text  style={styles.desc}>{item.desc}</Text>
          </View>
        </View>
        
      )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    animation:{
      flex:0.7,
      justifyContent:'center',
      alignItems:'center'
    },
    title:{
      fontWeight:'800',
      fontSize:28,
      marginBottom:10,
      color:'#493d8a',
      textAlign:'center'  
    },
    desc:{
      fontWeight:'300',
      fontSize:28,
      paddingHorizontal:64,
      color:'#62656b',
      textAlign:'center'  
    }
  })