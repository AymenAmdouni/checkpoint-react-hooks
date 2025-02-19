import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-stars";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "25rem", objectFit: "contain" }}
          variant="top"
          src={movie.posterUrl}
          name={movie.title}
        />
        <Card.Body>
          <Card.Title>
            <b>{movie.title}</b>
          </Card.Title>
          <Card.Text
            style={{
              minHeight: "9rem",
              maxHeight: "9rem",
              border: "1px solid lightgray",
              padding: "0.5rem",
              overflow: "scroll",
              borderRadius: "5px",
            }}
          >
            {movie.description}
          </Card.Text>
          <div className="d-flex justify-content-center gap-5">
            <p className="py-2">Rating : {movie.rate} /5</p>
            <ReactStars
              className=""
              edit={false}
              count={5}
              size={24}
              color2={"#ffd700"}
              value={movie.rate}
            />
          </div>
          <div className="d-flex justify-content-between">
            <Button
              onClick={() => navigate(`/description/${movie.id}`)}
              variant="dark"
            >
              Description
            </Button>
            <Button
              variant="outline-dark"
              onClick={() => navigate(`/trailer/${movie.id}`)}
            >
              watch trailer
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
