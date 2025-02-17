import React, { useEffect, useState } from "react";
import {   useNavigate, useParams } from "react-router-dom";
import { moviesData } from "../components/Data";
import { Button } from "react-bootstrap";
function Description() {
  const { id } = useParams();
  const [movie, setMovies] = useState({});
      const navigate = useNavigate();


  useEffect(() => {
    const foundMovie = moviesData.find((movie) => movie.id === id);
    setMovies(foundMovie)
  }, [id]);

  return (
    <div className="container">
      <h1 className="text-center"> Movie Description </h1>
      <h3> {movie.description}</h3>
      <Button onClick={() => navigate(-1)} variant="outline-danger">
        Back
      </Button>
    </div>
  );
}

export default Description;
