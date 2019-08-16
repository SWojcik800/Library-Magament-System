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
import Login from './auth/Login.js'



class Content extends React.Component{

    constructor(props) {
        super(props)
        this.getToken = this.getToken.bind(this);
         this.state = {
            token: null,
            isAuthenticated: false
        }
        if(this.state.token) {
            this.setState({ isAuthenticated: true })
        }
    }

    getToken(data) {
        this.setState({
            token: data
        })
        if(this.state.token) {
            this.setState({ isAuthenticated: true })
        }
        console.log(this.state)
    }



render() {
    if(this.state.isAuthenticated) {
        return(

            <main className="container">
                      <Route exact path="/" component={Home} />
                      <Route path="/about_us" component={About} />
                      <Route path="/contact" component={Contact} />
                      <Route exact path="/books" render={(token) => <BooksList token={this.state.token} />} />
                      <Route exact path="/books/:pk" component={BooksDetail} />
                      <Route path="/create" render={(token) => <BooksCreate token={this.state.token} />} />
                      <Route exact path="/books/:pk/update"   component={BooksUpdate} />
                      <Route path="/login" render={(isAuthenticated) => <Login isAuthenticated={this.state.isAuthenticated} />} />
             </main>
        )
        }
        else {
            return(
               <main className="container">
                    <Login sendDataToParent={this.getToken}/>
                </main>
            )
        }



}

}



export default Content;
