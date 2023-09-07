import {Text,View,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker'
import { useState,useCallback} from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../components/Header'
import { Entypo } from '@expo/vector-icons';
import {TimePickerData} from '../utils/TimePickerData'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import ButtomSheetComponent from '../components/ButtomSheetComponent'
import randomidgenerator from '../utils/randomidgenerator';
export default function BookingScreen() {
  const randomid = randomidgenerator()
  const[originVal,setOriginVal] = useState(null)
  const[destinationVal,setDestinationVal] = useState(null)
  const[isVisible,setIsvisible] = useState(false)
  const[passengers,setPassengers]= useState(0)
  const[selectTime,setSelectTime] = useState([])
  const[date,setDate] = useState(new Date())
  const[showPicker,setShowPicker] = useState(false);
    const [isFromOpen, setIsFromOpen] = useState(false);
    const [isToOpen, setIsToOpen] = useState(false);
    const [fromValue, setFromValue] = useState(null);
    const [toValue, setToValue] = useState(null);
    const [originItems, setOriginItems] = useState([
    { label: 'Lagos', value: 'Lagos' },
    { label: 'Abuja', value: 'Abuja' }
  ]);
  const [destinationItems, setDestinationItems] = useState([
    { label: 'Kaduna', value: 'Kaduna' },
    { label: 'Abia', value: 'Abia' }
  ]);

  const bookingData ={
    departureDate:date.toLocaleDateString(),
    departureTime:selectTime,
    numOfPassengers:passengers,
    origin:originVal,
    destination:destinationVal,
    id:randomid

  }

  const formattedDate = date.toLocaleDateString()
 
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShowPicker(false);
      setDate(currentDate);
    };

  const onFromOpen = useCallback(() => {
    setIsFromOpen(false);
  }, []);
  const onTopen = useCallback(() => {
    setIsToOpen(false);
  }, []);
    const navigation = useNavigation()
    const nav =() => {
        navigation.goBack()
    }

    const toggleModal =() => {
      setIsvisible(!isVisible)
    }
    
    return (
        <View style={styles.mainContainer}>
          <Header text="Bookings" nav={nav}/>
            <View style={styles.ticketContainer}>
                <View style={{flexDirection:'row',alignItems:"center",margin:10}}>
                <View style={{margin:5}}>
                <FontAwesome5 name="bus" size={20} color="blue" />
                </View>
                <Text style={{marginRight:8,fontSize:20}}>From</Text>
                <DropDownPicker
            open={isFromOpen}
            onOpen={onTopen}
            value={fromValue}
            items={originItems}
            setOpen={setIsFromOpen}
            setValue={setFromValue}
            setItems={setOriginItems}
            placeholder='Select Origin'
            placeholderStyle={{
                color: "grey",
                fontWeight: "bold"
              }}
            style={{ backgroundColor: 'white',width:240}} 
            stickyHeader={true}
            zIndex={3000}
            zIndexInverse={1000}
            onSelectItem={(item) => {
              console.log(item.value);
              setOriginVal(item.value)
            }}
            closeAfterSelecting={true}
           
        />
        </View>
     
        <View style={{flexDirection:'row',alignItems:"center",margin:15,marginRight:15,}}>
                <View style={{margin:5,marginRight:10}}>
                <FontAwesome5 name="bus" size={20} color="blue" />
                </View>
                <Text style={{margin:8,fontSize:20}}>T0</Text>
                <DropDownPicker
            open={isToOpen}
            onOpen={onFromOpen}
            value={toValue}
            items={destinationItems}
            setOpen={setIsToOpen}
            setValue={setToValue}
            setItems={setDestinationItems}
            placeholder='Select Destination'
            placeholderStyle={{
                color: "grey",
                fontWeight: "bold"
              }}
            style={{ backgroundColor: 'white',width:240}}
            stickyHeader={true}
            zIndex={1000}
            zIndexInverse={3000}
            onSelectItem={(item) => {
              console.log(item.value);
              setDestinationVal(item.value)
            }}
            closeAfterSelecting={true}
                    />
        </View>

        <View style={{flexDirection:'row',alignItems:'center',margin:10}}>
        <View style={{margin:5,marginRight:5}}>
        <AntDesign name="calendar" size={24} color="blue" onPress={() => {
        console.log('touched'); 
        setShowPicker(true);}} />     
        </View>
        <Text style={{margin:8,fontSize:20}}>Select Departure Date</Text>
        <Text style={styles.dateStyle}>{formattedDate ? formattedDate : 'Select Date'}</Text>
        {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />)}
      </View>
      
      <View>
        <View style={{flexDirection:'row',alignItems:'center',margin:10}}>
        <Entypo name="back-in-time" size={24} color="blue" />
        <Text style={{marginLeft:10,fontSize:20}}>Select Departure Time</Text>
        <Text style={{marginLeft:10}}>{selectTime}</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: 'row' }}>
        {TimePickerData.map((item, index) => (
          <TouchableOpacity key={index} style={
            selectTime.includes(item.time) ?{
              padding: 10,
              margin: 5,
              backgroundColor: '#e0e0e0',
              borderRadius: 10,
              borderWidth:0.7,
              borderColor:'red'
            }:{
              padding: 10,
              margin: 5,
              backgroundColor: '#fff',
              borderRadius: 10,
              borderWidth:0.7
            }
          } onPress={() => {setSelectTime(item.time);console.log(item.time)}}>
            <Text>{item.time}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
      </View>
      <View style={{flexDirection:'row',margin:5,alignItems:'center',marginTop:10}}>
        <View style={{marginRight:5,marginLeft:5}}>
      <MaterialCommunityIcons name="seat-passenger" size={24} color="blue" />
      </View>
        <Text style={{fontSize:20}}>Passenger</Text>
        <View style={{flexDirection:'row',
        padding:10,
        width:150,
        backgroundColor:'#fff',
        marginLeft:20,
        justifyContent:'space-between',
        borderRadius:10,
        alignItems:'center'}}>

        <EvilIcons name="plus" size={28} color="black" 
        onPress={() => {console.log('plus touched' + passengers); 
        setPassengers(prevPassengers => prevPassengers + 1)}}/>
          <Text style={{fontSize:20}}>{passengers}</Text>
          <EvilIcons name="minus" size={28} color="black" 
            onPress={() => {
              if (passengers > 0) {
                console.log('Minus touched');
                setPassengers(prevPassengers => prevPassengers - 1);
              } else {
                console.log('cannot go beyond zero')
              }
            }} />
              
        </View>
      </View>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => {console.log('bookingbutton');toggleModal()}}>
        <Text style={{textAlign:'center',fontSize:20}}>Book</Text>
      </TouchableOpacity>
        </View>
        {isVisible && <ButtomSheetComponent
         isVisible={isVisible} 
        toggleModal={toggleModal} 
        bookingData={bookingData} />}
        </View>
        
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#fff'
    },
    timeOption: {
      padding: 10,
      margin: 5,
      backgroundColor: '#e0e0e0',
      borderRadius: 10,
      borderWidth:0.7
    },
    dateStyle:{
      marginLeft:15,
      fontSize:20
    },
    buttonStyle:{
      height:50,
      padding:10,
      width:'100',
      backgroundColor:'#5254e3',
      margin:10,
      borderRadius:10
    },
    headerContainer:{
        flexDirection:'row',
        margin:10,
        alignItems:'center'
    },
    headerText:{
        marginLeft:60,
        fontSize:30,
        fontWeight:'400',
    },
    iconContainer:{
        marginRight:40
    },
    ticketContainer:{
        //backgroundColor:'#fff',
        margin:10,
        marginTop:10,
       // borderWidth:1,
        borderColor:'#e0e0e0',
        //borderRadius:10
    },
   
})