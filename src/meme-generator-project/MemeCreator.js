import React, { Component } from 'react';
import './styles.css';

class MemeCreator extends Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      randomImg: 'https://i.imgflip.com/1ur9b0.jpg',
      allMemeImgs: [],
    };
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          ...this.state,
          allMemeImgs: data.data.memes,
        })
      );
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const randomNumber = Math.floor(
      Math.random() * this.state.allMemeImgs.length
    );
    const randomImage = this.state.allMemeImgs[randomNumber].url;

    this.setState({
      ...this.state,
      randomImg: randomImage,
    });
  };

  render() {
    return (
      <>
        <div>
          <form className='meme-form' onSubmit={this.handleSubmit}>
            <input
              type='text'
              name='topText'
              value={this.state.topText}
              onChange={this.handleChange}
              placeholder='Top Text'
            />
            <input
              type='text'
              name='bottomText'
              value={this.state.bottomText}
              onChange={this.handleChange}
              placeholder='Bottom Text'
            />
            <button type='submit'>Gen</button>
          </form>
          <div className='meme'>
            <img src={this.state.randomImg} alt='img' width='100px' />
            <h2 className='top'>{this.state.topText}</h2>
            <h2 className='bottom'>{this.state.bottomText}</h2>
          </div>
        </div>
      </>
    );
  }
}

export default MemeCreator;
