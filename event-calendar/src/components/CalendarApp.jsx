import React, { useState, useEffect } from "react";
import "./CalendarApp.css";
import ScheduleList from "./ScheduleList";
import ScheduleForm from "./ScheduleForm";

const CalendarApp = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    // Fetch schedules from API
    const fetchSchedules = async () => {
      const response = await fetch("/api/schedules");
      const data = await response.json();
      setSchedules(data);
    };
    fetchSchedules();
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
