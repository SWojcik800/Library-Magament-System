import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import AuthenticatedApp from './AuthenticatedApp.js'
import Login from './content_boxes/auth/Login.js'
import Logout from './content_boxes/auth/Logout.js'


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            is_authenticated: false
        }
       this.redirectToAuthenticatedApp = this.redirectToAuthenticatedApp.bind(this)
       this.redirectToLogout = this.redirectToLogout.bind(this)
    }

    redirectToLogout(data) {
        if(data===false) {
            this.setState({is_authenticated: false})
        }
    }
    redirectToAuthenticatedApp(data) {
        if(data===true) {
            console.log(data)
            this.setState({is_authenticated: true})
        }
    }


    render() {//Rendering Authenticated App form
    if(sessionStorage.getItem('token')) {
        return(
        <Router>
            <AuthenticatedApp token={sessionStorage.getItem('token')  } />
            <Route exact path="/logout" render={(props) => <Logout {...props} logout_parent_callback={this.redirectToLogout} />} />
        </Router>
        )

    }//Rendering Login form
    else {
        return (
        <Router>
        <main className="container">
            <Login parent_callback={this.redirectToAuthenticatedApp}  />
        </main>
         </Router>
        )
    }


    }
}

export default App;
