import React, { Component } from 'react';
import Header from "./header"
import Footer from "./footer"


import dummyData from "../../static/assets/dummyData"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      monthData: dummyData.data[0]
    }
  }

  render() {
    return (
      <div className='page-wrapper'>
        <Header month={this.state.monthData.name} />
        <Footer year={this.state.monthData.year} />
      </div>
    );
  }
}
