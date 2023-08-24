import { StyleSheet,StatusBar} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context"
import Navigation from './Navigation';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        barStyle="light-content"
        translucent={true}
        backgroundColor="black"/>
      <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F0F0F0'
  },
});
