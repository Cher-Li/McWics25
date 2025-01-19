import React, { useState, useEffect } from "react";
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
