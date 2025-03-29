import React from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ResultDisplay = ({ darkMode }) => {
  const { results, loading, error } = useSelector((state) => state.query);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!results) return <p className="text-center text-gray-500">No results yet.</p>;

  const data = [
    { name: "A", value: results.chartData[0] },
    { name: "B", value: results.chartData[1] },
    { name: "C", value: results.chartData[2] },
  ];

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">Query Results:</h2>
      <div className={`p-4 rounded-lg shadow-md ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke={darkMode ? "#ffffff" : "#000000"} />
            <YAxis stroke={darkMode ? "#ffffff" : "#000000"} />
            <Tooltip />
            <Bar dataKey="value" fill={darkMode ? "#4F46E5" : "#8884d8"} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResultDisplay;
