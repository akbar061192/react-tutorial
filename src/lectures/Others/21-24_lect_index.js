import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

function People() {
  const friends = [
    {
      name: 'Anwar',
      job: 'Manager',
      company: 'YES'
    },
    {
      name: 'Akbar',
      job: 'Dev',
      company: 'IQV'
    },
    {
      name: 'Aslam',
      job: 'Dev',
      company: 'IQV'
    },
    {
      name: 'Akmal',
      job: 'Dev',
      company: 'IQV'
    }
  ];

  return (
    <>
      <Person person={friends[0]}>
        <div>
          <h1>some heading - children</h1>
          <p>children para</p>
        </div>
      </Person>
      <Person person={friends[1]} />
      <Person person={friends[2]} />
      <Person person={friends[3]} />
    </>
  );
}

const Person = props => {
  const { name, job, company } = props.person;
  const { children } = props;
  console.log(props);

  return (
    <section>
      <h1>{name}</h1>
      {children}
      <h2>{job}</h2>
      <h3>{company}</h3>
      <hr />
    </section>
  );
};

ReactDOM.render(<People />, root);
