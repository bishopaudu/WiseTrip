import {View,Text,StyleSheet,FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header'
import  {destinationData} from '../utils/servicedata'
import Destinationcard from '../components/Destinationcard';

export default function Routes() {
    const navigation = useNavigation()
    const nav = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Header text="Routes" nav={nav}/>
            <View style={{marginLeft:5,marginRight:5}}>
                <FlatList
                data={destinationData}
                renderItem={({item}) => 
                <View style={{
                    marginBottom:10,
                    marginLeft:10,
                    marginRight:10,
                   backgroundColor:'#e0e0e0',
                   borderRadius:10}} >
                <Destinationcard item={item}/>
                </View>
                }
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        padding:0
    }
})