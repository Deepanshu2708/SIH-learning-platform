// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   Home,
//   Book,
//   Shield,
//   Globe,
//   BarChart2,
//   Settings,
//   ChevronRight,
//   ChevronLeft,
//   Search,
// } from "lucide-react";

// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const menu = [
//     { name: "Home", icon: Home, path: "/" },
//     { name: "Learning Module", icon: Book, path: "/learning" },
//     { name: "Drills", icon: Shield, path: "/drills" },
//     { name: "Region", icon: Globe, path: "/region" },
//     { name: "Leaderboard", icon: BarChart2, path: "/dashboard" },
//     { name: "Settings", icon: Settings, path: "/settings" },
//   ];

//   return (
//     <div
//       className={`${
//         isOpen ? "w-64" : "w-20"
//       } bg-white shadow-md border-r h-screen flex flex-col transition-all duration-300`}
//     >
//       {/* Toggle Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="p-3 focus:outline-none"
//       >
//         {isOpen ? <ChevronLeft /> : <ChevronRight />}
//       </button>

//       {/* Search */}
//       <div className="px-3 mb-6">
//         {isOpen ? (
//           <div className="flex items-center bg-gray-100 p-2 rounded-md">
//             <Search className="text-gray-500 w-5 h-5 mr-2" />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="bg-transparent outline-none text-sm flex-1"
//             />
//           </div>
//         ) : (
//           <div className="flex justify-center">
//             <Search className="text-gray-500 w-5 h-5" />
//           </div>
//         )}
//       </div>

//       {/* Menu */}
//       <nav className="flex-1">
//         {menu.map((item, index) => {
//           const Icon = item.icon;
//           return (
//             <NavLink
//               to={item.path}
//               key={index}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 transition-colors ${
//                   isActive ? "bg-gray-200 font-medium" : ""
//                 }`
//               }
//             >
//               <Icon className="w-5 h-5" />
//               {isOpen && <span>{item.name}</span>}
//             </NavLink>
//           );
//         })}
//       </nav>
//     </div>
//   );
// }

// export default Sidebar;














import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiBook,
  FiActivity,
  FiMapPin,
  FiGrid,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const menuItems = [
  { name: "Home", path: "/", icon: <FiHome /> },
  { name: "Learning", path: "/learning", icon: <FiBook /> },
  { name: "Drills", path: "/drills", icon: <FiActivity /> },
  { name: "Region", path: "/region", icon: <FiMapPin /> },
  { name: "Dashboard", path: "/dashboard", icon: <FiGrid /> },
  { name: "Settings", path: "/settings", icon: <FiSettings /> },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } h-screen bg-gray-900 text-white transition-all duration-300 flex flex-col`}
    >
      {/* Header / Collapse Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!isCollapsed && <h1 className="text-lg font-bold">DisasterEdu</h1>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-300 hover:text-white"
        >
          {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 flex flex-col mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors ${
                isActive ? "bg-gray-800 text-emerald-400" : "text-gray-300"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && <span className="text-sm font-medium">{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer / Collapse Info */}
      <div className="p-4 border-t border-gray-700 text-xs text-gray-400">
        {!isCollapsed && "© 2025 DisasterEdu"}
      </div>
    </div>
  );
}
