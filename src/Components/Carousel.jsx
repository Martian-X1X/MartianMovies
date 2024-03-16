import React, { useState } from 'react';
import MoviePoster from './MoviePoster';

const Carousel = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? movies.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === movies.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full">
      <div className="flex overflow-x-hidden p-4 justify-center">
        {movies.map((movie, index) => (
          <div key={index} className={`flex-none w-64 sm:w-80 md:w-96 lg:w-108 xl:w-128 ${index === currentIndex ? 'visible' : 'hidden'}`}>
            <div className="relative">
              <MoviePoster title={movie.Title} poster={movie.Poster} />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-transparent to-black p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-white font-bold text-sm">{movie.Title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="absolute top-1/2 left-80 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10" onClick={handlePrev}>
        Prev
      </button>
      <button className="absolute top-1/2 right-80 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
