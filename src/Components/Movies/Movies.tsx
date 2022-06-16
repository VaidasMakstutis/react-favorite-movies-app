import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import ShowMovies from "./ShowMovies";
import Filter from "../Filter";

export interface TMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const Movies = () => {

  const [movies, setMovies] = useState<TMovie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<TMovie[]>([]);
  const [years, setYears] = useState<string[]>([]);

  const [user] = useAuthState(auth);
  const navigate = useNavigate();


  useEffect(() => {
    if (!user) navigate("/");
  }, [user]);

  const getResponse = async () => {
    await axios.get(`https://www.omdbapi.com/?s=Batman&apikey=887f9f42`).then(res => {
      const data: TMovie[] = res.data.Search;
      setMovies([...data]);
      setYears(data.map(movie => movie.Year).sort((a, b) => a.localeCompare(b)));
    });
  };

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <>
      <div className="text-center mb-3">
        <Filter movies={movies} years={years} setFilteredMovies={setFilteredMovies} />
      </div>
      <h4>Your Favorite Movies List</h4>
      <ShowMovies movies={filteredMovies.length ? filteredMovies : movies} />
    </>
  );
};

export default Movies;