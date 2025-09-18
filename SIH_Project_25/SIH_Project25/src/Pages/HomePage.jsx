import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Droplets, Flame, Wind } from "lucide-react";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-6 py-12 text-white">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-teal-400 drop-shadow-lg">
          Welcome to Disaster Preparedness
        </h2>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
          Learn, practice, and track how prepared you are for natural disasters.
          Stay alert. Stay safe. Build resilience. 🌍
        </p>
      </motion.div>

      {/* Disaster Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[
          { icon: <Droplets size={40} />, title: "Flood Preparedness", color: "from-blue-500 to-blue-700" },
          { icon: <AlertTriangle size={40} />, title: "Earthquake Safety", color: "from-yellow-500 to-orange-600" },
          { icon: <Flame size={40} />, title: "Fire Safety", color: "from-red-500 to-red-700" },
          { icon: <Wind size={40} />, title: "Cyclone Awareness", color: "from-teal-400 to-cyan-600" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg flex flex-col items-center text-center`}
          >
            <div className="mb-4 text-white">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-100 mt-2">
              Explore safety tips, survival kits, and emergency response plans.
            </p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-300 mb-6 text-lg">
          Ready to test your preparedness skills?  
        </p>
        <button className="px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg shadow-lg transition-all">
          Start Learning 🚀
        </button>
      </motion.div>
    </div>
  );
}

export default HomePage;
