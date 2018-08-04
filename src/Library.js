import React, {Component} from 'react';
import Bookshelf from './Bookshelf';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      storedBooks: []
    }
  }

  filterBooks = (bookshelf) => {
    const {books} = this.props;
    return books.filter((book) => book.shelf === bookshelf);
  }

  render() {
    const {updateBookshelf} = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf name="Currently Reading"
                       books={this.filterBooks('currentlyReading')}
                       updateBookshelf={updateBookshelf} />
            <Bookshelf name="Currently Reading"
                       books={this.filterBooks('wantToRead')}
                       updateBookshelf={updateBookshelf} />
            <Bookshelf name="Currently Reading"
                       books={this.filterBooks('doneReading')}
                       updateBookshelf={updateBookshelf} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}
