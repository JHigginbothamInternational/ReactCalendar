import React from 'react';

import DayOfWeek from './dayOfWeek';
import CalendarBox from './calendarBox';

export default function contentWrapper(props) {
    const renderPreviousCalendarBoxes = () => {
        const previousCalendarBoxes = []

        for (let i=1; i<=props.startDay; i++) {
            previousCalendarBoxes.push(
                <CalendarBox date={props.daysInPreviousMonth - (props.startDay - i)} />
            )
        }

        return previousCalendarBoxes
    }

    const renderCalendarBoxes = () => {
        const calendarBoxes = []

        for (let i=1; i<=props.daysInMonth; i++) {
            calendarBoxes.push(
                <CalendarBox 
                    key={i}
                    date={i} 
                    reminder={props.reminderData.filter(data => data.day == i)[0]}
                    month={props.month}
                    year={props.year}
                />
            )
        }

        return calendarBoxes
    }

    const renderNextCalendarBoxes = () => {
        const nextCalendarBoxes = []

        for (let i=1; i<=(42 - props.daysInMonth - props.startDay); i++) {
            nextCalendarBoxes.push(
                <CalendarBox key={`N${i}`} date={i} />
            ) 
        }

        return nextCalendarBoxes
    }

    return (
        <div className="content-wrapper">
            <DayOfWeek day="Sunday" />
            <DayOfWeek day="Monday" />
            <DayOfWeek day="Tuesday" />
            <DayOfWeek day="Wednesday" />
            <DayOfWeek day="Thursday" />
            <DayOfWeek day="Friday" />
            <DayOfWeek day="Saturday" />
            {renderPreviousCalendarBoxes()}
            {renderCalendarBoxes()}
            {renderNextCalendarBoxes()}
        </div>
    )
}