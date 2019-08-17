import React from 'react'
import {
  Route
} from 'react-router-dom';
import Home from './sites/Home.js'
import About from './sites/About.js'
import Contact from './sites/Contact.js'
import BooksList from './books_crud/BooksList.js'
import BooksDetail from './books_crud/BooksDetail.js'
import BooksCreate from './books_crud/BooksCreate.js'
import BooksUpdate from './books_crud/BooksUpdate.js'



class Content extends React.Component{

render() {

        return(

            <main className="container">
                      <Route exact path="/" component={Home} />
                      <Route path="/about_us" component={About} />
                      <Route path="/contact" component={Contact} />
                      <Route exact path="/books" render={(token) => <BooksList token={this.props.token} />} />
                      <Route exact path="/books/:pk" component={BooksDetail} />
                      <Route path="/create" render={(token) => <BooksCreate token={this.props.token} />} />
                      <Route exact path="/books/:pk/update"   component={BooksUpdate} />

             </main>
        )

        }



}





export default Content;
