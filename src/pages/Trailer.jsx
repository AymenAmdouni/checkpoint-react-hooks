import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { moviesData } from "../components/Data";
import { Button } from "react-bootstrap";

const Trailer=()=> {
  const { id } = useParams();
  const [movie, setMovies] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const foundMovie = moviesData.find((movie) => movie.id === id);
    setMovies(foundMovie);
  }, [id]);
  return (
    <div>
      <h1> watch trailer</h1>
      <iframe
        width={650}
        height={400}
        title="trailer"
        src={movie.trailer}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Button onClick={() => navigate(-1)} variant="outline-danger">
        Back
      </Button>
    </div>
  );
}

export default Trailer;
