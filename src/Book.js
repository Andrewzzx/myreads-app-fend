import React, {Component} from 'react';


export default class Book extends Component {

  constructor() {
    super();
    this.state = {
      bookshelf: 'none'
    };
  };

  changeBookshelf(shelf) {
    this.setState({bookshelf: shelf});
  }

  render() {
    const { title, authors, images } = this.props;
    const { thumbinal } = images;
    const { bookshelf } = this.state;

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("thumbnail")' }}></div>
          <div className="book-shelf-changer">
            <select value = {shelf} onChange={ (e) => this.changeBookshelf(e.target.value)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}
