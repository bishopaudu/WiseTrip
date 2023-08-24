import {Text,View,StyleSheet} from 'react-native'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native';

export default function LogisticsScreen(){
    const navigation = useNavigation()
    const nav =() => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Header text="Logistics" nav={nav}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})