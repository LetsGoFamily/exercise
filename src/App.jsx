
import { useState, useEffect } from "react";

const days = Array.from({ length: 75 }, (_, i) => i + 1);
const tasks = [
  { icon: "🚶", label: "Move Often", instruction: "20 squats every 45 minutes", color: "bg-green-100" },
  { icon: "🥗", label: "Healthy Meal", instruction: "One balanced home-cooked meal", color: "bg-yellow-100" },
  { icon: "💧", label: "Hydrate", instruction: "6–8 glasses of water", color: "bg-cyan-100" },
  { icon: "📖", label: "Read or Reflect", instruction: "Read 5 pages or journal", color: "bg-blue-100" },
  { icon: "😌", label: "Mindfulness", instruction: "5–10 mins breathing or meditation", color: "bg-purple-100" },
  { icon: "📸", label: "Mood Check-In", instruction: "Selfie or mood note", color: "bg-pink-100" }
];

export default function App() {
  const [checked, setChecked] = useState(
    days.map(() => Array(tasks.length).fill(false))
  );

  const toggleCheck = (dayIndex, taskIndex) => {
    const newChecked = [...checked];
    newChecked[dayIndex][taskIndex] = !newChecked[dayIndex][taskIndex];
    setChecked(newChecked);
  };

  return (
    <div className="p-4 font-sans">
      <h1 className="text-3xl font-bold mb-2">Easy Tracker – 75 Day Challenge</h1>
      <p className="text-lg italic text-gray-600 mb-4">
        Simple habits for health and energy.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
        {tasks.map((task, i) => (
          <div key={i} className="flex flex-col items-center text-center p-2 border rounded-lg bg-white shadow-sm">
            <div className="text-3xl mb-1">{task.icon}</div>
            <div className="font-semibold text-sm">{task.label}</div>
            <div className="text-xs text-gray-600">{task.instruction}</div>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-2 py-1">Day</th>
              {tasks.map((task, i) => (
                <th key={i} className={`border px-2 py-1 text-center ${task.color}`}>
                  {task.icon}
                  <div className="text-xs">{task.label}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day, i) => (
              <tr key={i}>
                <td className="border px-2 py-1 text-center font-semibold">{day}</td>
                {tasks.map((_, j) => (
                  <td key={j} className="border px-2 py-1 text-center">
                    <input
                      type="checkbox"
                      checked={checked[i][j]}
                      onChange={() => toggleCheck(i, j)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
