import {ScrollView,View,StyleSheet} from 'react-native'
import { destinationData } from '../utils/servicedata';
import Destinationcard from './Destinationcard';
export default function PopularDestination() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
           {destinationData.map((item) => {
               return (
                   <View style={styles.container} 
                   key={item.id}>
                   <Destinationcard item={item}/>
                   </View>
               )
           })}
        </ScrollView>    
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
       backgroundColor:'#fff',
       borderWidth:1,
       borderColor:'#e0e0e0',
       borderRadius:10

    }
})


