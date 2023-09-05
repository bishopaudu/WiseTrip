import { StyleSheet,StatusBar} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context"
import Navigation from './Navigation';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"/>
      <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
});
