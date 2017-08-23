import React, { Component } from 'react';
import './Filter.css';

class LanguagesFilter extends Component {

  constructor(props) {
    super(props);
    
  }

  componentDidUpdate(){

    $('#title-filter-lang').multiselect('destroy')
  
    $('#title-filter-lang').multiselect({
          buttonText: function(options, select) {
              return 'Languages';
          }});
  }

    componentDidMount(){

    $('#title-filter-lang').multiselect('destroy')
  
    $('#title-filter-lang').multiselect({
          buttonText: function(options, select) {
              return 'Languages';
          }});
  }

  render() {
    var Data     = this.props.childrenProps,
        MakeItem = function(X) {
            return <option key={X.toString()}>{X}</option>;
        };    
    return (
      <div className="year-filter col-xs-1">
        <select id="title-filter-lang" multiple="multiple">{Data.map(MakeItem)}</select>
      </div>        
    );
  }
}

export default LanguagesFilter;
