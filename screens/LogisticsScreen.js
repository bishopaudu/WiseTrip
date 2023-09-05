import {Text,View,StyleSheet,TextInput,TouchableOpacity,ScrollView} from 'react-native'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native';
import { TimePickerData } from '../utils/TimePickerData';
import {deliveryData} from '../utils/servicedata';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';


export default function LogisticsScreen(){
    const[selectTime,setSelectTime] = useState([])
    const[selectDate,setSelectDate] = useState([])

    const[date,setDate] = useState(new Date())
    const[showPicker,setShowPicker] = useState(false);
    const navigation = useNavigation()
    const nav =() => {
        navigation.goBack()
    }
      const formattedDate = date.toLocaleDateString()

      const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowPicker(false);
        setDate(currentDate);
      };

    return (
        <View style={styles.container}>
            <Header text="Logistics" nav={nav}/>
            <View style={styles.detailsContainer}>
                <View style={styles.box}>
                    <Text style={styles.textStyle}>Pending</Text>
                    <Text style={styles.textStyle}>0</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.textStyle}>Delivered</Text>
                    <Text style={styles.textStyle}>5</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.textStyle}>Total Orders</Text>
                    <Text style={styles.textStyle}>5</Text>
                </View>
            </View>
            <View>
            <TextInput
            placeholder='Enter Delivery Adress'
            style={styles.textArea}
            numberOfLines={3}
            />
            </View>
            <Text style={{marginLeft:10,fontSize:18}}>Select PickUp Time</Text>
            <View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <View style={styles.customButtonStyle}>
        {TimePickerData.map((item, index) => (
          <TouchableOpacity key={index} style={
            selectTime.includes(item.time) ?{
              padding: 10,
              margin: 5,
              backgroundColor: '#e0e0e0',
              borderRadius: 10,
              borderWidth:0.7,
              borderColor:'blue',
              //backgroundColor:'blue'
            }:{
              padding: 10,
              margin: 5,
              backgroundColor: '#e0e0e0',
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
      <View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              <View style={[styles.customButtonStyle,{marginLeft:60}]}>
              {deliveryData.map((item, index) => (
          <TouchableOpacity key={index} style={
            selectDate.includes(item.time) ?{
              padding: 10,
              margin: 5,
              backgroundColor: '#e0e0e0',
              borderRadius: 10,
              borderWidth:0.7,
              borderColor:'blue',
            }:{
              padding: 10,
              margin: 5,
              backgroundColor: '#fff',
              borderRadius: 10,
              borderWidth:0.7,
            }
          } onPress={() => {setSelectDate(item.time);console.log(item.time)}}>
              <Text>{item.time}</Text>
          </TouchableOpacity>   
        ))}
              </View>
          </ScrollView>
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
      <TouchableOpacity style={styles.buttonStyle} onPress={() => {console.log('bookingbutton');}}>
        <Text style={{textAlign:'center',fontSize:20,color:'white'}}>ORDER</Text>
      </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    detailsContainer:{
        flexDirection:'row',
        margin:5,
        alignItems:'row',
        justifyContent:'space-around'
    },
    box:{
    height:70,
    width:80,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#e0e0e0',
    borderRadius:10,
    alignItems:'center',
    margin:10,
    flex:1
    },
    textStyle:{
    marginBottom:10,
    fontSize:18,
    },
    inputStyle:{
    margin:10,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#e0e0e0',
    borderRadius:10,
    },
    textArea:{
        borderWidth: 1,
        paddingTop: 10,
        borderColor: 'gray',
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 16,
        margin:10,
        borderRadius:8,
        height:80,
    },
    buttonStyle:{
        height:50,
        padding:10,
        width:'100',
        backgroundColor:'#5254e3',
        margin:10,
        borderRadius:10
      },
      customButtonStyle:{
        flexDirection: 'row',
        marginLeft:10,
        marginRight:10,
        marginTop:5
      },
      dateStyle:{
        marginLeft:15,
        fontSize:20
      },
})