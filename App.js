import { StyleSheet,StatusBar} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context"
import Navigation from './Navigation';
import {Provider} from 'react-redux'
import { store } from './redux/store';
export default function App() {

  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"/>
      <Navigation/>
      </SafeAreaView>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
});
