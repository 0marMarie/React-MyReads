import React from 'react'
import Book from './Book'

const Shelf = (props) => {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.bookShelf.map( book => (
              <Book 
                book={book}
                books={props.books}
                shelfChange={props.shelfChange}
                key={book.id} 
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }

export default Shelf;