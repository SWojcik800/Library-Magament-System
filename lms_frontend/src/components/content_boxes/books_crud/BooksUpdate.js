import React from 'react'
import { book_update }  from './axios_requests/books_requests.js'
import { book_load_update_form }  from './axios_requests/books_requests.js'

import GoToHomepage from '../utils/GoToHomepage.js'
import {
  Redirect
} from 'react-router-dom';


class BooksUpdate extends React.Component {

    constructor(props) {
      super(props)
       //API Url
      const api_url = 'http://localhost:8000/books/'
      const api_format = '/?format=json'
      const pk = this.props.match.params.pk

      this.api_url = api_url
      this.api_format = api_format
      this.pk = pk

      this.state = {}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount() {
        this.LoadFormDefaultValues()
    }


    //Loading form placeholders
    LoadFormDefaultValues = async () => {

      book_load_update_form(this.api_url+this.pk+this.api_format, this.props.token
      )
        .then(res => {
            const data  = res.data
            this.setState(data)
        })
        .catch(res => {
            this.setState({ error: true })
        })
    }



    handleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState({
        [name]: value
        })

     }

    //Submitting form data
    handleSubmit(event) {
       event.preventDefault()
         //PUT request

       book_update (this.api_url+this.pk+'/', this.state, this.props.token
       )
       .then(set_redirect => {
         this.setState({ redirect: true })
       })

    }

    render() {
    if(this.state.error) {
        return(
        <h1 className="center">That book does not exist</h1>
        )
    }
    else {
      if(this.state.redirect) {
        return <Redirect to='/books' />
      }
        return(
          <>
          <h1>Update book</h1>
          <hr />
            <form onSubmit={this.handleSubmit} >
                <input type="text" name="title" className="validate white-text" value={this.state.title} placeholder='Title' onChange={this.handleChange} />
                <input type="text" name="author" className="validate white-text" value={this.state.author}  placeholder='Author' onChange={this.handleChange} />
                <input type="text" name="borrowed_by" className="validate white-text" value={this.state.borrowed_by}  placeholder='Borrowed by' onChange={this.handleChange} />
                <button type="submit" className="waves-effect waves-light btn">Update</button>
                &nbsp;
                <GoToHomepage />
            </form>
            <br />
          </>
      )
    }






    }
}




export default BooksUpdate;
