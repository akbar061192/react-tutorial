import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import Movie from "./Movie";

const MovieList = () => {
  const movies = useContext(MovieContext);

  return (
    <section>
      {movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </section>
  );
};

export default MovieList;
