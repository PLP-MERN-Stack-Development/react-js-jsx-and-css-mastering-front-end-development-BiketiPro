import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { useLocalStorage } from "../hooks/useLocalStorage.jsx";

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const resetTasks = () => {
    setTasks([]);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Settings</h2>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 border rounded bg-blue-600 text-white"
      >
        Toggle Theme ({theme})
      </button>
      <button
        onClick={resetTasks}
        className="px-4 py-2 border rounded bg-red-600 text-white"
      >
        Reset All Tasks
      </button>
    </div>
  );
};

export default Settings;
