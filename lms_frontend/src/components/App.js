import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import AuthenticatedApp from './AuthenticatedApp.js'
import Login from './content_boxes/auth/Login.js'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            token: null
        }
       }


    render() {//Rendering Authenticated App form
    if(sessionStorage.getItem('token')) {
        return(
        <Router>
            <AuthenticatedApp token={sessionStorage.getItem('token')} />
        </Router>
        )

    }//Rendering Login form
    else {
        return (
        <Router>
        <main className="container">
            <Login />
        </main>
         </Router>
        )
    }


    }
}






export default App;
