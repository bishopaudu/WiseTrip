import {Text,View,StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker'
import { useState } from 'react';

export default function BookingScreen() {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]);
    const navigation = useNavigation()
    const nav =() => {
        navigation.goBack()
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
            <View style={styles.iconContainer}>
            <AntDesign name="arrowleft" size={30} color="black" onPress={nav}/>
            </View>
            <Text style={styles.headerText}>Book Tickets</Text>
            </View>
            <View style={styles.ticketContainer}>
                <View style={{flexDirection:'row',alignItems:"center",margin:20}}>
                <Text style={{marginRight:10,fontSize:20}}>From</Text>
                <DropDownPicker
            open={isOpen}
            value={value}
            items={items}
            setOpen={setIsOpen}
            setValue={setValue}
            setItems={setItems}
            style={{ backgroundColor: 'white',width:250}} 
        />
        </View>
        <View style={{flexDirection:'row',alignItems:"center",margin:20}}>
                <Text style={{marginRight:10,fontSize:20}}>From</Text>
                <DropDownPicker
            open={isOpen}
            value={value}
            items={items}
            setOpen={setIsOpen}
            setValue={setValue}
            setItems={setItems}
            style={{ backgroundColor: 'white',width:250}}
        />
        </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    headerContainer:{
        flexDirection:'row',
        margin:10
    },
    headerText:{
        marginLeft:60,
        fontSize:20,
        fontWeight:'300',
    },
    iconContainer:{
        marginRight:40
    },
    ticketContainer:{
        backgroundColor:'red',
        height:400,
        margin:10,
        marginTop:30
    }
})