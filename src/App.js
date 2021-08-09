import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import Home from './Home'
import Search from './Search'
import './App.css'


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then( (res) => this.setState({books: res}) )
  }

  handleShelfChange = (currBook, shelf) => {
    BooksAPI.update(currBook, shelf).then(res => {
      currBook.shelf = shelf;
      this.setState(currState => ({
        books: currState.books
          .filter(book => book.id !== currBook.id)
          .concat(currBook)
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Home books={this.state.books} 
                shelfChange={this.handleShelfChange}
            />
          )}/>
        <Route exact path="/search" render={ () => (
          <Search books={this.state.books}
                  shelfChange={this.handleShelfChange} 
            />
        )} />
      </div>
    )
  }
}

export default BooksApp
