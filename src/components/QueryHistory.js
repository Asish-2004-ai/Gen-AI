import React from "react";
import { useSelector } from "react-redux";

const QueryHistory = () => {
  const history = useSelector((state) => state.query.history);

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-700">Query History</h2>
      {history.length === 0 ? (
        <p className="text-gray-500">No previous queries.</p>
      ) : (
        <ul className="list-disc ml-6 text-gray-800">
          {history.map((query, index) => (
            <li key={index}>{query}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueryHistory;
