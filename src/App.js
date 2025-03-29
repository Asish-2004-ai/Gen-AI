import React, { useState, useEffect } from "react";
import QueryInput from "./components/QueryInput.js";
import ResultDisplay from "./components/ResultDisplay.js";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"; 
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen p-4 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 bg-gray-700 text-white rounded-full shadow-md transition-transform transform hover:scale-105"
      >
        {darkMode ? " Light Mode" : " Dark Mode"}
      </button>

      <h1 className="text-3xl font-bold text-center">Gen AI Analytics Dashboard</h1>
      <QueryInput darkMode={darkMode} />
      <ResultDisplay darkMode={darkMode} />
    </div>
  );
}

export default App;
