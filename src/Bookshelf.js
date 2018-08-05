import React, {Component} from 'react';
import Book from './Book';

export default class Bookshelf extends Component {
  render() {
    const { name, books, updateBookShelf } = this.props;
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <Book id={book.id} shelf={book.shelf} authors={book.authors}
                    title={book.title} imageLinks={book.imageLinks}
                    updateBookShelf={updateBookShelf} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
