import React, { Component } from 'react';
import './Tour.css';

class Tour extends Component {
  constructor(props) {
    super(props);
    console.log(`Tour constructor call ${this.props.tour.id}`);
    this.state = {
      showInfo: false
    };
  }

  componentWillMount() {
    console.log(`Tour componentWillMount call ${this.props.tour.id}`);
  }
  componentDidMount() {
    console.log(`Tour componentDidMount call ${this.props.tour.id}`);
  }

  shouldComponentUpdate() {
    console.log(`Tour shouldComponentUpdate call ${this.props.tour.id}`);
    return true;
  }

  componentWillUpdate() {
    console.log(`Tour componentWillUpdate call ${this.props.tour.id}`);
  }

  componentDidUpdate() {
    console.log(`Tour componentDidUpdate call ${this.props.tour.id}`);
  }

  toggleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    console.log(`Tour render call ${this.props.tour.id} `);

    const { id, city, img, name, info } = this.props.tour;
    const { handleDelete } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="place" className="img" />
          <span className="close-btn" onClick={() => handleDelete(id)}>
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            Info
            <span onClick={this.toggleInfo}>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          {this.state.showInfo ? <p>{info}</p> : null}
        </div>
      </article>
    );
  }
}

export default Tour;
