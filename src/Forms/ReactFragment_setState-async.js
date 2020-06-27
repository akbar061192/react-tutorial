import React, { Component } from 'react';
import './FormMain.css';

class ReactFragment extends Component {
  state = {
    count: 0
  };

  handleDecrement = () => {
    console.log(` dec first call: ${this.state.count}`);
    // this.setState({
    //   count: this.state.count - 1
    // });

    // to handle and use new/updated state.
    this.setState(
      {
        count: this.state.count - this.props.amount
      },
      () => console.log(`dec second call: ${this.state.count}`) // using callback to manage current setState.
    );

    console.log(`dec third call: ${this.state.count}`); // this will execute regardless of setState(since setState is async call)
  };

  handleIncrement = () => {
    console.log(`inc first call: ${this.state.count}`);

    this.setState(
      (state, props) => {
        return { count: state.count + 1 };
      },
      () => console.log(`inc second call: ${this.state.count}`)
    );

    // this.setState((state, props) => {
    //   return {
    //     count: state.count + 1
    //   };
    // });  // can use seState with function to update the current state instead of using object.

    console.log(`inc third call: ${this.state.count}`);
  };

  render() {
    return (
      <>
        <section>
          <article className="counter">
            <button type="button" onClick={this.handleDecrement}>
              -
            </button>
            <span>{this.state.count}</span>
            <button type="button" onClick={this.handleIncrement}>
              +
            </button>
          </article>
        </section>
      </>
    );
  }
}

export default ReactFragment;
