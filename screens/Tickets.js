import {View,Text} from 'react-native'
import Header from  '../components/Header'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
export default function Tickets(){
    const tickets = useSelector((state) =>state.ticket.tickets)
    useEffect(() => {
        console.log(tickets)
    },[tickets])
    return (
        <View>
            <Header text='Tickets'/>
        </View>
    )
}