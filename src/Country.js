import React, { Component } from 'react';
import './Country.css';


class Country extends Component {

  constructor(props) {
    super(props);
    
  }
  

  render() {
    if (!this.props.childrenProps.borders) {
        return null;
    }
    return (
        <div id='movies'>
          <div id="movies-list">
            <span>{this.props.childrenProps.name}</span>
           <ul className="BorderList">
            {
                this.props.childrenProps.borders.map(function(border) {
                    return <li key={border}>{border}</li>
                })
            }
            </ul>            
          </div>
        </div>
    );
  }
}

export default Country;
