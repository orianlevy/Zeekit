import React, { Component } from 'react';
import './Filter.css';

class RegionFilter extends Component {

  constructor(props) {
    super(props);
    
  }

  componentDidUpdate(){

    $('#title-filter-region').multiselect('destroy')
  
    $('#title-filter-region').multiselect({
          buttonText: function(options, select) {
              return 'Region';
          }});
  }

    componentDidMount(){

    $('#title-filter-region').multiselect('destroy')
  
    $('#title-filter-region').multiselect({
          buttonText: function(options, select) {
              return 'Region';
          }});
  }


  render() {
    return (
      <div className="type-filter col-xs-1">
        <select id="title-filter-region" multiple="multiple">
            <option value={this.props.childrenProps}>{this.props.childrenProps}</option>

        </select>        
      </div>          
    );
  }
}

export default RegionFilter;
