import React, { Component } from 'react';
import './FormMain.css';

class FormMain extends Component {
  state = {
    firstName: '',
    lastName: '',
    people: []
  };

  handleChange = event => {
    // const textValue = event.target.value;
    // const name = event.target.name;

    // Use Case for controlled input type -  can manipulate the inputs for ex: below can make entered input as upperCase.
    let value = event.target.value.toUpperCase();
    let name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;

    if (firstName.length > 0 && lastName.length > 0) {
      const person = ` ${firstName} ${lastName} `;
      this.setState({
        people: [...this.state.people, person],
        firstName: '',
        lastName: ''
      });
    }
  };

  render() {
    // console.log(this.state);

    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </article>
        <hr />
        <article>
          <h2>people</h2>
          {this.state.people.map(person => {
            return <h3 key={Math.random()}>{person}</h3>;
          })}
          <hr />
        </article>
      </section>
    );
  }
}

export default FormMain;
