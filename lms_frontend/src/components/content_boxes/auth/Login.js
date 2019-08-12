import React from 'react'
import axios from 'axios'

class Login extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        username: "",
        password: ""
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

         //Login POST request
       const login_url = 'http://localhost:8000/login'
       axios.post(login_url, this.state)
       .then(res => {console.log(res)})
    }

    render() {
      return(
          <>
          <h1>Log in</h1>
          <hr />
            <form onSubmit={this.handleSubmit} >
                <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                <button type="submit" className="waves-effect waves-light btn">Log in</button>
            </form>
          </>

      )





    }
}




export default Login;
