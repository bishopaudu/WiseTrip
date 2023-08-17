import { StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context"
import Navigation from './Navigation';
import {StatusBar} from 'react-native'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar hidden={false}
      barStyle="light-content"
      translucent={true} />
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
