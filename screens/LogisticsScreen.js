import {Text,View,StyleSheet} from 'react-native'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native';
import { Input } from '@rneui/base';


export default function LogisticsScreen(){
    const navigation = useNavigation()
    const nav =() => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Header text="Logistics" nav={nav}/>
            <View>
                <Text>Hello</Text>
                <Input
                placeholder='BASIC INPUT'
rrr                

                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    inputStyle:{

    }
})