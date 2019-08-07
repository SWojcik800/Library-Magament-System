import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './sites/Home.js'
import About from './sites/About.js'
import Contact from './sites/Contact.js'



class Content extends React.Component {
  

  render() {
	return(
	 
	 <div class="container">
		 <Router> 
			  <Route exact path="/" component={Home} />
			  <Route path="/about_us" component={About} />
			  <Route path="/contact" component={Contact} />
		  </Router>
	  </div>
	)
  }


}

export default Content;
