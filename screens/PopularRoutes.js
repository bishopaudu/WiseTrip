import {View,Text,TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Routes() {
    const navigation = useNavigation()
    const nav = () => {
        navigation.goBack()
    }
    return (
        <View>
            <TouchableOpacity style={{marginLeft:5,padding:5}} onPress={nav}>
           <AntDesign name="arrowleft" size={24} color="black"/>
           </TouchableOpacity>
        </View>
    )
}