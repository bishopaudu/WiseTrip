import { View, Text,StyleSheet,TextInput, TouchableOpacity,ImageBackground} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../utils/fireBaseConfig'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function AuthScreen() {
  const auth = FIREBASE_AUTH
  const[email,setEmail] = useState(null)
  const[password,setPassword] = useState(null)
  const navigation = useNavigation()

  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth,email,password)
      nav.navigate('Home')
      console.log(response)
      alert('Signed In Successful')
    } catch (err) {
      console.log(err)
    }
  }

  const signUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth,email,password)
      console.log(response)
      alert('Signed Up Successfull')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <ImageBackground source={require('../assets/images/passenger.jpg')} style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.titleText}>WiseTrips</Text>
      {/*<View style={styles.inputView}>
        <TextInput placeholder='FirstName' style={{color:'#000'}}/>
  </View>*/}
      <View style={styles.inputView}>
        <TextInput placeholder='Email' style={{color:'#000'}} 
        onChangeText={(text) => setEmail(text)}/>
      </View>
      <View style={styles.inputView}>
        <TextInput placeholder='Password' secureTextEntry 
        style={{color:'#000'}} onChangeText={(text) => setPassword(text)}/>
      </View>
      <TouchableOpacity style={styles.buttonStyle} onPress={signIn}>
        <Text style={{textAlign:'center'}}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={signUp}>
        <Text style={{textAlign:'center'}}>Create Account</Text>
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
    backgroundColor:'#c1c9c4',
    marginBottom:10,
    height:70,
  },
  buttonStyle:{
    padding:15,
    backgroundColor:'#c1c9c4',
    borderRadius:18,
    width:'80%',
    marginBottom:18,
    height:50,
    marginTop:5
  },
  titleText:{
    fontWeight: "bold",
    fontSize:50,
    color:"#fff",
    marginBottom: 20,
  }

})