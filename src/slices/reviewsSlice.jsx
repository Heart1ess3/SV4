import { createSlice } from '@reduxjs/toolkit';

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: [
    { 
      country: 'France', 
      name: 'Jean', 
      rating: 5,
      comment: 'La Vallée Blanche offers breathtaking trails with stunning views of Mont Blanc. A must-visit for any skier!',
    },
    { 
      country: 'France', 
      name: 'Sophie', 
      rating: 4, 
      comment: 'Face Bellevarde is challenging yet rewarding. The scenery is absolutely magnificent!',
    },
    { 
      country: 'France', 
      name: 'Pierre', 
      rating: 5, 
      comment: 'La Sarenne is my favorite! The long runs and beautiful views make it unforgettable.',
    },
    { 
      country: 'Austria', 
      name: 'Lukas', 
      rating: 5, 
      comment: 'The Streif is legendary! The adrenaline rush from the steep sections is unmatched.',
    },
    { 
      country: 'Italy', 
      name: 'Giulia', 
      rating: 4, 
      comment: 'Canalone-Miramonti offers a thrilling experience with stunning views of the Dolomites. Perfect for advanced skiers!',
    },
  ],
  reducers: {
    addReview(state, action) {
      state.push(action.payload);
    },
    updateReview(state, action) {
      const index = state.findIndex(review => review.name === action.payload.name);
      if (index !== -1) {
        state[index] = action.payload;
      }
    }
  }
});

export const { addReview, updateReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;
