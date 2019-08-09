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

class BooksDetail extends React.Component {
state = {
    book: []
}
    componentDidMount() {
       //API Url
       const api_url = 'http://localhost:8000/books/'
       const api_format = '/?format=json'
       const pk = this.props.match.params.pk

       const response = axios.get(api_url+pk+api_format)
       .then(res => {
            const book = res.data
            this.setState({ book })
            })
        }


    render() {

    if(this.state.book.length!==0) {
        return(
            <div>
                <h1><b>{this.state.book.title}</b></h1>
                <hr/>
                <p>
                Author: {this.state.book.borrowed_by}
                Release Date: {this.state.book.release_date}
                <IsAvailable props={this.state.book.is_available} />
                <BooksDelete url={this.state.book.pk} />
                </p>
            </div>

            )
    }
    else {
        return <h1>That book does not exist</h1>
    }




    }
}




export default BooksDetail;
