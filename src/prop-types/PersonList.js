import React, { Component } from 'react';
import Person from './Person';

class PersonList extends Component {
  state = {
    persons: [
      {
        id: 1,
        img:
          'https://cdn.pixabay.com/photo/2015/06/08/15/11/typewriter-801921_960_720.jpg',
        title: 'Type Writer Book',
        age: 27
      },
      {
        id: 2,
        img:
          'https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498__340.jpg',
        title: 'The Old School Book-1',
        age: 25
      },
      {
        id: 3,
        img:
          'https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498__340.jpg',
        title: 'The Old School Book-2',
        age: 22,
        info: 'some info'
      }
    ]
  };
  render() {
    return (
      <section>
        {this.state.persons.map(person => {
          return (
            <Person
              key={person.id}
              // img={person.img}
              // title={person.title}
              // age={person.age}
              // info={person.info}
              person={person}
            />
          );
        })}
      </section>
    );
  }
}

export default PersonList;
