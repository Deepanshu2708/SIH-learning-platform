import React, { useState } from "react";

// Import videos directly from assets
import Video1 from "../assets/vidieo1.mp4";
import Video2 from "../assets/vidieo2.mp4";
import Video3 from "../assets/vidieo3.mp4";

const levels = Array.from({ length: 20 }, (_, i) => ({ id: 7087 + i }));

const FloodCardWithMap = ({ onBack }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleLevelClick = (id, idx) => {
    // Only first 3 levels open videos
    switch (idx) {
      case 0:
        setActiveVideo(Video1);
        break;
      case 1:
        setActiveVideo(Video2);
        break;
      case 2:
        setActiveVideo(Video3);
        break;
      default:
        setActiveVideo(null);
        break;
    }
  };

  return (
    <div className="relative h-screen overflow-y-scroll bg-gradient-to-b from-yellow-200 to-pink-100">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 z-20 px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-100"
      >
        ← Back
      </button>

      {/* Path SVG */}
      <svg viewBox="0 0 400 2000" className="absolute w-full h-[2200px] opacity-80">
        <path
          d="M200,0 
             C50,150 350,250 200,400 
             C50,550 350,700 200,850 
             C50,1000 350,1150 200,1300 
             C50,1450 350,1600 200,1750 
             C50,1900 350,2050 200,2200"
          fill="transparent"
          stroke="url(#grad)"
          strokeWidth="18"
          strokeLinecap="round"
          filter="url(#shadow)"
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <filter id="shadow" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="black" floodOpacity="0.3" />
          </filter>
        </defs>
      </svg>

      {/* Levels */}
      {levels.map((lvl, idx) => (
        <div
          key={lvl.id}
          onClick={() => handleLevelClick(lvl.id, idx)}
          className="absolute flex items-center justify-center w-16 h-16 cursor-pointer"
          style={{
            top: `${idx * 110 + 100}px`,
            left: idx % 2 === 0 ? "25%" : "65%",
          }}
        >
          <div
            className="w-16 h-16 flex items-center justify-center rounded-full shadow-lg text-white font-bold text-lg"
            style={{
              background:
                idx < 3
                  ? "linear-gradient(145deg, #34d399, #059669)" // green for clickable
                  : "linear-gradient(145deg, #f9a8d4, #db2777)",
              boxShadow: "5px 5px 12px rgba(0,0,0,0.4), -5px -5px 12px rgba(255,255,255,0.2)",
            }}
          >
            {lvl.id}
          </div>
        </div>
      ))}

      {/* Video Popup */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-xl shadow-2xl w-[90%] md:w-[60%] lg:w-[50%]">
            <button
              onClick={() => setActiveVideo(null)}
              className="mb-2 px-3 py-1 bg-red-500 text-white rounded-md float-right"
            >
              ✕ Close
            </button>
            <div className="mt-6">
              <video controls autoPlay className="w-full rounded-lg" src={activeVideo} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloodCardWithMap;
