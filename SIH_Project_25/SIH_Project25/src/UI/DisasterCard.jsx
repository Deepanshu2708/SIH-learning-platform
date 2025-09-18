import React from "react";

const disasterData = {
  flood: {
    color: "#4A90E2", // blue
    icon: "🌊",
    background: "url('https://www.svgrepo.com/show/303271/flood.svg')",
  },
  earthquake: {
    color: "#F5A623", // yellow-orange
    icon: "🌍",
    background: "url('https://www.svgrepo.com/show/303233/earthquake.svg')",
  },
  fire: {
    color: "#FF6B35", // orange-red
    icon: "🔥",
    background: "url('https://www.svgrepo.com/show/303248/fire.svg')",
  },
};

const DisasterCard = ({ type = "flood", title, description, onClick }) => {
  const disaster = disasterData[type];

  return (
    <div
      style={{
        width: "300px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.2s",
      }}
      className="disaster-card hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      {/* Header / Background Illustration */}
      <div
        style={{
          height: "140px",
          backgroundColor: disaster.color,
          backgroundImage: disaster.background,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "40px",
        }}
      >
        {disaster.icon}
      </div>

      {/* Content */}
      <div style={{ padding: "20px", flex: 1 }}>
        <h3 style={{ margin: "0 0 10px", color: "#333" }}>{title}</h3>
        <p style={{ margin: "0 0 20px", color: "#555", fontSize: "14px" }}>
          {description}
        </p>

        {/* Interactive UI element */}
        <button
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: disaster.color,
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default DisasterCard;
