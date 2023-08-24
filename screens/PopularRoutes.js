import {View,Text,TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header'

export default function Routes() {
    const navigation = useNavigation()
    const nav = () => {
        navigation.goBack()
    }
    return (
        <View>
            <Header text="Routes" nav={nav}/>
        </View>
    )
}