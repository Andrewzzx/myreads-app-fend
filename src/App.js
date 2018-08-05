import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Library from './Library';
import Search from './Search';
import {Route} from 'react-router-dom';

export default class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/search" component={Search} />
        <Route exact path="/" component={Library} />
      </div>
    )
  }
}
