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
    alignItem:'center'
  },
  text:{
    fontSize:40,
    letterSpacing:10,
    color:'#000'
  }
})