import {View,Text,StyleSheet} from 'react-native'


export default function TicketCard({tickets}) {
    return (

        <View style = {styles.mainContainer}>
            <View style={styles.subContainer}>
            <View style={{marginRight:5}}>
            <View style={{flexDirection:'row',margin:4,alignItems:'center'}}>
                <Text style={{fontSize:18,fontWeight:'400'}}>Departure Date:</Text>
                <Text style={{fontSize:17,fontWeight:'300'}}>{tickets.departureDate}</Text>
            </View>
            <View style={{flexDirection:'row',margin:4,alignItems:'center'}}>
                <Text style={{fontSize:18,fontWeight:'400'}}>Departure Time:</Text>
                <Text style={{fontSize:17,fontWeight:'300'}}>{tickets.departureTime}</Text>
            </View>
            </View>
            <View style={{marginRight:10}}>
            <View style={{flexDirection:'row',margin:4,alignItems:'center'}}>
                <Text style={{fontSize:18,fontWeight:'400'}}>From:</Text>
                <Text style={{fontSize:17,fontWeight:'300'}}>{tickets.origin}</Text>
            </View>
            <View style={{flexDirection:'row',margin:4,alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'400'}}>To:</Text>
            <Text style={{fontSize:17,fontWeight:'300'}}>{tickets.destination}</Text>
            </View> 
            </View>
            <Text style={{fontSize:17,fontWeight:'300'}}>{tickets.departureDate}</Text>
            </View>
    </View>
    )}


const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:"row",
        alignItems:'center',
        margin:5,
        backgroundColor:'#fff',
        borderWidth:2,
        borderColor:'gray',
        borderRadius:10
        
    },
    subContainer:{
        flexDirection:'row',
        alignItems:'center',
        width:200,
        height:60,
        justifyContent:'space-between',
        margin:5
    }
})