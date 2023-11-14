// components/StarRating.tsx
'use client'
import React from 'react';
import StarRatings from 'react-star-ratings';

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="white"
      starEmptyColor="gray"
      numberOfStars={5}
      name="rating"
      starDimension="20px"
      starSpacing="2px"
    />
  );
};

export default StarRating;
