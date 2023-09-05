import { BottomSheet } from '@rneui/themed';
import {View,Text,Button,TouchableOpacity,StyleSheet} from'react-native'

export default function ButtomSheetComponent({isVisible,toggleModal,bookingData}) {
  console.log(bookingData)
    return(
        <BottomSheet isVisible={isVisible}>
        <View style={styles.container}>
          <View style={styles.sub}>
          <Text style={{textAlign:'center',fontSize:18,fontWeight:'300'}}>Booking Summary</Text>
         <Text style={styles.textStyle}>Origin:{bookingData.origin}</Text>
          <Text style={styles.textStyle}>Destination: {bookingData.destination}</Text>
          <Text style={styles.textStyle}>Departure Date: {bookingData.departureDate}</Text>
          <Text style={styles.textStyle}>Dparture Time: {bookingData.departureTime}</Text>
          <Text style={styles.textStyle}>Passengers: {bookingData.numOfPassengers}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => {console.log('Booking Confirmed');toggleModal()}}>
            <Text style={{color:'white'}}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} title="Cancel" onPress={() => {toggleModal();console.log('touched closed modal')}}>
            <Text style={{color:'white'}}>Cancel</Text>
          </TouchableOpacity>
          
          </View>
          </View>
      </BottomSheet>
    )
}

const styles  = StyleSheet.create({
container:{
  backgroundColor:'#fff',
   padding: 16,
   height:300,
   borderTopLeftRadius:20,
   borderTopRightRadius:20,
   borderBottomLeftRadius: 20, 
  borderBottomRightRadius: 20,
  margin:5
},
sub:{
  flex:1
},
textStyle:{
  fontSize:20,
  margin:8,
},
buttonStyle:{
  borderRadius:8,
  backgroundColor:'blue',
  paddingVertical: 10,
  paddingHorizontal: 20,

}
})

