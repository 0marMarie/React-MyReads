import React , {Component} from 'react'
import Shelf from './Shelf'
import AddBook from './AddBook'

class Home extends Component{
  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf />
        </div>
        <AddBook />
      </div>
    )
  }
}

export default Home
