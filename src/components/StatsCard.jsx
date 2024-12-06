import React from "react";
import StatsItem from "./StatsItem";
import statsBg from "../assets/stats-bg.jpg";

const StatsCard = () => {
  const statsData = [
    { id: 1, value: 232, label: "Clients" },
    { id: 2, value: 521, label: "Projects" },
    { id: 3, value: 1453, label: "Hours Of Support" },
    { id: 4, value: 32, label: "Workers" },
  ];

  return (
    <section id="stats" className="stats section relative h-auto">

      <div className="absolute inset-0">
        <img
          src={statsBg}
          alt="Stats Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container relative z-10 mx-auto py-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {statsData.map((item) => (
            <StatsItem key={item.id} value={item.value} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCard;