import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../../slices/reviewsSlice'; 
import './ChoosePage.css'; 

function ChoosePage() {
  const [value, setValue] = useState(2);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [comment, setComment] = useState('');
  
  const reviews = useSelector(state => state.reviews);
  const dispatch = useDispatch();

  const handleAddReview = () => {
    if (name && country && comment) { 
      const newReview = {
        country, 
        name, 
        rating: value, 
        comment, 
      };
      dispatch(addReview(newReview));

      setName('');
      setCountry('');
      setComment('');
      setValue(2);
    } else {
      alert("Please fill out all fields!");
    }
  };
  return (
    <Box className="container">
      <Typography variant="h4" component="h2" className="title">
      Resort Reviews
      </Typography>
      
      {reviews.map((review, index) => (
        <Box key={index} className="reviewCard">
          <Box className="header">
            <Box className="nameCountry">
              <Typography variant="h6">{review.name} from {review.country}</Typography>
            </Box>
            <Box className="rating">
              <Rating name={`rating-${index}`} value={review.rating} readOnly />
              <span>{review.rating}</span>
            </Box>
          </Box>
          <Box className="content">
            <Typography variant="body1">{review.comment}</Typography>
          </Box>
        </Box>
      ))}

      <Typography component="legend" style={{ marginTop: '20px' }}>Rate our service</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      />

      <Box mt={4}>
        <Typography variant="h6">Add your review</Typography>

        <Box mt={2}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </Box>

        <Box mt={2}>
          <label htmlFor="country">Country:</label>
          <input
            id="country"
            type="text"
            value={country}
            
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter your country"
          />
        </Box>

        <Box mt={2}>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter your comment"
          />
        </Box>

        <Box mt={3}>
          <button onClick={handleAddReview}>
          Add a new review
          </button>
        </Box>
      </Box>
    </Box>
  );
}

export default ChoosePage;
