import React from 'react'
import axios from 'axios'

import {
  Link
} from 'react-router-dom';

//Book is_available component
const IsAvailable = (props) => {
    if(props) {
        return <p>Is available: <b>Yes</b></p>
    }
    else {
        return <p>Is available: <b>No</b></p>
    }

}

//No books alert
const NoBooks = () => <p>No books to display</p>

class BooksList extends React.Component {
    state = {
        books: []
    }
    //API Url
    api_url = 'http://localhost:8000/books/'
    api_format = '?format=json'


    componentDidMount() {
        //Getting data from api
       axios.get(this.api_url+'?format=json')
        .then(res => {
            const books = res.data
            this.setState({ books })
        })

    }


    render() {
        if(this.state.books.length!==0) {
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
            return <NoBooks />
        }




    }


}




export default BooksList;
