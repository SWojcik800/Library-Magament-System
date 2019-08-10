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
        borrowed_by: null
      }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState({
        [name]: value
        })

     }

    handleSubmit(event) {
       event.preventDefault()
       console.log(this.state)
         //POST request
       const books_api_url = 'http://localhost:8000/books/'
       axios.post(books_api_url, this.state)
       .then(res => {console.log(res)})
    }


    componentDidMount() {
       //API Url

     }


    render() {
      return(
          <>
          <h1>Add Book</h1>
          <hr />
            <form onSubmit={this.handleSubmit} >
                <input type="text" name="title" placeholder="Title" onChange={this.handleChange} />
                <input type="text" name="author" placeholder="Author" onChange={this.handleChange} />
                <input type="text" name="borrowed_by" placeholder="Borrowed by" onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
          </>

      )





    }
}




export default BooksCreate;
