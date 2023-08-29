import {View,Text,StyleSheet,Dimensions,ImageBackground} from 'react-native'
import './Paginator'

export default function Onboarding({item}) {
    const {width}  = Dimensions.get('window')
    return (
        <View style={[styles.container,{width}]}>
          <ImageBackground source={item.asset} style={[styles.img,{width}]} resizeMode='cover'>
          <View style={{flex:1,justifyContent: 'flex-end', marginBottom: 50, marginHorizontal: 20}}>
          <Text style={styles.title}>{item.title}</Text>
            <Text  style={styles.desc}>{item.desc}</Text>
            </View>
            </ImageBackground>
        </View>
        
      )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    img:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:'100'

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