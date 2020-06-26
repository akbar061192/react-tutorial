import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const root = document.getElementById('root');

function Books() {
  return (
    <section className="books">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <section className="book">
      <CoverImg />
      <Title />
      <Author />
    </section>
  );
};

const CoverImg = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51Rxy7W82vL._AC_SX184_.jpg"
    alt="image"
  />
);

const Title = () => <h2 style={{ color: 'red' }}>The Most Important Book</h2>;

const authorStyles = {
  color: 'green',
  fontSize: '1.5rem'
};

const Author = () => <h3 style={authorStyles}>Manchester</h3>;

ReactDOM.render(<Books />, root);
