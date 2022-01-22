import React, { Component } from 'react';

import Header from "./header"
import ContentWrapper from './content/contentWrapper';
import Footer from "./footer";

import dummyData from "../../static/assets/dummyData";

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      monthData: dummyData.data[0],
      currentIndex: 0
    }

    this.handleMonthChange = this.handleMonthChange.bind(this)
  }

  handleMonthChange(direction) {
    const newIndex = direction === "next" ? this.state.currentIndex + 1 : this.state.currentIndex - 1

    this.setState({
      monthData: dummyData.data[newIndex],
      currentIndex: newIndex
    })
  }

  render() {
    return (
      <div className='page-wrapper'>
        <Header month={this.state.monthData.name} handleMonthChange={this.handleMonthChange} />
        <ContentWrapper 
          daysInMonth={this.state.monthData.days_in_month} 
          daysInPreviousMonth={this.state.monthData.days_in_previous_month}
          startDay={this.state.monthData.start_day}
        />
        <Footer year={this.state.monthData.year} />
      </div>
    );
  }
}
