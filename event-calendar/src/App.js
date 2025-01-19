// src/App.js

import React from "react";
import "./App.css"; // Optional: For global styling
import CalendarApp from "./components/CalendarApp"; // Import your main calendar app component

const App = () => {
  return (
    <div className="App">
      <CalendarApp />
    </div>
  );
};

export default App;