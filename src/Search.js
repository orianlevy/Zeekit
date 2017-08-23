import React, { Component } from 'react';
import './Search.css';


class Search extends Component {


 constructor(props) {
    super(props);
    this.state = {
      input: '',
    };    

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {
      $("#search-btn").click($.proxy(function (e) {
        e.preventDefault();
       },this));
      }

  handleChange(e) {
    this.setState({ input: e.target.value });

  }

  handleClick() {
    this.props.fetch(this.state.input);
  }
  

  render() {
    return (
      <div className="header-container">
        <h1 className="header">Country Search Engine</h1>
        <form className="search-container" id="search-container">
          <input className="search-input" id="search" type="search" placeholder="Search" onChange={ this.handleChange } />
          <button type="submit" id="search-btn" onClick={ this.handleClick } >Show Me</button>
        </form>
      </div>
    );
  }
}

export default Search;
