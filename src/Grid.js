import React, { Component } from 'react';
import './Grid.css';
import Country from './Country'


class Grid extends Component {

  constructor(props) {
    super(props);
    
  }

  

  render() {
    return (
      <div id='grid' >
        <Country childrenProps={this.props.childrenProps}/>     
      </div>      
    );
  }
}

export default Grid;
