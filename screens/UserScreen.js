import {View,Text,StyleSheet} from 'react-native'
export default function UserScreen() {
    return (
        <View style={styles.mainContainer}>
            <Text>UserScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
    },
})