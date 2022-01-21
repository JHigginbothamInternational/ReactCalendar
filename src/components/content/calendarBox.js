import React, { Component } from "react";

export default class CalendarBox extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return (
            <div className="calendar-box">
                <div className="date">{this.props.date}</div>
                <textarea></textarea>
            </div>
        )
    }
}