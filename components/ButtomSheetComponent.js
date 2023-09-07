import { BottomSheet } from '@rneui/themed';
import {View,Text,TouchableOpacity,StyleSheet,ScrollView} from'react-native'
import { useDispatch } from 'react-redux';
import { addTicket } from '../redux/TicketReducer';

export default function ButtomSheetComponent({isVisible,toggleModal,bookingData}) {
  console.log(bookingData)
  const dispatch = useDispatch()
  const confirm =() => { 
            console.log('Booking Confirmed');
            dispatch(addTicket(bookingData))
            toggleModal()}
  const cancel = () => {
              toggleModal();
              console.log('touched closed modal')
  }                     
    return(
        <BottomSheet isVisible={isVisible}>
        <View style={styles.container}>
          <ScrollView style={styles.sub} showsVerticalScrollIndicator={false}>
          <Text style={{textAlign:'center',fontSize:18,fontWeight:'300'}}>Booking Summary</Text>
          <Text style={styles.textStyle}>Ticketid: {bookingData.id}</Text>
         <Text style={styles.textStyle}>Origin:{bookingData.origin}</Text>
          <Text style={styles.textStyle}>Destination: {bookingData.destination}</Text>
          <Text style={styles.textStyle}>Departure Date: {bookingData.departureDate}</Text>
          <Text style={styles.textStyle}>Dparture Time: {bookingData.departureTime}</Text>
          <Text style={styles.textStyle}>Passengers: {bookingData.numOfPassengers}</Text>
          </ScrollView>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => confirm()}>
            <Text style={{color:'white'}}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} title="Cancel" onPress={() => cancel()}>
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

