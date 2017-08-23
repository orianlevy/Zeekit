import React, { Component } from 'react';
import './Body.css';
import Grid from './Grid'
import Filters from './Filters'



class Body extends Component {

  constructor(props) {
    super(props);
    
  }


  render() {
    return (
      <div id="body">
        <Filters childrenProps={this.props.childrenProps}/>  
        <Grid childrenProps={this.props.childrenProps}/>
      </div>
    );
  }
}

export default Body;
