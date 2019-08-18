import React from 'react'
import axios from 'axios'
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

      await axios.get(this.api_url+this.pk+this.api_format,
          {
       headers: {
            Authorization: 'Token 835d33ffe2959306518c6c37676c652abef4a317'
            }
         }
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

       axios.put(this.api_url+this.pk+'/', this.state,
         {
         headers: {
            Authorization: 'Token '+this.props.token
            }
         }
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
                <input type="text" name="title" className="validate" value={this.state.title} onChange={this.handleChange} />
                <input type="text" name="author" className="validate" value={this.state.author} onChange={this.handleChange} />
                <input type="text" name="borrowed_by" className="validate" value={this.state.borrowed_by} onChange={this.handleChange} />
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
