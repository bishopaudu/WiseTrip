import {ScrollView,View} from 'react-native'
import { destinationData } from '../utils/servicedata';
import Destinationcard from './Destinationcard';
export default function PopularDestination() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
           {destinationData.map((item) => {
               return (
                   <View style={{
                    marginBottom:10,
                    marginLeft:10,
                    marginRight:10,
                   backgroundColor:'#c1c9c4',
                   borderRadius:10}} 
                   key={item.id}>
                   <Destinationcard item={item}/>
                   </View>
               )
           })}
        </ScrollView>    
    )
}

