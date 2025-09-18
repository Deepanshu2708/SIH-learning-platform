// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";
// import { motion } from "framer-motion";

// const quizPerformance = [
//   { name: "Jan", score: 30 },
//   { name: "Feb", score: 45 },
//   { name: "Mar", score: 60 },
//   { name: "Apr", score: 50 },
//   { name: "May", score: 42 },
//   { name: "Jun", score: 55 },
//   { name: "Jul", score: 65 },
//   { name: "Aug", score: 58 },
//   { name: "Sep", score: 70 },
//   { name: "Oct", score: 75 },
// ];

// const recentQuizzes = [
//   { title: "Earthquake Safety", date: "2023-10-26", remaining: "Remaining", score: "92/100" },
//   { title: "Floods & Water Safety", date: "2023-10-20", remaining: "3/12 17:00", score: "92/100" },
//   { title: "First Aid Basics", date: "2023-10-18", remaining: "38:16:00", score: "92/100" },
// ];

// const pieData = [
//   { name: "Completed", value: 20 },
//   { name: "Remaining", value: 80 },
// ];
// const PIE_COLORS = ["#06b6d4", "#334155"];

// export default function PathshaalaDashboard() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#050816] text-slate-200 font-sans">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="max-w-[1200px] mx-auto p-6"
//       >
//         <motion.header
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="flex items-center justify-between mb-6"
//         >
//           <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//             Student Activity & Progress
//           </h1>
//           <div className="flex items-center gap-3">
//             <select className="bg-[#0b1220] px-3 py-2 rounded-lg text-sm border border-[#1f2937] hover:border-cyan-400 transition-all">
//               <option>This Week</option>
//               <option>This Month</option>
//             </select>
//             <button className="bg-gradient-to-r from-cyan-400 to-blue-600 text-black px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:scale-105 transition-transform">
//               Generate Report
//             </button>
//           </div>
//         </motion.header>

//         {/* TOP CARDS */}
//         <div className="grid grid-cols-12 gap-4 mb-6">
//           {[
//             { title: "Quizzes Attended", value: "12", subtitle: "Total Classes" },
//             { title: "Average Score", value: "85%", subtitle: "—" },
//             { title: "Active Subjects", value: "7/10", subtitle: "Subjects" },
//             { title: "Badge", value: "Disaster Hero – Level 3", subtitle: "" },
//           ].map((card, i) => (
//             <motion.div
//               key={card.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
//               className="col-span-3 bg-[#0f1724] rounded-2xl p-5 shadow-lg hover:shadow-cyan-900/40 hover:scale-[1.02] transition-all"
//             >
//               <div className="text-xs text-slate-400">{card.title}</div>
//               <div className="text-3xl font-bold mt-2">{card.value}</div>
//               {card.subtitle && <div className="text-xs text-slate-500 mt-1">{card.subtitle}</div>}
//             </motion.div>
//           ))}
//         </div>

//         {/* MIDDLE: CHART + PIE */}
//         <div className="grid grid-cols-12 gap-4">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="col-span-8 bg-[#0f1724] rounded-2xl p-4 shadow-lg"
//           >
//             <div className="text-sm text-slate-300 font-semibold mb-3">Quiz Performance Over Time</div>
//             <div style={{ width: "100%", height: 220 }}>
//               <ResponsiveContainer>
//                 <LineChart data={quizPerformance}>
//                   <XAxis dataKey="name" stroke="#94a3b8" />
//                   <YAxis stroke="#94a3b8" />
//                   <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "none" }} />
//                   <Line type="monotone" dataKey="score" stroke="#06b6d4" strokeWidth={3} dot={{ r: 4, fill: "#06b6d4" }} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="col-span-4 bg-[#0f1724] rounded-2xl p-4 flex flex-col items-center justify-between shadow-lg"
//           >
//             <div className="w-full mb-4">
//               <div className="text-sm text-slate-300 font-semibold mb-2">Module Completion</div>
//               <div style={{ width: "100%", height: 160 }}>
//                 <ResponsiveContainer>
//                   <PieChart>
//                     <Pie
//                       data={pieData}
//                       innerRadius={45}
//                       outerRadius={60}
//                       dataKey="value"
//                       startAngle={90}
//                       endAngle={-270}
//                     >
//                       {pieData.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
//                       ))}
//                     </Pie>
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>
//               <div className="flex justify-between text-xs text-slate-400">
//                 <div>Completed</div>
//                 <div>20%</div>
//               </div>
//             </div>

//             <div className="w-full">
//               <button className="w-full border border-cyan-600 hover:bg-cyan-900/30 rounded-md px-3 py-2 text-sm transition-all">
//                 View Full Report
//               </button>
//             </div>
//           </motion.div>
//         </div>

//         {/* RECENT QUIZ SCORES TABLE */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           className="mt-6 bg-[#0f1724] rounded-2xl p-4 shadow-lg"
//         >
//           <div className="flex items-center justify-between mb-3">
//             <div className="text-sm text-slate-300 font-semibold">Recent Quiz Scores</div>
//             <button className="text-xs text-cyan-400 hover:underline">View All</button>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-sm table-auto">
//               <thead>
//                 <tr className="text-slate-400 text-left">
//                   <th className="py-2">Quiz</th>
//                   <th className="py-2">Date</th>
//                   <th className="py-2">Remaining</th>
//                   <th className="py-2">Score</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {recentQuizzes.map((q) => (
//                   <tr key={q.title} className="border-t border-[#111827] hover:bg-[#1e293b] transition-all">
//                     <td className="py-3">{q.title}</td>
//                     <td className="py-3 text-slate-400">{q.date}</td>
//                     <td className="py-3 text-slate-400">{q.remaining}</td>
//                     <td className="py-3 font-semibold">{q.score}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </motion.div>

//         {/* FOOTER STATS */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.4 }}
//           className="mt-6 grid grid-cols-3 gap-4"
//         >
//           {["Active Streak", "Badges", "Total Points"].map((label, i) => (
//             <div key={label} className="bg-[#0f1724] rounded-2xl p-4 shadow-lg hover:shadow-cyan-900/40 hover:scale-[1.02] transition-all">
//               <div className="text-xs text-slate-400">{label}</div>
//               <div className="text-xl font-bold mt-2">
//                 {i === 0 && "5 days"}
//                 {i === 1 && "3"}
//                 {i === 2 && "1240"}
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }












import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { motion } from "framer-motion";

const quizPerformance = [
  { name: "Jan", score: 30 },
  { name: "Feb", score: 45 },
  { name: "Mar", score: 60 },
  { name: "Apr", score: 50 },
  { name: "May", score: 42 },
  { name: "Jun", score: 55 },
  { name: "Jul", score: 65 },
  { name: "Aug", score: 58 },
  { name: "Sep", score: 70 },
  { name: "Oct", score: 75 },
];

const recentQuizzes = [
  { title: "Earthquake Safety", date: "2023-10-26", remaining: "Remaining", score: "92/100" },
  { title: "Floods & Water Safety", date: "2023-10-20", remaining: "3/12 17:00", score: "92/100" },
  { title: "First Aid Basics", date: "2023-10-18", remaining: "38:16:00", score: "92/100" },
];

const pieData = [
  { name: "Completed", value: 40 },
  { name: "Remaining", value: 60 },
];
const PIE_COLORS = ["#2563eb", "#facc15"]; // blue + yellow only

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <div className="max-w-[1200px] mx-auto p-6">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Student Activity & Progress
          </h1>
          <div className="flex items-center gap-3">
            <select className="bg-white px-3 py-2 rounded-md text-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>This Week</option>
              <option>This Month</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow">
              Generate Report
            </button>
          </div>
        </div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-12 gap-4 mb-6">
          {[
            { title: "Quizzes Attended", value: "12", color: "text-blue-600" },
            { title: "Average Score", value: "85%", color: "text-yellow-500" },
            { title: "Active Subjects", value: "7/10", color: "text-red-500" },
            { title: "Badge", value: "Disaster Hero – Lvl 3", color: "text-blue-700" },
          ].map((card, i) => (
            <div
              key={i}
              className="col-span-3 bg-white rounded-lg p-5 shadow-sm border border-gray-100"
            >
              <div className="text-sm text-gray-500">{card.title}</div>
              <div className={`text-2xl font-bold mt-2 ${card.color}`}>{`card.value`}</div>
            </div>
          ))}
        </div>

        {/* MIDDLE: CHART + PIE */}
        <div className="grid grid-cols-12 gap-4">
          {/* LINE CHART */}
          <div className="col-span-8 bg-white rounded-lg p-5 shadow-sm border border-gray-100">
            <div className="text-sm text-gray-700 font-medium mb-4">
              Quiz Performance Over Time
            </div>
            <div style={{ width: "100%", height: 220 }}>
              <ResponsiveContainer>
                <LineChart data={quizPerformance}>
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#2563eb" // Blue professional stroke
                    strokeWidth={2}
                    dot={{ r: 3, fill: "#2563eb" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* PIE CHART */}
          <div className="col-span-4 bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="text-sm text-gray-700 font-medium mb-4">
              Module Completion
            </div>
            <div style={{ width: "100%", height: 160 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={45}
                    outerRadius={60}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={PIE_COLORS[index % PIE_COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <button className="mt-4 border border-gray-300 hover:bg-gray-50 rounded-md px-4 py-2 text-sm text-gray-700">
              View Full Report
            </button>
          </div>
        </div>

        {/* RECENT QUIZ SCORES */}
        <div className="mt-6 bg-white rounded-lg p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium text-gray-700">
              Recent Quiz Scores
            </div>
            <button className="text-xs text-blue-600 hover:underline">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm table-auto">
              <thead>
                <tr className="text-gray-500 text-left">
                  <th className="py-2">Quiz</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Remaining</th>
                  <th className="py-2">Score</th>
                </tr>
              </thead>
              <tbody>
                {recentQuizzes.map((q, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3">{q.title}</td>
                    <td className="py-3 text-gray-500">{q.date}</td>
                    <td className="py-3 text-gray-500">{q.remaining}</td>
                    <td className="py-3 font-semibold text-red-500">
                      {q.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}