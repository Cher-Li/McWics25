/*import React, { useState, useEffect } from "react";
import "./CalendarApp.css";
import ScheduleList from "./ScheduleList";
import ScheduleForm from "./ScheduleForm";
import axios from "axios";

const CalendarApp = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    axios
      .get("/api/schedules")
      .then((response) => {
        console.log("API Response:", response.data);
        setSchedules(response.data);
      })
      .catch((error) => {
        console.error("Error fetching schedules:", error);
        // Log the error details to see what's wrong
        console.error(
          "Error details:",
          error.response ? error.response.data : error.message
        );
      });
  }, []);

  return (
    <div className="calendar-app">
      <h1>Schedule Builder</h1>
      <ScheduleForm setSchedules={setSchedules} />
      <ScheduleList schedules={schedules} setSchedules={setSchedules} />
    </div>
  );
};

export default CalendarApp;
*/

/*

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
        </div>   )}
      <button onClick={togglePopup}>Add Event</button>
    </div>
  );
};

export default CalendarApp; */
/*import React, { useState, useEffect } from "react";
import "./CalendarApp.css";
import ScheduleList from "./ScheduleList";
import ScheduleForm from "./ScheduleForm";
import axios from "axios";

const CalendarApp = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    axios
      .get("/api/schedules")
      .then((response) => {
        console.log("API Response:", response.data);
        setSchedules(response.data);
      })
      .catch((error) => {
        console.error("Error fetching schedules:", error);
        // Log the error details to see what's wrong
        console.error(
          "Error details:",
          error.response ? error.response.data : error.message
        );
      });
  }, []);

  return (
    <div className="calendar-app">
      <h1>Schedule Builder</h1>
      <ScheduleForm setSchedules={setSchedules} />
      <ScheduleList schedules={schedules} setSchedules={setSchedules} />
    </div>
  );
};

export default CalendarApp;
*/

/*

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
        </div>   )}
      <button onClick={togglePopup}>Add Event</button>
    </div>
  );
};

export default CalendarApp; */

import React, { useState } from "react";
import "./CalendarApp.css";
import ScheduleForm from "./ScheduleForm";
import ScheduleList from "./ScheduleList";

const CalendarApp = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [schedules, setSchedules] = useState([]);

  const openForm = (date) => {
    setSelectedDate(date);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setSelectedDate("");
    setIsFormOpen(false);
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
            <div
              key={index}
              className="day"
              onClick={() => openForm(`${index + 1}/1/2024`)}
            >
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

      {isFormOpen && (
        <div className="event-popup">
          <ScheduleForm
            setSchedules={setSchedules}
            selectedDate={selectedDate}
            closeForm={closeForm}
          />
        </div>
      )}

      <div className="schedule-list">
        <ScheduleList schedules={schedules} setSchedules={setSchedules} />
      </div>
    </div>
  );
};

export default CalendarApp;
