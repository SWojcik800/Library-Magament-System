import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from './sites/Home.js'
import About from './sites/About.js'
import Contact from './sites/Contact.js'
import BooksList from './books_crud/BooksList.js'
import BooksDetail from './books_crud/BooksDetail.js'
import BooksCreate from './books_crud/BooksCreate.js'
import BooksUpdate from './books_crud/BooksUpdate.js'

class Error_404 extends React.Component {
    render() {
        return(
        <h1>Page not found</h1>
        )
    }
}




class Content extends React.Component{

render() {

        return(

            <main className="container">
			    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/about_us" component={About} />
                      <Route path="/contact" component={Contact} />
                      <Route exact path="/books" render={(token) => <BooksList token={this.props.token} />} />
                      <Route exact path="/books/:pk" render={(props) => <BooksDetail {...props} token={this.props.token} />} />
                      <Route path="/create" render={(token) => <BooksCreate token={this.props.token} />} />
                      <Route exact path="/books/:pk/update"   render={(props) => <BooksUpdate {...props} token={this.props.token} />} />
			          <Route component={Error_404} />
			     </Switch>
             </main>
        )

        }



}





export default Content;
