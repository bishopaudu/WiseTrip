import {View,Text,StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Header({text,nav}){

    return (
        <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
        <Ionicons name="chevron-back" size={30} color="blue" onPress={nav}/>
        </View>
        <Text style={styles.headerText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
        marginRight:40,
        padding:2,
        //borderRadius:50,
       // backgroundColor:'gray'
    },
})