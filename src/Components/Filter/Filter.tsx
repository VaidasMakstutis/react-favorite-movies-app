import React from "react";
import { Button } from "react-bootstrap";
import { TMovie } from "../Movies/Movies";

interface IFilterProps {
  movies: TMovie[];
  setMovies: React.Dispatch<React.SetStateAction<TMovie[]>>;
}

const Filter = ({ movies, setMovies }: IFilterProps) => {
  const moviesOldestThan2000 = () => {
    const year = 2000;
    setMovies(movies.filter(movie => movie.Year < year));
  };

  return (
    <div className="mt-4">
      <label className="mx-2">Filter options:</label>
      <Button variant="primary" onClick={moviesOldestThan2000}>
        Movies oldest than 2000
      </Button>
    </div>
  );
};

export default Filter;