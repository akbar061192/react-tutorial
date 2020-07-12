import React, { Component } from 'react';

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: 'India',
      items: {
        veg: false,
        nonveg: false,
        fruits: false,
      },
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    type === 'checkbox'
      ? this.setState({
          ...this.state,
          items: {
            ...this.state.items,
            [name]: checked,
          },
        })
      : this.setState({
          ...this.state,
          [name]: value,
        });
  };

  render() {
    return (
      <>
        <form>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type='number'
            name='age'
            placeholder='Age'
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor='gender'>
            <input
              type='radio'
              name='gender'
              value='male'
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}
            />
            Male
          </label>
          <label htmlFor='gender'>
            <input
              type='radio'
              name='gender'
              value='female'
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}
            />
            Female
          </label>
          <br />
          <select
            name='destination'
            value={this.state.destination}
            onChange={this.handleChange}
          >
            <option value='ind'>India</option>
            <option value='us'>US</option>
            <option value='uk'>UK</option>
          </select>
          <br />
          <input
            type='checkbox'
            name='veg'
            checked={this.state.items.veg}
            onChange={this.handleChange}
          />
          Veg
          <input
            type='checkbox'
            name='nonveg'
            checked={this.state.items.nonveg}
            onChange={this.handleChange}
          />
          Non-Veg
          <input
            type='checkbox'
            name='fruits'
            checked={this.state.items.fruits}
            onChange={this.handleChange}
          />
          Fruits
          <br />
          <button type='submit'>Submit Data</button>
        </form>

        <hr />

        <h3>Entered Information</h3>
        <h4>
          Full Name: {this.state.firstName} {this.state.lastName}
        </h4>
        <h4>Age: {this.state.age}</h4>
        <h4>Gender: {this.state.gender}</h4>
        <h4>Destination: {this.state.destination}</h4>
        <h4>
          Items:
          {this.state.items.veg && <p>Veg</p>}
          {this.state.items.nonveg && <p>Non-Veg</p>}
          {this.state.items.fruits && <p>Fruits</p>}
        </h4>
      </>
    );
  }
}

export default Forms;
