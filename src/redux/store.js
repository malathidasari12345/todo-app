import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoReducer';
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: todoReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(thunk), 
});

export default store;



