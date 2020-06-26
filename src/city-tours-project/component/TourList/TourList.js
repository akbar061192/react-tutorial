import React, { Component } from 'react';
import Tour from './Tour';
import { tourData } from './tourData';
import './TourList.css';

class TourList extends Component {
  state = {
    tours: tourData
  };

  handleDelete = id => {
    const filteredTours = this.state.tours.filter(tour => {
      return tour.id !== id;
    });

    this.setState({
      tours: filteredTours
    });
  };

  render() {
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
