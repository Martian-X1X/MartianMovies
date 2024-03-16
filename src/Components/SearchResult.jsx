// SearchResult.jsx
import React from "react";

const SearchResult = ({ searchResults }) => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-bold mt-8 mb-4">Search Results</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {searchResults.map((result) => (
          <div key={result.imdbID} className="border rounded overflow-hidden">
            <img
              src={result.Poster}
              alt={result.Title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{result.Title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
