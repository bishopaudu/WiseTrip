import {View,StyleSheet,Dimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from "lottie-react-native";

const {width}  = Dimensions.get('window')
export default function OnboardingScreen() {
  const navigation = useNavigation()

  const handleSkip=() => {
    navigation.navigate('Home')
  }

  const handleDone=() => {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
    <Onboarding
    onSkip={handleSkip}
    onDone={handleDone}
    bottomBarHighlight={false}
    pages={[
    { 
      backgroundColor: '#fff',
      image: (
        <View style={{width:width*0.9,height:width}}>
        <LottieView source={require("../assets/images/lottieAnimations/travel1.json")}
         autoPlay loop />
         </View>
      ),
      title: 'Onboarding',
      subtitle: 'Enjoy Safer Trips Across The Country',
    } ,
    {
      backgroundColor: '#fff',
      image:  (
        <View style={{width:width*0.9,height:width}}>
        <LottieView source={require("../assets/images/lottieAnimations/travel2.json")}
         autoPlay loop />
         </View>
      ),
      title: 'Onboarding',
      subtitle: 'Spend Less On Your Trips',
    } ,
    {
      backgroundColor: '#fff',
      image: (
        <View style={{width:width*0.9,height:width}}>
        <LottieView source={require("../assets/images/lottieAnimations/travel3.json")}
         autoPlay loop />
         </View>
      ),
      title: 'Onboarding',
      subtitle: 'Enjoy The Comfort We Provide',
    } ,
]}
/>
</View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})