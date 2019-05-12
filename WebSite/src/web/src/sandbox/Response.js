import React from 'react'

export default class Response extends React.Component {

  render () {
    return <div className="response">
          <span className="responseIcon"> => </span>
          <span className="responseData">{this.props.response.data}</span>
      </div>;
  }

}