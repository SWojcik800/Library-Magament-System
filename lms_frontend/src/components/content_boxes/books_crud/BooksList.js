import React from 'react'
import axios from 'axios'

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
        console.log(this.state.books)
    }


    render() {
        if(this.state.books.length!=0) {
                return (
        <>
        <h1>Books</h1>
            { this.state.books.map(book => {
            return(
                   <div className="row">
                    <div className="col s12 m6">
                      <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                          <span className="card-title">{book.title}</span>
                          <p>Author: {book.author}</p>
                           <IsAvailable props={book.borrowed_by} />
                        </div>
                        <div className="card-action">
                          <a href={this.api_url+book.pk+'?format=json'}>Detail</a>
                        </div>
                      </div>
                    </div>
                  </div>
            )
            })}
        </>

        )
        }
        else {
            return <NoBooks />
        }




    }


}
  



export default BooksList;
