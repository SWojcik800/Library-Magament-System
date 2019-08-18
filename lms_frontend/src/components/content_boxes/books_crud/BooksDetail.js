import React from 'react'
import axios from 'axios'
import BooksDelete from './BooksDelete'
import {
  Link
} from 'react-router-dom';

const IsAvailable = (props) => {
    if(props) {
        return <p>Is available: <b>Yes</b></p>
    }
    else {
        return <p>Is available: <b>No</b></p>
    }

}
const BookUpdateButton = (pk) => {
    return <Link to={pk.pk+'/update'} className="waves-effect waves-light btn">Update</Link>
}

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

      await axios.get(api_url+pk+api_format,
        {
       headers: {
            Authorization: 'Token '+this.props.token
            }
         },
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
