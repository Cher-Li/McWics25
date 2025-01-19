/*import React, { useState } from "react";

const ScheduleForm = ({ setSchedules }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSchedule = { title, date, time, description };
    const response = await fetch("/api/schedules", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSchedule),
    });
    const data = await response.json();
    setSchedules((prev) => [...prev, data]);
    setTitle("");
    setDate("");
    setTime("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      ></textarea>
      <button type="submit">Add Schedule</button>
    </form>
  );
};

export default ScheduleForm;*/


import React, { useState } from "react";

const ScheduleForm = ({ setSchedules, selectedDate, closeForm }) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSchedule = { title, date: selectedDate, time, description };
    const response = await fetch("/api/schedules", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSchedule),
    });

    

    const data = await response.json();
    setSchedules((prev) => [...prev, data]);
    setTitle("");
    setTime("");
    setDescription("");
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Event for {selectedDate}</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      ></textarea>
      <button type="submit">Add Event</button>
      <button type="button" onClick={closeForm}>
        Cancel
      </button>
    </form>
  );
};

export default ScheduleForm;
