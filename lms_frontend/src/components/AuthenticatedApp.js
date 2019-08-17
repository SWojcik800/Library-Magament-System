import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Navbar from './navs/Navbar.js'
import Footer from './navs/Footer.js'
import Content from './content_boxes/Content.js'

class AuthenticatedApp extends React.Component {

  render() {
    return(
      <Router>
			  <Navbar />
        <br />
			  <Content token={this.props.token} />

        <br /><br />
        <br /><br />
			  <Footer />

		  </Router>
    )
  }
}

export default AuthenticatedApp
