import { View,StyleSheet,Dimensions,Image} from 'react-native'
import React, {useState} from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';
//import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import PropTypes from 'prop-types';


export default function CarouselScreen() {
  const[activeSlide,setActiveSlide] = useState(0)
  const images = [
    {id:1,url:'https://media.istockphoto.com/id/1417565225/photo/diverse-group-onboard-motor-coach-before-departure.jpg?s=2048x2048&w=is&k=20&c=SfakQY5WERAQPocKOogeN_jUjWCoX-kkDZqE-qCi1Q0='},
    {id:2,url:'https://media.istockphoto.com/id/540124958/photo/coach-bus.jpg?s=2048x2048&w=is&k=20&c=NjBEvvN13tITvAQhI7bKl0Uf1PLAnSfmb6tHhHty8Nc=' },
    {id:3,url:'https://media.istockphoto.com/id/903280714/photo/shuttle-bus.jpg?s=2048x2048&w=is&k=20&c=CTbnH5ELsXYBUWwECB1hgkzj7IABq0XT5vRsrkeb32k='}
  ]
  const renderItem=() => {
    return (
      <Image source = {{uri:images.url}} style={styles.image} />
    )
  }
  return (
    <View>
       <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width - 60}
        onSnapToItem={(index) => setActiveSlide(index)}/>

    <Pagination 
        dotsLength={images.length}
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