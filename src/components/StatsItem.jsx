import React from "react";

const StatsItem = ({ value, label }) => {
  return (
    <div className="stats-item">
      <div className="p-6 rounded-lg">
        <span className="text-4xl font-bold block">{value}</span>
        <p className="mt-2 text-lg">{label}</p>
      </div>
    </div>
  );
};

export default StatsItem;