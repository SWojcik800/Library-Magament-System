import React from 'react'

const title = ('Lorem ipsum')
const content =('Content')

class Content extends React.Component {
  render() {
    return (
          <content>
          <h1>{title}</h1>
          <hr/>
            <p>
              {content}
              </p>
          </content>
    )
  }
}

export default Content;
