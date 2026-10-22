import { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";
import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/movieService";
import type { Movie } from "../../types/movie";
import MovieGrid from "../MovieGrid/MovieGrid";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [hasError, setHasError] = useState(false);

  const handlerOnSubmit = (query: string) => {
    setQuery(query);
  };

  useEffect(() => {
    const getMovies = async () => {
      setHasError(false);
      try {
        const findedMovies = await fetchMovies(query);
        setMovies(findedMovies);
      } catch (error) {
        console.error(error);
        setHasError(true);
      } finally {
        console.log("nop");
      }
    };

    getMovies();
  }, [query]);

  return (
    <div className={css.app}>
      <Toaster />
      <SearchBar onSubmit={handlerOnSubmit}></SearchBar>
      {movies.length > 0 ? <MovieGrid movies={movies} /> : null}
      {hasError && <ErrorMessage />}
    </div>
  );
};

export default App;
