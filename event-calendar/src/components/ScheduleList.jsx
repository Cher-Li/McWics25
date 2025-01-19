import React from "react";

const ScheduleList = ({ schedules, setSchedules }) => {
  const handleDelete = async (id) => {
    await fetch(`/api/schedules/${id}`, { method: "DELETE" });
    setSchedules((prev) => prev.filter((schedule) => schedule._id !== id));
  };

  return (
    <ul>
      {schedules.map((schedule) => (
        <li key={schedule._id}>
          <h3>{schedule.title}</h3>
          <p>
            {schedule.date} at {schedule.time}
          </p>
          <p>{schedule.description}</p>
          <button onClick={() => handleDelete(schedule._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ScheduleList;
