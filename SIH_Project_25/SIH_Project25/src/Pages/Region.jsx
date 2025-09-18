import React, { useState, useEffect } from "react";
import { FiMapPin, FiAlertCircle, FiHeart, FiWifiOff, FiWifi, FiRefreshCw, FiShare2 } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// ======== ENRICHED STATIC DATA ========
const DATA = [
  {
    id: "chennai",
    name: "Chennai",
    region: "Tamil Nadu",
    disaster: { 
      type: "Flood", 
      severity: "High",
      description: "Heavy rainfall causing widespread flooding in low-lying areas. Evacuations underway in coastal regions.",
      updateTime: "2 hours ago"
    },
    contacts: [
      { name: "Police", phone: "100", icon: "👮" },
      { name: "Fire Dept", phone: "101", icon: "🚒" },
      { name: "Ambulance", phone: "102", icon: "🚑" },
      { name: "Disaster Management", phone: "1070", icon: "⚠" },
      { name: "Women Helpline", phone: "1091", icon: "👩" },
    ],
    shelters: [
      { name: "Anna Nagar Tower Park", type: "Community Hall", capacity: 150, distanceKm: 1.2, occupancy: 120 },
      { name: "St. Mary's School", type: "School", capacity: 200, distanceKm: 2.5, occupancy: 80 },
      { name: "Chennai Trade Center", type: "Exhibition Hall", capacity: 500, distanceKm: 4.3, occupancy: 320 },
    ],
    hospitals: [
      { name: "Apollo Hospital", distanceKm: 2, specializations: ["ER", "Trauma", "ICU"], bedsAvailable: 12, waitTime: "15 mins" },
      { name: "MIOT Hospital", distanceKm: 5, specializations: ["Cardiology", "Orthopedics"], bedsAvailable: 5, waitTime: "45 mins" },
      { name: "Government General Hospital", distanceKm: 3.2, specializations: ["ER", "General Medicine"], bedsAvailable: 8, waitTime: "30 mins" },
    ],
    food: [
      { name: "Annapurna Community Kitchen", type: "Veg Meals", distanceKm: 1.5, mealsServed: "12pm-2pm, 7pm-9pm" },
      { name: "Raymond Food Center", type: "Non-Veg Meals", distanceKm: 3, mealsServed: "11am-3pm" },
      { name: "Relief Supply Center", type: "Dry Rations", distanceKm: 2, mealsServed: "9am-5pm" },
    ],
    transport: [
      { type: "Bus Stand", distanceKm: 2, status: "Operational", lastUpdate: "1 hour ago" },
      { type: "Railway Station", distanceKm: 6, status: "Limited Service", lastUpdate: "3 hours ago" },
      { type: "Airport", distanceKm: 12, status: "Closed", lastUpdate: "5 hours ago" },
    ],
    tips: [
      "Avoid traveling through waterlogged areas",
      "Boil drinking water to prevent diseases",
      "Keep emergency kit and documents ready"
    ]
  },
  {
    id: "shillong",
    name: "Shillong",
    region: "Meghalaya",
    disaster: { 
      type: "Landslide", 
      severity: "Medium",
      description: "Multiple landslides reported on major highways. Some rural areas cut off from main city.",
      updateTime: "5 hours ago"
    },
    contacts: [
      { name: "Police", phone: "100", icon: "👮" },
      { name: "Fire Dept", phone: "101", icon: "🚒" },
      { name: "Ambulance", phone: "102", icon: "🚑" },
      { name: "Disaster Management", phone: "1070", icon: "⚠" },
    ],
    shelters: [
      { name: "Pinewood Hotel", type: "Hotel", capacity: 80, distanceKm: 0.8, occupancy: 45 },
      { name: "Meghalaya State Museum", type: "Public Building", capacity: 120, distanceKm: 1.5, occupancy: 60 },
      { name: "North Eastern Hill University", type: "University Campus", capacity: 300, distanceKm: 4.2, occupancy: 110 },
    ],
    hospitals: [
      { name: "Civil Hospital", distanceKm: 1, specializations: ["ER", "General"], bedsAvailable: 6, waitTime: "20 mins" },
      { name: "NEIGRIHMS", distanceKm: 3, specializations: ["Specialized Care", "Surgery"], bedsAvailable: 3, waitTime: "1 hour" },
      { name: "Woodland Hospital", distanceKm: 2.5, specializations: ["General Medicine"], bedsAvailable: 4, waitTime: "40 mins" },
    ],
    food: [
      { name: "Community Kitchen", type: "Veg Meals", distanceKm: 0.5, mealsServed: "11am-2pm, 6pm-8pm" },
      { name: "Relief Camp Food", type: "Non-Veg Meals", distanceKm: 2, mealsServed: "12pm-3pm" },
    ],
    transport: [
      { type: "Bus Stand", distanceKm: 1, status: "Limited Service", lastUpdate: "2 hours ago" },
      { type: "Airport", distanceKm: 8, status: "Operational", lastUpdate: "1 hour ago" },
    ],
    tips: [
      "Avoid hilly areas and unstable slopes",
      "Listen for landslide warnings on local radio",
      "Have an evacuation plan ready"
    ]
  },
  {
    id: "lucknow",
    name: "Lucknow",
    region: "Uttar Pradesh",
    disaster: { 
      type: "Heatwave", 
      severity: "Low",
      description: "Temperatures reaching 45°C. Heatwave alert issued for next 3 days. Elderly and children at risk.",
      updateTime: "6 hours ago"
    },
    contacts: [
      { name: "Police", phone: "100", icon: "👮" },
      { name: "Fire Dept", phone: "101", icon: "🚒" },
      { name: "Ambulance", phone: "102", icon: "🚑" },
      { name: "Disaster Management", phone: "1070", icon: "⚠" },
    ],
    shelters: [
      { name: "Community Center Hazratganj", type: "Community Hall", capacity: 100, distanceKm: 2, occupancy: 20 },
      { name: "Lucknow University Campus", type: "University", capacity: 250, distanceKm: 3.5, occupancy: 30 },
    ],
    hospitals: [
      { name: "King George Hospital", distanceKm: 2, specializations: ["ER", "Heatstroke"], bedsAvailable: 15, waitTime: "10 mins" },
      { name: "Balrampur Hospital", distanceKm: 4, specializations: ["General Medicine"], bedsAvailable: 8, waitTime: "25 mins" },
      { name: "Civil Hospital", distanceKm: 3.2, specializations: ["Emergency"], bedsAvailable: 12, waitTime: "15 mins" },
    ],
    food: [
      { name: "Relief Camp Chowk", type: "Veg Meals", distanceKm: 1, mealsServed: "11am-3pm" },
      { name: "Community Kitchen", type: "Non-Veg Meals", distanceKm: 2, mealsServed: "12pm-4pm" },
      { name: "Water Distribution Center", type: "Drinking Water", distanceKm: 1.5, mealsServed: "8am-8pm" },
    ],
    transport: [
      { type: "Bus Stand", distanceKm: 2, status: "Operational", lastUpdate: "30 mins ago" },
      { type: "Railway Station", distanceKm: 5, status: "Operational", lastUpdate: "1 hour ago" },
      { type: "Airport", distanceKm: 12, status: "Operational", lastUpdate: "1 hour ago" },
    ],
    tips: [
      "Stay hydrated and avoid going out during peak hours",
      "Use ORS to maintain electrolyte balance",
      "Check on elderly neighbors regularly"
    ]
  },
  {
    id: "bhopal",
    name: "Bhopal",
    region: "Madhya Pradesh",
    disaster: { 
      type: "Earthquake", 
      severity: "Medium",
      description: "Earthquake measuring 5.8 on Richter scale. Aftershocks possible. Structural damage reported in old city areas.",
      updateTime: "3 hours ago"
    },
    contacts: [
      { name: "Police", phone: "100", icon: "👮" },
      { name: "Fire Dept", phone: "101", icon: "🚒" },
      { name: "Ambulance", phone: "102", icon: "🚑" },
      { name: "Disaster Management", phone: "1070", icon: "⚠" },
      { name: "Earthquake Helpline", phone: "1092", icon: "🌋" },
    ],
    shelters: [
      { name: "Bharat Bhavan", type: "Cultural Center", capacity: 200, distanceKm: 1.8, occupancy: 90 },
      { name: "Sultania Hospital Ground", type: "Open Ground", capacity: 500, distanceKm: 2.5, occupancy: 200 },
      { name: "MP Nagar Community Hall", type: "Community Hall", capacity: 120, distanceKm: 3.2, occupancy: 60 },
    ],
    hospitals: [
      { name: "Hamidia Hospital", distanceKm: 2.2, specializations: ["ER", "Trauma", "Orthopedics"], bedsAvailable: 18, waitTime: "20 mins" },
      { name: "Bhopal Memorial Hospital", distanceKm: 4.5, specializations: ["General Surgery", "ICU"], bedsAvailable: 7, waitTime: "45 mins" },
      { name: "Chirayu Hospital", distanceKm: 3.8, specializations: ["Emergency Care"], bedsAvailable: 10, waitTime: "30 mins" },
    ],
    food: [
      { name: "Relief Camp TT Nagar", type: "Veg Meals", distanceKm: 2.1, mealsServed: "10am-2pm, 6pm-9pm" },
      { name: "Community Kitchen", type: "Non-Veg Meals", distanceKm: 3.5, mealsServed: "11am-3pm" },
      { name: "Dry Ration Center", type: "Dry Rations", distanceKm: 1.5, mealsServed: "9am-5pm" },
    ],
    transport: [
      { type: "Bus Stand", distanceKm: 2.5, status: "Limited Service", lastUpdate: "2 hours ago" },
      { type: "Railway Station", distanceKm: 4, status: "Operational", lastUpdate: "1 hour ago" },
      { type: "Airport", distanceKm: 10, status: "Operational", lastUpdate: "1 hour ago" },
    ],
    tips: [
      "Avoid damaged buildings and structures",
      "If indoors, take cover under sturdy furniture",
      "Be prepared for aftershocks"
    ]
  }
];

// ======== REUSABLE COMPONENTS ========
const PanelCard = ({ title, children, severity, className = "", refreshable, onRefresh }) => {
  const severityColors = { 
    High: "bg-red-50 border-red-200", 
    Medium: "bg-yellow-50 border-yellow-200", 
    Low: "bg-green-50 border-green-200" 
  };
  
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
     className={`bg-white p-4 rounded-lg border shadow-sm space-y-2 ${
  severity ? severityColors[severity] : ""
} ${className || ""}`}

    >
      <div className="font-semibold text-gray-800 flex items-center justify-between">
        <span className="flex items-center gap-2">
          {title}
          {severity && (
            <span className={`text-xs px-2 py-1 rounded-full ${
              severity === "High" ? "bg-red-100 text-red-800" :
              severity === "Medium" ? "bg-yellow-100 text-yellow-800" :
              "bg-green-100 text-green-800"
            }`}>
              {severity} Risk
            </span>
          )}
        </span>
        {refreshable && (
          <button 
            onClick={onRefresh}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FiRefreshCw size={16} />
          </button>
        )}
      </div>
      {children}
    </motion.div>
  );
};

const ListItem = ({ children, onClick, className = "" }) => (
 <motion.li
  whileHover={{ scale: 1.01 }}
  className={`border rounded-lg p-3 transition-all bg-white ${
    onClick ? "cursor-pointer hover:shadow-md" : ""
  } ${className || ""}`}
  onClick={onClick}
>

    {children}
  </motion.li>
);

const StatusPill = ({ status, text }) => (
  <span className={`text-xs px-2 py-1 rounded-full ${
    status === "Operational" ? "bg-green-100 text-green-800" :
    status === "Limited Service" ? "bg-yellow-100 text-yellow-800" :
    "bg-red-100 text-red-800"
  }`}>
    {text || status}
  </span>
);

// ======== MAIN APP ========
export default function Region() {
  const [cityId, setCityId] = useState("chennai");
  const [status, setStatus] = useState("safe");
  const [location, setLocation] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [connectivity, setConnectivity] = useState(navigator.onLine);
  const [expandedSection, setExpandedSection] = useState(null);

  const city = DATA.find((c) => c.id === cityId);

  // Handle connectivity status
  useEffect(() => {
    const handleOnline = () => setConnectivity(true);
    const handleOffline = () => setConnectivity(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Location Request
  const requestLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({ 
          lat: pos.coords.latitude, 
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy 
        });
        
        // Add location update alert
        setAlerts(prev => [`Location updated: ${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`, ...prev.slice(0, 4)]);
      },
      (error) => {
        let errorMsg = "Location permission denied";
        if (error.code === error.POSITION_UNAVAILABLE) {
          errorMsg = "Location information unavailable";
        } else if (error.code === error.TIMEOUT) {
          errorMsg = "Location request timed out";
        }
        alert(errorMsg);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  };

  // SOS Trigger
  const sendSOS = () => {
    const msg = `🚨 SOS ALERT: User needs immediate assistance at ${
      location ? `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}` : "unknown location"
    } - Status: ${status.toUpperCase()}`;
    
    setAlerts(prev => [{
      id: Date.now(),
      message: msg,
      time: new Date().toLocaleTimeString(),
      read: false
    }, ...prev.slice(0, 9)]);
    
    // Simulate sending to emergency contacts
    alert("SOS sent to emergency services! Your location has been shared.");
  };

  // Mark alert as read
  const markAsRead = (id) => {
    setAlerts(prev => 
      prev.map(alert => 
        alert.id === id ? { ...alert, read: true } : alert
      )
    );
  };

  // Refresh data
  const refreshData = () => {
    setLastUpdated(new Date());
    
    // Add refresh alert
    setAlerts(prev => [`Data refreshed for ${city.name}`, ...prev.slice(0, 4)]);
  };

  // Share status
  const shareStatus = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Emergency Status',
        text: `I'm currently marked as ${status.toUpperCase()} in ${city.name}. My location: ${location ? `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}` : 'Not shared'}`,
        url: window.location.href
      })
      .catch(err => {
        console.log('Error sharing:', err);
      });
    } else {
      alert('Web Share API not supported in your browser');
    }
  };

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Connectivity Status */}
      <div className={`p-2 text-center text-xs font-medium ${connectivity ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {connectivity ? (
          <span className="flex items-center justify-center gap-1"><FiWifi /> Online</span>
        ) : (
          <span className="flex items-center justify-center gap-1"><FiWifiOff /> Offline - Showing cached data</span>
        )}
      </div>

      {/* HEADER */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-3">
          <div className="text-xl font-bold flex items-center gap-2">
            <FiHeart className="text-red-200" />
            Emergency Coordination Platform
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-blue-700 px-3 py-1 rounded-full">
              <span>Select City:</span>
              <select
                value={cityId}
                onChange={(e) => setCityId(e.target.value)}
                className="px-2 py-1 rounded text-black bg-white"
              >
                {DATA.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            
            <button 
              onClick={refreshData}
              className="p-2 bg-blue-700 hover:bg-blue-800 rounded-full transition-colors"
              title="Refresh data"
            >
              <FiRefreshCw />
            </button>
          </div>
        </div>
      </header>

      {/* Disaster Alert Banner */}
      <div className={`p-3 text-center font-medium ${
        city.disaster.severity === "High" ? "bg-red-600 text-white" :
        city.disaster.severity === "Medium" ? "bg-yellow-500 text-black" :
        "bg-orange-500 text-white"
      }`}>
        <div className="max-w-7xl mx-auto">
          <span className="font-bold">{city.name} Alert: </span>
          {city.disaster.type} - {city.disaster.description}
        </div>
      </div>

      {/* MAIN GRID */}
      <main className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* LEFT PANEL */}
        <div className="space-y-4">
          <PanelCard title="Your Status">
            <div className="flex gap-2">
              <button
                className={`flex-1 px-3 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  status === "safe" 
                    ? "bg-green-600 text-white shadow-md" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setStatus("safe")}
              >
                <div className="w-3 h-3 rounded-full bg-white"></div>
                Safe
              </button>
              <button
                className={`flex-1 px-3 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  status === "help" 
                    ? "bg-red-600 text-white shadow-md" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setStatus("help")}
              >
                <div className="w-3 h-3 rounded-full bg-white"></div>
                Needs Help
              </button>
            </div>

            <div className="flex gap-2 mt-3">
              <button
                className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
                onClick={requestLocation}
              >
                <FiMapPin /> {location ? "Update" : "Share"} Location
              </button>
              <button
                className="px-3 py-2 bg-red-700 hover:bg-red-800 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
                onClick={sendSOS}
              >
                <FiAlertCircle /> SOS
              </button>
              <button
                className="px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
                onClick={shareStatus}
              >
                <FiShare2 />
              </button>
            </div>

            {location && (
              <div className="text-sm text-gray-600 mt-2 p-2 bg-gray-50 rounded">
                <div>Location: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}</div>
                <div className="text-xs">Accuracy: ±{Math.round(location.accuracy)} meters</div>
                <div className="text-xs mt-1">Last updated: {new Date().toLocaleTimeString()}</div>
              </div>
            )}
          </PanelCard>

          <PanelCard title="Emergency Contacts">
            <ul className="space-y-2">
              {city.contacts.map((c, i) => (
                <ListItem key={i}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{c.icon}</span>
                      <div>{c.name}</div>
                    </div>
                    <a 
                      href={`tel:${c.phone}`} 
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                    >
                      {c.phone}
                    </a>
                  </div>
                </ListItem>
              ))}
            </ul>
          </PanelCard>

          <PanelCard title="Safety Tips">
            <ul className="space-y-2">
              {city.tips.map((tip, i) => (
                <li key={i} className="text-sm p-2 bg-yellow-50 rounded-lg border border-yellow-100">
                  {tip}
                </li>
              ))}
            </ul>
          </PanelCard>
        </div>

        {/* MIDDLE PANEL */}
        <div className="space-y-4">
          <PanelCard title="Disaster Information" severity={city.disaster.severity}>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Type:</span>
                <span>{city.disaster.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Severity:</span>
                <StatusPill status={city.disaster.severity} />
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Last Update:</span>
                <span>{city.disaster.updateTime}</span>
              </div>
              <div className="mt-2 p-2 bg-gray-50 rounded">
                {city.disaster.description}
              </div>
            </div>
          </PanelCard>

          <PanelCard 
            title="Shelters" 
            severity={city.disaster.severity}
            refreshable={true}
            onRefresh={refreshData}
          >
            <ul className="space-y-2">
              {city.shelters.map((s, i) => (
                <ListItem key={i}>
                  <div className="font-medium">{s.name}</div>
                  <div className="text-sm text-gray-600 flex justify-between mt-1">
                    <span>{s.type} • {s.distanceKm} km away</span>
                    <StatusPill 
                      status={s.occupancy < s.capacity * 0.8 ? "Available" : "Nearly Full"} 
                      text={`${s.capacity - s.occupancy} spots left`}
                    />
                  </div>
                </ListItem>
              ))}
            </ul>
          </PanelCard>

          <PanelCard title="Hospitals" severity={city.disaster.severity}>
            <ul className="space-y-2">
              {city.hospitals.map((h, i) => (
                <ListItem key={i}>
                  <div className="font-medium">{h.name}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    <div>{h.distanceKm} km away • {h.specializations?.join(", ")}</div>
                    <div className="flex justify-between mt-1">
                      <span>Beds: {h.bedsAvailable} available</span>
                      <span>Wait: {h.waitTime}</span>
                    </div>
                  </div>
                </ListItem>
              ))}
            </ul>
          </PanelCard>
        </div>

        {/* RIGHT PANEL */}
        <div className="space-y-4">
          <PanelCard title="Food & Supplies">
            <ul className="space-y-2">
              {city.food.map((f, i) => (
                <ListItem key={i}>
                  <div className="font-medium">{f.name}</div>
                  <div className="text-sm text-gray-600 flex justify-between mt-1">
                    <span>{f.type} • {f.distanceKm} km away</span>
                    <span>{f.mealsServed}</span>
                  </div>
                </ListItem>
              ))}
            </ul>
          </PanelCard>

          <PanelCard title="Transport Status">
            <ul className="space-y-2">
              {city.transport.map((t, i) => (
                <ListItem key={i}>
                  <div className="font-medium">{t.type}</div>
                  <div className="text-sm text-gray-600 flex justify-between mt-1">
                    <span>{t.distanceKm} km away</span>
                    <StatusPill status={t.status} />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Updated: {t.lastUpdate}</div>
                </ListItem>
              ))}
            </ul>
          </PanelCard>

          <PanelCard title="Recent Alerts">
            <div className="text-xs text-gray-500 text-right mb-2">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </div>
            <ul className="space-y-2 max-h-96 overflow-y-auto">
              {alerts.length === 0 ? (
                <li className="text-center text-gray-400 py-4">No alerts yet</li>
              ) : (
                alerts.map((alert) => (
                  <ListItem 
                    key={alert.id} 
                    className={alert.read ? "bg-gray-50 opacity-75" : "bg-red-50 border-red-200"}
                    onClick={() => markAsRead(alert.id)}
                  >
                    <div className="text-sm">
                      <div className="flex justify-between items-start">
                        <span className="font-medium">{alert.message}</span>
                        {!alert.read && (
                          <span className="flex h-2 w-2 ml-2 mt-1">
                            <span className="animate-ping absolute h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{alert.time}</div>
                    </div>
                  </ListItem>
                ))
              )}
            </ul>
          </PanelCard>
        </div>
      </main>

      <footer className="p-4 text-center text-xs text-gray-500 border-t mt-6">
        <div className="max-w-7xl mx-auto">
          Prototype • Static Data • Tailwind + React • Enhanced UI with Bhopal data
        </div>
      </footer>
    </div>
  );
}