import { StyleSheet,StatusBar} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context"
import Navigation from './Navigation';
import {Provider} from 'react-redux'
import { store } from './redux/store';
import {persistedStore} from './redux/store'
import {PersistGate} from 'redux-persist/lib/integration/react'
export default function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"/>
      <Navigation/>
      </SafeAreaView>
      </PersistGate>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
});
