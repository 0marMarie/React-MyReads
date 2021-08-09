import React , {Component} from 'react'
import Book from './Book'

class Shelf extends Component{
  render(){
    const { title, bookShelf, shelfChange, books} = this.props;
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookShelf.map( book => (
              <Book 
                book={book}
                books={books}
                shelfChange={shelfChange}
                key={book.id} 
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf