import React,{useState,useRef} from 'react'
import {View,StyleSheet,FlatList,Animated} from 'react-native'
import {onboardingData} from '../utils/onboardingData'
import Onboarding from '../components/Onboarding'
import Paginator from '../components/Paginator'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'



export default function OnboardingScreen() {
  const navigation = useNavigation()
  const[currentIndex,setCurrentIndex] = useState(0)
  const slideRef = useRef(null)
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index)
  }).current
  const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current
  const scrollX  = useRef (new Animated.Value(0)).current

  const scrollTo =async () => {
    if(currentIndex < onboardingData.length -1){
      slideRef.current.scrollToIndex({index:currentIndex + 1})
    } else {
      try {
       await AsyncStorage.setItem('onboarding','done')
       navigation.navigate('Homestack', { screen: 'Home' });
      } catch(error){
        console.log('error' + error)
      }
    }
  }
          return (
            <View style={styles.container}>
              <View style={{flex:3}}>
             <FlatList
                  data={onboardingData}
                  renderItem={({item}) => <Onboarding item={item}/>}
                  horizontal
                  showsHorizontalScrollIndicator={false} 
                  pagingEnabled={true} 
                  bounces={false}
                  keyExtractor={(item) => item.id}
                  onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{
                    useNativeDriver:false,
                  })}
                  onViewableItemsChanged={viewableItemsChanged}
                  scrollEventThrottle={32}
                  viewabilityConfig={viewConfig}
                  ref={slideRef}
                   onEndReached={scrollTo} 
                />
                </View>
                <Paginator data={onboardingData} scrollX = {scrollX}/>
            </View>  
            
            
          )
 
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

