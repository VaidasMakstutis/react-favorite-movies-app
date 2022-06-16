import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { TMovie } from "../Movies/Movies";

interface IFilterProps {
  movies: TMovie[];
  setFilteredMovies: React.Dispatch<React.SetStateAction<TMovie[]>>;
  years: string[];
}

const Filter = ({ movies, setFilteredMovies, years }: IFilterProps) => {

  const [filterByYear, setFilterByYear] = useState("");

  const handleChange:React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFilterByYear(event.target.value);
    setFilteredMovies(() => movies.filter(movie => movie.Year === event.target.value));
  };

  return (
    <div className="d-flex justify-content-center mt-4">
        <Form.Select className="w-25" value={filterByYear} onChange={handleChange}>
          <option value="0">Select movie year</option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Form.Select>
    </div>
  );
};

export default Filter;