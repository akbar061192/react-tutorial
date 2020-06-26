import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const root = document.getElementById('root');

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="33" name="Anwar" job="Manager" />
      <Person img="44" name="Akbar" job="Dev" />
      <Person img="55" name="Aslam" job="Designer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, tenetur.
        </p>
      </Person>
      <Person img="66" name="Akmal" job="Architect" />
    </section>
  );
};

const Person = props => {
  const { img, name, job, children } = props;

  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <article className="person">
      <img src={url} alt="random-user" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<PersonList />, root);
