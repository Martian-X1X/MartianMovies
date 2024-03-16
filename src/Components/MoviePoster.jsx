// MoviePoster.jsx
import React from 'react';

const MoviePoster = ({ title, poster }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={poster} alt={title} className="w-60 h-60 mb-2" />
    </div>
  );
};

export default MoviePoster;
