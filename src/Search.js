import React, {Component} from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import {Link} from 'react-router-dom';

export default class Search extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
      books: []
    }
  }

  queryCheck(query) {
    this.setState({query: query});
    const trimmedQuery = query.trim();
    if (trimmedQuery === '') {
      this.setState({books: []});
      return ;
    }
    const {libraryBooks} = this.props;
    BooksAPI.search(trimmedQuery, 10).then((response) => {
      if (response && response.length) {
      const books = response.map((book) => {
        const libBook = libraryBooks.find((libBook) => libBook.id === book.id);
        const shelf = libBook ? libBook.shelf : 'none';
        return {
          id: book.id,
          shelf: shelf,
          authors: book.authors !== undefined ? book.authors: 'Author name is not found',
          title: book.title !== undefined ? book.title: 'Book is not found',
          imageLinks: book.imageLinks !== undefined ? book.imageLinks: ''
        };
      });
      this.setState({books: books});
    } else {
      this.setState({books: []});
      return ;
    }
  });
  }

  render() {
    const {books} = this.state;
    const {updateBookShelf} = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input onChange= {(e) => this.queryCheck(e.target.value)}
                    value={this.state.query}
                    type="text"
                    placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book id={book.id}
                      shelf={book.shelf}
                      authors={book.authors}
                      title={book.title}
                      imageLinks = {book.imageLinks}
                      updateBookShelf = {updateBookShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
