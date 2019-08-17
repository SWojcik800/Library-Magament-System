import React from 'react'
import AuthenticatedApp from './AuthenticatedApp.js'
import Login from './content_boxes/auth/Login.js'



class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            token: null,
            is_authenticated: false
        }
        this.setAuthToken = this.setAuthToken.bind(this)
    }

    //Setting Authentication token
    setAuthToken(data) {
        this.setState({token: data})
        if(this.state.token) {
            this.setState({ is_authenticated: true })
        }
        console.log(this.state)
    }

    render() {//Rendering Authenticated App form
    if(this.state.is_authenticated) {
        return(
            <AuthenticatedApp token={this.state.token} />
        )

    }//Rendering Login form
    else {
        return (
        <main className="container">
            <Login parent_callback={this.setAuthToken} />
        </main>
        )
    }


    }
}






export default App;
