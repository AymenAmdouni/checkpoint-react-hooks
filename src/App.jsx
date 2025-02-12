import React, { useState } from "react";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import { moviesData } from "./components/Data";
import AddMovie from "./components/AddMovie";
import FilterMovies from "./components/FilterMovies";

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const addMovie = (newMovie) => {
    setMovies([newMovie, ...movies]);
  };
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);
  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-between align-items-center">
        <AddMovie addMovie={addMovie} />
        <FilterMovies
          filterTitle={filterTitle}
          setFilterTitle={setFilterTitle}
          filterRate={filterRate}
          setFilterRate={setFilterRate}
        />
      </div>
      <MovieList movies={movies} filterTitle={filterTitle} filterRate={filterRate}/>
    </div>
  );
};

export default App;
