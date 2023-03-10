import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { KKAPI } from './KKApi';

const persistUserConfig = {
  key: 'KKUser',
  storage,
  whitelist: ['authorization'],
};

const persistedUserReducer = persistReducer(persistUserConfig, authReducer);

export const createStore = () =>
  configureStore({
    reducer: {
      authorization: persistedUserReducer,
      [KKAPI.reducerPath]: KKAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(KKAPI.middleware),
  });
