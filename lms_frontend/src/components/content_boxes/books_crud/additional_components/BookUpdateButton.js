import React from 'react'
import {
  Link
} from 'react-router-dom';


const BookUpdateButton = (pk) => {
    return <Link to={pk.pk+'/update'} className="waves-effect waves-light btn">Update</Link>
}

export default BookUpdateButton