import axios from 'axios'

const book_list = async (books_api_url, auth_token) => {
    return await axios.get(books_api_url, {
        headers: {
            Authorization: 'Token '+auth_token
        }
    })
}
const book_detail = async (books_api_url, auth_token) => {
    return await axios.get(books_api_url, {
        headers: {
            Authorization: 'Token '+auth_token
        }
    })
}


const book_create = async (books_api_url, data, auth_token) => {
    return await axios.post(books_api_url, data,
       {
       headers: {
            Authorization: 'Token '+auth_token
            }
         },

       )
}

const book_delete = async (books_api_url, auth_token) => {
    return await axios.delete(books_api_url,
            {
            headers: {
            Authorization: 'Token '+auth_token
            }
         }
        )
}

const book_update = async (books_api_url, data, auth_token) => {
    axios.put(books_api_url, data,
         {
         headers: {
            Authorization: 'Token '+auth_token
            }
         }
       )


}

const book_load_update_form = async(books_api_url, auth_token) => {
    return await axios.get(books_api_url, {
        headers: {
            Authorization: 'Token '+auth_token
        }
    })
}



export {
    book_create,
    book_delete,
    book_update,
    book_list,
    book_detail,
    book_load_update_form
}