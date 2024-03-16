// MovieComponent.js
import React from 'react';

const MovieComponent = ({ movie }) => {
  const { Title, Year, Poster } = movie;

  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full" src={Poster} alt={Title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{Title}</div>
        <p className="text-gray-700 text-base">
          Year: {Year}
        </p>
      </div>
    </div>
  );
};

export default MovieComponent;
