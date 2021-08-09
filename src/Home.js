import React , {Component} from 'react'
import Shelf from './Shelf'
import AddBook from './AddBook'

class Home extends Component{

  render(){
    const {books, shelfChange} = this.props;
    const shelves = [
      { title: 'Currently Reading', key: 'currentlyReading' },
      { title: 'Want To Read', key: 'wantToRead' },
      { title: 'Read', key: 'read' }
    ];
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf) => {
            const shelfBooks = books.filter(book => book.shelf === shelf.key);
            return(
              <Shelf books={books} shelfChange={shelfChange} title={shelf.title} bookShelf={shelfBooks}/>
            )
          })}
        </div>
        <AddBook />
      </div>
    )
  }
}

export default Home
