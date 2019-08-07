import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './sites/Home.js'
import About from './sites/About.js'
import Contact from './sites/Contact.js'
import BooksList from './books_crud/BooksList.js'



const Content = () => (
	<div className="container">
		 <Router> 
			  <Route exact path="/" component={Home} />
			  <Route path="/about_us" component={About} />
			  <Route path="/contact" component={Contact} />
			  <Route path="/books" component={BooksList} />
		  </Router>
	  </div>
)
  



export default Content;
