import React from 'react'
import axios from 'axios'

class BooksUpdate extends React.Component {

    constructor(props) {
      super(props)

      //API Url
      const api_url = 'http://localhost:8000/books/'
      const api_format = '/?format=json'
      const pk = this.props.match.params.pk

      this.state = {
        title: "title",
        author: ["http://localhost:8000/authors/1/"],
        borrowed_by: null,
        pk: pk
      }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);



        const book = axios.get(api_url+pk+api_format)
        .then(res => {
             const book = res.data
             this.setState({ book })
             })
             console.log(this.state)
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
         //PUT request
       const books_api_url = 'http://localhost:8000/books/'
       const pk = this.props.match.params.pk

       console.log(books_api_url+pk)
       axios.put(books_api_url+pk+'/', this.state)
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




export default BooksUpdate;
