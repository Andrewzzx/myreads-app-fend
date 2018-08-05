import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Library from './Library';
import Search from './Search';
import {Route} from 'react-router-dom';

export default class BooksApp extends React.Component {
  constructor() {
    super();
    this.state = BooksAPI.getAll().then((books) => {
      this.setState({books: books});
    });
  }

  updateBookShelf = (book, updatedShelf) => {
    const {books} = this.state;
    const bookIndex = books.findIndex((key) => {
      return key.id === book.id;
    });
    let stateBooks = Object.assign([], books);

    if (bookIndex === -1) {
     const newBook = Object.assign({}, book);
     newBook.shelf = updatedShelf;
     stateBooks.push(newBook);
    } else {
     stateBooks[bookIndex] = Object.assign({}, stateBooks[bookIndex]);
     stateBooks[bookIndex].shelf = updatedShelf;
    }

   BooksAPI.update(book, updatedShelf).then(
     this.setState({ books: stateBooks })
   );
  }


  render() {
    const {books} = this.state;
    if (!books) {
      return null;
    }
    return (
      <div className="app">
        <Route exact path="/search" render={() =>(<Search libraryBooks={books}
                              updateBookShelf={this.updateBookShelf} />)} />
        <Route exact path="/" render={() => (<Library books={books}
                              updateBookShelf = {this.updateBookShelf} /> )} />
      </div>
    )
  }
}
