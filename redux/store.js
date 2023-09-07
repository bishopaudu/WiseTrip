import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TicketReducer from './TicketReducer';

// Create the persistConfig object
const persistConfig = {
  key: 'root', 
  storage: AsyncStorage, 
};

const persistedReducer = persistReducer(persistConfig, TicketReducer);

export const store = configureStore({
  reducer: {
    ticket: persistedReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
  
});


export const persistedStore = persistStore(store);
