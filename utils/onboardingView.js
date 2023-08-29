import {AsyncStorage} from '@react-native-async-storage/async-storage'

export const setItem =async () => {
    try {
        await AsyncStorage.setItem(key,value);
    }catch(error){
        console.log('error')
    }
}

export const getItem =async () => {
    try {
      const value =  await AsyncStorage.getItem(key,value);
      return value;
    }catch(error){
        console.log('error')
    }
}

export const removeItem =async () => {
    try {
        await AsyncStorage.removeItem(key);
      return value;
    }catch(error){
        console.log('error')
    }
}
