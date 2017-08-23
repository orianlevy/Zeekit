import React, { Component } from 'react';
import './Filters.css';
import RegionFilter from './RegionFilter'
import LanguagesFilter from './LanguagesFilter'


class Filters extends Component {

  constructor(props) {
    super(props);
    
  }

  

  render() {
    if (this.props.childrenProps.region!=null) {
      return (
          <div id="filter" className="row"> 
            <RegionFilter childrenProps={this.props.childrenProps.region}/>
            <LanguagesFilter childrenProps={this.props.childrenProps.languages}/>
          </div>
        );

    }
    else
      return false;

  }

}

export default Filters;
