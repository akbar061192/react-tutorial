import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const movies = useContext(MovieContext);
  return (
    <nav>
      <h1>List of Movies : {movies.length}</h1>
    </nav>
  );
};

export default Nav;
