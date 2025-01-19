import React, { useState } from 'react';
import './CalendarApp.css';

const CalendarApp = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ text: '', date: '', time: '' });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const addEvent = () => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setNewEvent({ text: '', date: '', time: '' });
    setIsPopupOpen(false);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="CalendarApp">
      <div className="calendar">
        <h1 className="heading">Calendar</h1>
        <div className="weekdays">
          <span>Sunday</span>
          <span>Monday</span>
          <span>Tuesday</span>
          <span>Wednesday</span>
          <span>Thursday</span>
          <span>Friday</span>
          <span>Saturday</span>
        </div>
        <div className="days">
          {Array.from({ length: 31 }, (_, index) => (
            <div key={index} className="day">
              {index + 1}
              {events
                .filter((event) => event.date === `${index + 1}/1/2024`)
                .map((event, i) => (
                  <div key={i} className="event-text">{event.text}</div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {isPopupOpen && (
        <div className="event-popup">
          <input
            type="text"
            name="text"
            placeholder="Event Description"
            value={newEvent.text}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="date"
            placeholder="Date (e.g., 1/1/2024)"
            value={newEvent.date}
            onChange={handleInputChange}
          />
          <button onClick={addEvent}>Add Event</button>
          <button onClick={togglePopup}>Close</button>
        </div>
      )}

      <button onClick={togglePopup}>Add Event</button>
    </div>
  );
};

export default CalendarApp;