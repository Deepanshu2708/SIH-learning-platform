import React, { useState } from "react";
import DisasterCard from "../UI/DisasterCard";
import FloodCardWithMap from "./floodZigZag";
// import CandyCrushDashboard from "./CandyCrushDashboard.jsx";

export default function LearningModule() {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    {
      title: "Flood Preparedness",
      description: "Learn how to stay safe and protect your property during floods.",
      type: "flood",
    },
    {
      title: "Earthquake Preparedness",
      description: "Essential earthquake safety tips including emergency kit preparation.",
      type: "earthquake",
    },
    {
      title: "Fire Safety",
      description: "Prevent fires and learn how to respond safely in emergencies.",
      type: "fire",
    },
  ];

  if (activeModule === "flood") {
    return <FloodCardWithMap onBack={() => setActiveModule(null)} />;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Learning Module</h1>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modules.map((mod, idx) => (
          <DisasterCard
            key={idx}
            type={mod.type}
            title={mod.title}
            description={mod.description}
            onClick={() => setActiveModule(mod.type)}
          />
        ))}
      </div>
    </div>
  );
}
