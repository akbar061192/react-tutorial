import React, { Component } from 'react';
import Tour from './Tour';
import { tourData } from './tourData';
import './TourList.css';

class TourList extends Component {
  constructor() {
    super();
    console.log(`Tour List constructor call`);
    this.state = {
      tours: tourData
    };
  }

  componentDidMount() {
    console.log(`Tour List componentDidMount call`);
  }

  componentWillMount() {
    console.log(`Tour List componentWillMount call`);
  }

  shouldComponentUpdate() {
    console.log(`Tour List shouldComponentUpdate call`);
    return true;
  }

  componentWillUpdate() {
    console.log(`Tour List componentWillUpdate call`);
  }

  componentDidUpdate() {
    console.log(`Tour List componentDidUpdate call`);
  }

  handleDelete = id => {
    const filteredTours = this.state.tours.filter(tour => {
      return tour.id !== id;
    });

    this.setState({
      tours: filteredTours
    });
  };

  render() {
    console.log(`Tour List render call`);
    return (
      <section className="tour-list">
        {this.state.tours.map(tour => {
          return (
            <Tour key={tour.id} tour={tour} handleDelete={this.handleDelete} />
          );
        })}
      </section>
    );
  }
}

export default TourList;
