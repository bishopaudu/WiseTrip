import {View,Text,StyleSheet,FlatList} from 'react-native'
import Header from  '../components/Header'
import { useSelector } from 'react-redux'
import {useEffect} from 'react'
import TicketCard from '../components/TicketCard'
import {useNavigation} from '@react-navigation/native'
 export default function Tickets(){
     const navigation = useNavigation()
     const nav = () => {
         navigation.goBack()
     }
    const tickets = useSelector((state) =>state.ticket.tickets)
    useEffect(() => {
        console.log(tickets)
    },[tickets])
   
    return (
        <View style={{backgroundColor:'#fff',flex:1}}>
            <Header text='Tickets' nav={nav}/>
            <View style={styles.detailsContainer}>
            <View style={styles.box}>
                    <Text style={styles.textStyle}>Bought</Text>
                    <Text style={styles.textStyle}>{tickets.length}</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.textStyle}>Pending</Text>
                    <Text style={styles.textStyle}>0</Text>
                </View>
            </View>
            <FlatList
            data={tickets}
            renderItem={({ item }) => <TicketCard tickets={item} />}
            keyExtractor={(item) => item.id.toString()}
            /> 
           {/* <TicketCard/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
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
})