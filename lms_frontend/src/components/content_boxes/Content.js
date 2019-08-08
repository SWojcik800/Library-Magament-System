import React from 'react'
import {
  Route
} from 'react-router-dom';
import Home from './sites/Home.js'
import About from './sites/About.js'
import Contact from './sites/Contact.js'
import BooksList from './books_crud/BooksList.js'
import BooksDetail from './books_crud/BooksDetail.js'



const Content = () => (
	<div className="container">

			  <Route exact path="/" component={Home} />
			  <Route path="/about_us" component={About} />
			  <Route path="/contact" component={Contact} />
			  <Route exact path="/books" component={BooksList} />
			  <Route path="/books/:pk" component={BooksDetail} />

	  </div>
)
  



export default Content;
