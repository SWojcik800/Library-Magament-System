import React from 'react'
import axios from 'axios'
import BooksDelete from './BooksDelete'

const IsAvailable = (props) => {
    if(props) {
        return <p>Is available: <b>Yes</b></p>
    }
    else {
        return <p>Is available: <b>No</b></p>
    }

}

class BooksCreate extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        title: "title",
        author: ["http://localhost:8000/authors/1/"],
        is_available: false,
        release_date: "2019-08-09",
        borrowed_by: null
      }
    }
    componentDidMount() {
       //API Url
       const books_api_url = 'http://localhost:8000/books/'
       //POST request
       axios.post(books_api_url, this.state)
       .then(res => {console.log(res)})
     }


    render() {
      return(
          <>Test</>

      )





    }
}




export default BooksCreate;
