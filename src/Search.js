import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book';
import * as BooksAPI from './BooksAPI'


class Search extends Component{

  state = {
    query: '',
    newBook: [],
    err: false
  };

  getBooks = event => {
    const query = event.target.value;
    this.setState({ query });
    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ newBook: books, err: false })
          : this.setState({ newBook: [], err: true });
      });
    } else {
      this.setState({ newBook: [], err: false });
    }
  };

  render(){
    const { books, shelfChange } = this.props;
    const { query, newBook, err } = this.state;

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query}
              onChange={this.getBooks}/>
          </div>
        </div>
        <div className="search-books-results">
          {newBook.length > 0 && (
            <div>
              <h3 className="text-muted">Found {newBook.length} books </h3>
              <ol className="books-grid">
                {newBook.map(book => (
                  <Book
                    book={book}
                    books={books}
                    shelfChange={shelfChange}
                    key={book.id}
                  />
                ))}
              </ol>
            </div>
          )}
          {err && (<h3 className="text-muted text-center">No Items Found !!</h3>)}
        </div>
      </div>
    )
  }
}

export default Search