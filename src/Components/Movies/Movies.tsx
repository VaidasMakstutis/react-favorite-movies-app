import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import ShowMovies from "./ShowMovies";
import Filter from "../Filter";
import Loader from "../Loader";
import { RouteKey } from "../../navigation/router";
import { TMovie } from "../../api";
import { API_URL } from "../../api/shared/constants";

const Movies = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<TMovie[]>([]);
  const [years, setYears] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate(RouteKey.Index);
  }, [user]);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const res = await axios.get(API_URL);
      const data: TMovie[] = res.data.Search;
      setMovies([...data]);
      setYears(data.map(movie => movie.Year).sort((a, b) => a.localeCompare(b)));
      setLoading(false);
    };
    fetchMovies();
  }, []);

  if (loading) {
    return <Loader />;
  }

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
