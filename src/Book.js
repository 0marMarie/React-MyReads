import React , {Component} from 'react'

class Book extends Component{

  updateShelf = event => 
    this.props.shelfChange(this.props.book, event.target.value)


  render(){
    const { books, book } = this.props;

    const coverImg =
      book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : "noCover";
    const title = book.title ? book.title : 'No Title';

    let selectedShelf = 'none';
    for (let i of books) {
      if (i.id === book.id) {
        selectedShelf = i.shelf;
        break;
      }
    }

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.updateShelf} defaultValue={selectedShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book