import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context"
import HomeScreen from './screens/HomeScreen';
import Navigation from './Navigation';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
