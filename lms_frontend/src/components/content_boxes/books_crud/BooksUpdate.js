import React from 'react'
import axios from 'axios'
import GoToHomepage from '../utils/GoToHomepage.js'

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

      await axios.get(this.api_url+this.pk+this.api_format)
        .then(res => {
            const data  = res.data
            this.setState(data)
        })
        .catch(res => {
            this.setState({ error: true })
        })
        console.log(this.state.error)
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
       console.log(this.state)
         //PUT request

       console.log(this.api_url+this.pk)
       axios.put(this.api_url+this.pk+'/', this.state)
       .then(res => {console.log(res)})
    }

    render() {
    if(this.state.error) {
        return(
        <h1 className="center">That book does not exist</h1>
        )
    }
    else {
        return(
          <>
          <h1>Update book</h1>
          <hr />
            <form onSubmit={this.handleSubmit} >
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                <input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
                <input type="text" name="borrowed_by" value={this.state.borrowed_by} onChange={this.handleChange} />
                <button type="submit" className="waves-effect waves-light btn">Update</button>
                &nbsp;
                <GoToHomepage />
            </form>
          </>
      )
    }






    }
}




export default BooksUpdate;
