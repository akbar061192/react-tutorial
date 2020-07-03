import React from "react";
import MovieList from "./state-management/MovieList";
import Nav from "./state-management/Nav";
import { MovieProvider } from "./state-management/MovieContext";

function App() {
  return (
    <>
      <MovieProvider>
        <Nav />
        <MovieList />
      </MovieProvider>
    </>
  );
}

export default App;
