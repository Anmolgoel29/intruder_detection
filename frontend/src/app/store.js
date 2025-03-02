import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/UserContext';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
