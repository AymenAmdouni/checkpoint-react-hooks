import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, filterTitle, filterRate }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around mt-3">
      {filterRate > 0
        ? movies
            .filter(
              (movie) =>
                movie.rate === filterRate &&
                movie.title
                  .toUpperCase()
                  .includes(filterTitle.toUpperCase().trim())
            )
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)
        : movies
            .filter((movie) =>
              movie.title
                .toUpperCase()
                .includes(filterTitle.toUpperCase().trim())
            )
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)}
    </div>
  );
};

export default MovieList;
