import React, { Component } from 'react';
import Header from "./header"
import Footer from "./footer"

export default class App extends Component {
  render() {
    return (
      <div className='page-wrapper'>
        <Header month="January" />
        <Footer year="2022" />
      </div>
    );
  }
}
