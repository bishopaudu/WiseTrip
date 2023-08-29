import React,{useState,useRef} from 'react'
import {View,StyleSheet,FlatList,Animated} from 'react-native'
import {onboardingData} from '../utils/onboardingData'
import {setItem} from '../utils/'
import Onboarding from '../components/Onboarding'
import Paginator from '../components/Paginator'

export default function OnboardingScreen() {
  const[currentIndex,setCurrentIndex] = useState(0)
  const slideRef = useRef(null)
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index)
  }).current
  const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current
  const scrollX  = useRef (new Animated.Value(0)).current

  /*const scrollTo =() => {
    if(currentIndex < onboardingData.length -1){
      slidesRef.current.scrollToIndex({index:currentIndex + 1})
    } else {
      try {

      } catch {

      }
    }
  }*/
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

