"use client"; // Mark this component as a client component

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from '../styles/Calendar.module.css';
import 'react-calendar/dist/Calendar.css';
import events from '../data/events';

const EventsCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDateChange = (date) => {
    setDate(date);
    const event = events.find(event => event.date.toDateString() === date.toDateString());
    setSelectedEvent(event);
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const event = events.find(event => event.date.toDateString() === date.toDateString());
      if (event) {
        return <p className="text-red-600 font-bold">●</p>;
      }
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const event = events.find(event => event.date.toDateString() === date.toDateString());
      if (event) {
        return styles['react-calendar__tile--event'];
      }
    }
  };

  return (
    <div className={`p-4 bg-white rounded-lg shadow-lg ${styles.reactCalendar}`}>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileContent={tileContent}
        tileClassName={tileClassName}
      />
      {selectedEvent && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
          <p>{selectedEvent.details}</p>
        </div>
      )}
    </div>
  );
};

export default EventsCalendar;
