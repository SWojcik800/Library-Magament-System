import React from 'react'
import { book_detail }  from './axios_requests/books_requests.js'

import BooksDelete from './BooksDelete'
import IsAvailable from './additional_components/IsAvailable.js'
import BookUpdateButton from './additional_components/BookUpdateButton.js'


class BooksDetail extends React.Component {
state = {
    book: []
}
    constructor(props) {
        super(props)
        const pk = this.props.match.params.pk
        this.pk = pk
    }

    getBookDetail = async () => {
      //API Url
      const api_url = 'http://localhost:8000/books/'
      const api_format = '/?format=json'
      const pk = this.props.match.params.pk

      book_detail(api_url+pk+api_format, this.props.token
      )
      .then(res => {
           const book = res.data
           this.setState({ book })
           })
      .then(isLoaded => {
        this.setState({ is_loaded: true })
      })
      .catch(setError => {
        this.setState({ error: true })
      })
    }

    componentWillMount() {
        this.getBookDetail()
        }


    render() {

    if(this.state.error) {
      return (
          <>
          <h1 className="center">That book does not exist</h1>
          </>
      )
    }
    else {
      if(this.state.is_loaded) {
        return(
            <div>
                <h1>{this.state.book.title}</h1>
                <hr/>

                Author: {this.state.book.author}
                <IsAvailable props={this.state.book.borrowed_by} />
                <BooksDelete url={this.pk} token={this.props.token} />
                 &nbsp;
                <BookUpdateButton pk={this.pk} />
            </div>


          )
      }
      else {
        return <h1>Loading book...</h1>
      }

    }
   }
}




export default BooksDetail;
