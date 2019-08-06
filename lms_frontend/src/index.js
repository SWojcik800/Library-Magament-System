import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
//Import Components
import Navbar from './components/navs/Navbar.js'
import Footer from './components/navs/Footer.js'
import Content from './components/content_boxes/Content.js'


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ReactDOM.render(<Navbar />, document.getElementById('navbar'))
ReactDOM.render(<Content />, document.getElementById('content'))
ReactDOM.render(<Footer />, document.getElementById('footer'))
serviceWorker.unregister();
