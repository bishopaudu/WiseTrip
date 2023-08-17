import { View,StyleSheet,Dimensions,Image} from 'react-native'
import React, {useState} from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';
//import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import PropTypes from 'prop-types';


export default function CarouselScreen() {
  const[activeSlide,setActiveSlide] = useState(0)
  const localImages = [
    {id:1,src:require('../assets/carouselImages/carousel1.jpg')},
  {id:2,src:require('../assets/carouselImages/carousel2.jpg')},
  {id:3,src:require('../assets/carouselImages/carousel3.jpg')},
]
  const renderItem=({item}) => {
    return (
      <Image source = {item.src} style={styles.image} />
    )
  }
  return (
    <View>
       <Carousel
        data={localImages}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width -20}
        onSnapToItem={(index) => setActiveSlide(index)}
        autoplay={true} 
        autoplayInterval={3000} 
        loop={true}
        loopClonesPerSide={localImages.length - 1}/>

    <Pagination 
        dotsLength={localImages.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
    
  )
}

CarouselScreen.propTypes = {
  // Add prop types if needed
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired
    })
  ),
};

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius:10
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
})