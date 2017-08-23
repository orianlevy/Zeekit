import React, { Component } from 'react';
import './Head.css';
import Search from './Search'



class Head extends Component {

  constructor(props) {
    super(props);
    
  }


  render() {
    return (
      <div id="head">
        <Search fetch={this.props.fetch}/>             
      </div>      
    );
  }
}

export default Head;
