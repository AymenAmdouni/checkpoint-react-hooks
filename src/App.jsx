import React, { useState } from "react";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import { moviesData } from "./components/Data";
import AddMovie from "./components/AddMovie";
import FilterMovies from "./components/FilterMovies";
import { Route, Router, Routes } from "react-router-dom";
import TvShows from "./pages/TvShows";
import Description from "./pages/Description";
import Trailer from "./pages/Trailer";

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const addMovie = (newMovie) => {
    setMovies([newMovie, ...movies]);
  };
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);
  return (
    <div>
      <NavBar filterTitle={filterTitle} setFilterTitle={setFilterTitle} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="d-flex justify-content-between align-items-center">
                <AddMovie addMovie={addMovie} />
                <FilterMovies
                  filterTitle={filterTitle}
                  setFilterTitle={setFilterTitle}
                  filterRate={filterRate}
                  setFilterRate={setFilterRate}
                />
              </div>
              <MovieList
                movies={movies}
                filterTitle={filterTitle}
                filterRate={filterRate}
              />
            </>
          }
        />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/description/:id" element={<Description />} />
        <Route path="/trailer/:id" element={<Trailer />} />

      </Routes>
    </div>
  );
};

export default App;
