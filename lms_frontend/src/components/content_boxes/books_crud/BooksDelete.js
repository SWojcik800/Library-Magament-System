import React from 'react'
import axios from 'axios'

import {
  Redirect
} from 'react-router-dom';


class BooksDelete extends React.Component {
state = {
    redirect: false
}

      handleClick = () => {
        const api_url = 'http://localhost:8000/books/'
        const pk = this.props.url
        axios.delete(api_url+pk)
        .then(redirect => this.setState({
            redirect: true
        }))
    }


    render() {
       const { redirect } = this.state

       if(redirect) {
        return (
            <Redirect to="/books" />
        )
       }
       else {
        return (
            <button className="btn waves-effect waves-light red lighten-2" onClick={this.handleClick}>Delete</button>
        )
       }


    }
}

export default BooksDelete;