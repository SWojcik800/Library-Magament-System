import React from 'react'
import axios from 'axios'
import {
  Redirect
} from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        username: "",
        password: "",
        error: null
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

    async handleSubmit(event) {
       event.preventDefault()
       console.log(this.state)

         //Login POST request
       const login_url = 'http://localhost:8000/api-token-auth/'
       await axios.post(login_url, this.state)
       .then(res => {
       const token = res.data.token
       sessionStorage.setItem('token', token)
       this.setState({is_authenticated: true})
       })
       .catch(() => this.setState({ error: 'Invalid credentials' }))
       //Updating parent component
       this.props.parent_callback(this.state.is_authenticated)

    }



    render() {
    if(this.state.is_authenticated) {
        return(<Redirect to='/books' />)
    }
        return(
          <>
          <h1>Log in</h1>
          <hr />
            <form onSubmit={this.handleSubmit} >
                <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                <button type="submit" className="waves-effect waves-light btn">Log in</button>
            </form>
            {this.state.error}
            <br/>
          </>

      )



    }
}




export default Login;
