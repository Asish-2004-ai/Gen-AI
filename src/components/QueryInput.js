import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuery, setResults, setError } from "../redux/querySlice";

const QueryInput = ({ darkMode }) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const querySuggestions = [
    "What were the total sales last month?",
    "Which product had the highest revenue this quarter?",
    "How many active users do we have?",
    "What is the customer churn rate?",
    "Which region performed best in Q1?",
  ];

  const handleQuerySubmit = () => {
    if (!query) return;

    dispatch(submitQuery(query));

    setTimeout(() => {
      if (Math.random() > 0.2) {
        dispatch(setResults({ chartData: [10, 20, 30], message: "Success!" }));
      } else {
        dispatch(setError("Failed to fetch data!"));
      }
    }, 2000);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask a business question..."
        className={`border p-3 w-full rounded-lg shadow-sm focus:ring-2 outline-none transition duration-200 ${
          darkMode ? "bg-gray-800 text-white border-gray-600 focus:ring-gray-400" : "bg-white text-black border-gray-300 focus:ring-blue-500"
        }`}
      />
      <button
        onClick={handleQuerySubmit}
        className={`mt-4 p-3 w-full rounded-lg shadow-md transition duration-200 ${
          darkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        🚀 Submit Query
      </button>

      {/* Query Suggestions */}
      <div className="mt-4">
        <p className={`text-gray-500 ${darkMode ? "text-gray-400" : ""}`}>Try these:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {querySuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setQuery(suggestion)}
              className={`px-3 py-1 rounded-lg text-sm transition ${
                darkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-200 hover:bg-gray-300 text-black"
              }`}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QueryInput;
