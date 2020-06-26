import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: 'Ak',
      showInfo: true
    };
    // this.buttonClick = this.buttonClick.bind(this);
    // this.toggleInfo = this.toggleInfo.bind(this);
  }

  // buttonClick() {
  //   console.log('clicked');
  //   console.log(this);
  //   console.log(this.state.count);
  // }

  // buttonClick = () => {
  //   console.log('clicked');
  //   console.log(this);
  //   console.log(this.state.count);
  // };

  addCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  resetCount = () => {
    this.setState({
      count: 0
    });
  };

  lowerCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  // toggleInfo() {
  //   this.setState({
  //     showInfo: !this.state.showInfo
  //   });
  // }

  toggleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const { id, img, title, author } = this.props.book;
    const { handleDelete } = this.props;

    const displayInfo = display => {
      if (display) {
        return <p>Lorem ipsum dolor sit amet. using function</p>;
      } else {
        return null;
      }
    };

    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h4>{title}</h4>
          <h5>{author}</h5>
          <h3>Count: {this.state.count}</h3>
          <h4>Name : {this.state.name}</h4>
          <button type="button" onClick={this.addCount}>
            add count
          </button>
          <button type="button" onClick={this.resetCount}>
            reset
          </button>
          <button type="button" onClick={this.lowerCount}>
            lower count
          </button>
          <button type="button" onClick={() => handleDelete(id)}>
            delete book
          </button>
          <button type="button" onClick={this.toggleInfo}>
            toggle info
          </button>
          {/* <Button handleDelete={handleDelete} /> */}

          {/* Showing information based on the condition... */}
          {/* 1st method - using && operator */}
          {this.state.showInfo && (
            <p>Lorem ipsum dolor sit amet. -- using && method</p>
          )}
          {/* 2nd methid - using ternary operator */}
          {this.state.showInfo ? (
            <p>Lorem ipsum dolor sit amet. using ternary operator</p>
          ) : null}
          {/* 3rd - creating a function inside render and above return and calling it */}
          {displayInfo(this.state.showInfo)}
        </div>
      </article>
    );
  }
}

export default Book;
