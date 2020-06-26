import React from 'react';
import PropTypes from 'prop-types';

function Person(props) {
  const { img, title, age, info } = props.person;
  return (
    <article>
      <img src={img} width="150" alt="person" />
      <h3>title:{title}</h3>
      <h4>age:{age}</h4>
      {/* Alternate way to pass default props for an object. */}
      <h5>info:{info || 'default info'}</h5>
    </article>
  );
}

export default Person;

// Person.propTypes = {
//   img: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   info: PropTypes.string.isRequired
// };

// Person.defaultProps = {
//   img:
//     'https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498__340.jpg',
//   title: 'Default title',
//   age: 30,
//   info: 'default info'
// };

//  If props is received as an object

Person.propTypes = {
  person: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    info: PropTypes.string.isRequired
  })
};
