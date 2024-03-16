// Hero.jsx
import React, { useEffect, useState } from 'react';
import Carousel from '../Components/Carousel';

const Hero = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await fetch(
          'https://www.omdbapi.com/?s=movie&type=movie&apikey=3fb7fe20'
        );
        const data = await response.json();
        if (data.Search) {
          // Sort the movies by ratings in descending order
          const sortedMovies = data.Search.sort((a, b) =>
            parseFloat(b.imdbRating) - parseFloat(a.imdbRating)
          );
          // Take the top 5 movies
          const top5Movies = sortedMovies.slice(0, 10);
          setTopRatedMovies(top5Movies);
        }
      } catch (error) {
        console.error('Error fetching top-rated movies:', error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Top 5 Highest Rated Movies</h2>
      <Carousel movies={topRatedMovies} />
    </div>
  );
};

export default Hero;
