import { View, Text,StyleSheet,TextInput, TouchableOpacity,ImageBackground} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function AuthScreen() {
  const navigation = useNavigation()
  const logNav =() => {
    navigation.navigate('Home')
  }
  return (
    <ImageBackground source={require('../assets/images/img1.jpg')} style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.titleText}>WiseTrips</Text>
      <View style={styles.inputView}>
        <TextInput placeholder='FirstName' style={{color:'#000'}}/>
      </View>
      <View style={styles.inputView}>
        <TextInput placeholder='Email' style={{color:'#000'}}/>
      </View>
      <View style={styles.inputView}>
        <TextInput placeholder='Password' secureTextEntry style={{color:'#000'}}/>
      </View>
      <TouchableOpacity style={styles.buttonStyle} onPress={logNav}>
        <Text style={{textAlign:'center'}}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={{textAlign:'center'}}>SIGNUP</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  inputView:{
    width:'80%',
    borderRadius:25,
    padding:20,
    backgroundColor:"#fff",
    marginBottom:10,
    height:70,
  },
  buttonStyle:{
    padding:15,
    backgroundColor:"#fb5b5a",
    borderRadius:20,
    width:'80%',
    marginBottom:18,
    height:50,
    marginTop:8
  },
  titleText:{
    fontWeight: "bold",
    fontSize:50,
    color:"#fff",
    marginBottom: 20,
  }

})