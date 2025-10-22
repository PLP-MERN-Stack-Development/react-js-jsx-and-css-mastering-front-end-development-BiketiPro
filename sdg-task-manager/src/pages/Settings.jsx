import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const resetTasks = () => {
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      localStorage.removeItem("tasks");
      alert("All tasks have been reset.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white p-6 transition-colors">
      <h1 className="text-3xl font-bold mb-6">⚙️ Settings</h1>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">Theme</span>
          <button
            onClick={toggleTheme}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 pt-6">
          <h2 className="text-lg font-medium mb-2">Task Management</h2>
          <button
            onClick={resetTasks}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
          >
            Reset All Tasks
          </button>
        </div>
      </div>
    </div>
  );
}
