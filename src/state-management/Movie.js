import React from "react";

const Movie = (props) => {
  const { name, price } = props.movie;
  return (
    <article>
      <h2>{name}</h2>
      <p>{price}</p>
    </article>
  );
};

export default Movie;
