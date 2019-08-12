import React from 'react'
import axios from 'axios'

import {
  Redirect
} from 'react-router-dom';

import { Modal, Button } from 'react-materialize';

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
       const trigger = <Button className="btn waves-effect waves-light red lighten-2">Delete</Button>
        return (
        <>
            <Modal header="Confirm deletion" trigger={trigger}>
            <p>Are you sure, you want to delete this book?</p>
                <button className="btn waves-effect waves-light red lighten-2" onClick={this.handleClick}>Delete</button>
            </Modal>
        </>
        )
       }


    }
}

export default BooksDelete;