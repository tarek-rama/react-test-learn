import React, { Component } from 'react';


export default class Default extends Component {
  render(){
    console.log(this.props)
    return(
      <div className="container">
        <div className="row center">
          <h1>404</h1>
          <h3>ERROR</h3>
          <h3>Page Not Found</h3>
    <h3>The requested URL <span style={{color:"red"}}>{this.props.location.pathname}</span> Was Not Found</h3>
        </div>
          
      </div>
    )
  }
}