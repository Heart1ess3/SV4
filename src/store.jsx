import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import reviewsReducer from './slices/reviewsSlice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    reviews: reviewsReducer
  },
});

export default store; 