import React from 'react'
import Navbar from './navs/Navbar.js'
import Footer from './navs/Footer.js'
import Content from './content_boxes/Content.js'



class AuthenticatedApp extends React.Component {

  render() {
    return(
        <>
			  <Navbar />
        <br />
			  <Content token={this.props.token} />

        <br /><br />
        <br /><br />
			  <Footer />
	    </>
    )
  }
}

export default AuthenticatedApp
