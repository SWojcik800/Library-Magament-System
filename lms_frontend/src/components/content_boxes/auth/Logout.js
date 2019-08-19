import React from 'react'
import {
  Redirect
} from 'react-router-dom';

class Logout extends React.Component {
    constructor(props) {
        super(props)
        sessionStorage.clear()
        this.props.logout_parent_callback(false)
    }
    render() {
        return(<Redirect to='/' />)
    }
}

export default Logout;