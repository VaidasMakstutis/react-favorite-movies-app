import React from "react";
import { Card } from "react-bootstrap";
import { TMovie } from "./Movies";

interface IShowMoviesProps {
  movies: TMovie[];
}

const ShowMovies = ({ movies }: IShowMoviesProps) => {
  return (
      <div className="movies-container">
        {movies &&
          movies.map((movie, i) => {
            return (
              <Card key={i}>
                <Card.Body>
                    <p className="card-body-info">{movie.Title} {movie.Year}</p>
                    <img src={movie.Poster} title={movie.Title} alt={movie.Title}  />
                </Card.Body>
              </Card>
            );
          })}
      </div>
  );
};

export default ShowMovies;