import React , {Component} from 'react'
import Shelf from './Shelf'
import AddBook from './AddBook'

class Home extends Component{

  render(){
    const {books, shelfChange} = this.props;
    const currentltReading = books.filter(book => book.shelf === "currentlyReading")
    const wantToRead = books.filter(book => book.shelf === "wantToRead")
    const read = books.filter(book => book.shelf === "read")
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf title="Currently Reading" bookShelf={currentltReading} shelfChange={shelfChange} books={books}/>
          <Shelf title="Want to Read" bookShelf={wantToRead} shelfChange={shelfChange} books={books}/>
          <Shelf title="Read" bookShelf={read} shelfChange={shelfChange} books={books}/>
        </div>
        <AddBook />
      </div>
    )
  }
}

export default Home
