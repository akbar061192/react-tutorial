import React, { Component } from 'react';
import Book from './Book';
import bookData from './BooksData';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: bookData
    };
  }

  handleDelete = id => {
    const filteredBook = this.state.books.filter(book => {
      return book.id !== id;
    });

    this.setState({
      books: filteredBook
    });
  };

  render() {
    return (
      <section>
        {this.state.books.map(book => {
          return (
            <Book book={book} key={book.id} handleDelete={this.handleDelete} />
          );
        })}
      </section>
    );
  }
}

export default BookList;
