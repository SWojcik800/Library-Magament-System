import React from 'react'
import { book_list }  from './axios_requests/books_requests.js'
import BooksLoader from './additional_components/BooksLoader.js'

import {
  Link
} from 'react-router-dom';

import IsAvailable from './additional_components/IsAvailable.js'
import NoBooks from './additional_components/NoBooks.js'


class BooksList extends React.Component {
    state = {
        books: []
    }
    //API Url
    api_url = 'http://localhost:8000/books/'
    api_format = '?format=json'

    async componentDidMount() {
      this.getAllBooks()
    }

      //Getting books list from API
    getAllBooks = async () => {

     book_list(this.api_url+'?format=json', this.props.token
     )
      .then(res => {
          const books = res.data
          this.setState({ books })
      })
      .then(isLoaded => {
        this.setState({ is_loaded: true })
      })
      .catch(setError => {
        this.setState({ error: true })
      })
    }


    render() {
      if(this.state.error) {
        return <h1>Couldn't load books</h1>
      }
      if(this.state.is_loaded) {
        if(this.state.books.length===0) {
            return <NoBooks />
         }
           return (
                       <>
                       <h1>Books</h1>
                       <hr/>
                       <div className="row" >
                           { this.state.books.map(book => {
                           return(

                                   <div className="col s12 m4" key={book.pk}>
                                     <div className="card #3d5afe indigo accent-3">
                                       <div className="card-content white-text">
                                         <span className="card-title">{book.title}</span>
                                         <p>Author: {book.author}</p>
                                          <IsAvailable props={book.borrowed_by} />
                                       </div>
                                       <div className="card-action">
                                         <Link to = {'books/'+book.pk} className="waves-effect waves-light #8c9eff indigo accent-1 btn">Detail</Link>
                                       </div>
                                     </div>
                                   </div>
                           )
                           })}
                           </div>
                       </>
             )
         }

      else {
        return <BooksLoader />
      }



    }


}




export default BooksList;
