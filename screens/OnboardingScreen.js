import React,{useState,useRef} from 'react'
import {View,StyleSheet,FlatList,Animated} from 'react-native'
import {onboardingData} from '../utils/onboardingData'
import Onboarding from '../components/Onboarding'

export default function OnboardingScreen() {
  const scrollX  = useRef (new Animated.Value(0)).current
          return (
            <View style={styles.container}>
              <FlatList
              data={onboardingData}
              renderItem={({item}) => <Onboarding item={item}/>}
              horizontal
              showHorizontalScrollIndicator
              pagingEnabled
              bounces={false}
              keyExtractor={(item) => item.id}
              onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{
                useNativeDriver:false,
              })}
              />
            </View>  
          )
 
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContainer:'center',
    alignItems:'center'
  }
})

