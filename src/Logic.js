import React, { Component } from 'react';

//Components
import Head from './Head'
import Body from './Body'

import {
fetchDataFromIMDB
} from "./actions/action";
import {
    connect
} from "react-redux";

@connect((store) => {
    return {
        region: store.countryReducer.region,
        languages: store.countryReducer.languages,
        borders: store.countryReducer.borders,
        name: store.countryReducer.name,
    }
})

class Logic extends Component {

  constructor(props) {
    super(props);
    this.fetchDataUponSearch = this.fetchDataUponSearch.bind(this);
  }


  fetchDataUponSearch(country) {

    this.props.dispatch(fetchDataFromIMDB(country));

  }

  

  render() {
    return (
      <div>
        <Head fetch={this.fetchDataUponSearch.bind(this)}/>
        <Body childrenProps={this.props}/>
      </div>
    );
  }
}

export default Logic;
