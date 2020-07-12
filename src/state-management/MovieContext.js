import React, { createContext, Component } from 'react';

const MovieContext = createContext();

class MovieProvider extends Component {
  state = {
    movies: [
      { id: 1, name: 'Breaking Bad', price: '$20' },
      { id: 2, name: 'Scared Games', price: '$30' },
      { id: 3, name: 'Delhi Crime', price: '$40' },
    ],
  };

  render() {
    return (
      <MovieContext.Provider value={this.state.movies}>
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}

export { MovieProvider, MovieContext };
