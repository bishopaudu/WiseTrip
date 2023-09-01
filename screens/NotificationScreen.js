import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Notifications</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:20,
    color:'#000',
  }
})