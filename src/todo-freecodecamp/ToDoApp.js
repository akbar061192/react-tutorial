import React, { Component } from 'react';
import todosData from './todoData';
import TodoItem from './TodoItem';

class ToDoApp extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
      count: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    const newData = this.state.todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    this.setState({
      ...this.state,
      todos: newData,
    });
  }

  render() {
    return (
      <>
        {this.state.todos.map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              handleChange={this.handleChange}
            />
          );
        })}
      </>
    );
  }
}

export default ToDoApp;
