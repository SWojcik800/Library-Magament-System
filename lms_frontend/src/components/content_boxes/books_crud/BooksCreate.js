import React from 'react'
import axios from 'axios'
import GoToHomepage from '../utils/GoToHomepage.js'
import {
  Redirect
} from 'react-router-dom';


class BooksCreate extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
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
       .then(res => {
         console.log(res)
         const pk = res.data.pk
         this.setState({ pk })
       })
       .then(set_redirect => {
         this.setState({ redirect: true })
       })
       .catch(set_error => {
         this.setState({ error: true })
       })
    }

    render() {
      //Catching error
      if(this.state.error) {
        return <h1>Something went wrong, couldn't create a book</h1>
      }
      //Redirect user to created book
      if(this.state.redirect) {
        return <Redirect to={'books/'+this.state.pk} />
      }
      else {
        return(
            <>
            <h1>Add Book</h1>
            <hr />
              <form onSubmit={this.handleSubmit} >
                  <label for="title">Title</label>
                  <input type="text" name="title" className="validate" onChange={this.handleChange} />

                  <label for="author">Author</label>
                  <input type="text" name="author" className="validate" onChange={this.handleChange} />

                  <label for="borrowed_by">Borrowed by</label>
                  <input type="text" name="borrowed_by" className="validate" onChange={this.handleChange} />

                  <button type="submit" className="#4caf50 green btn" >Create</button>
                  &nbsp;
                  <GoToHomepage />
              </form>
              <br />
            </>

        )
      }






    }
}




export default BooksCreate;
