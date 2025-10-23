import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const linkClass = ({ isActive }) =>
    `hover:underline ${isActive ? "font-bold underline" : ""}`;

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">SDG Task Manager</h1>
      <div className="flex items-center space-x-4">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/tasks" className={linkClass}>
          Tasks
        </NavLink>
        <NavLink to="/support" className={linkClass}>
          Support
        </NavLink>
        <NavLink to="/settings" className={linkClass}>
          Settings
        </NavLink>
        <button
          onClick={toggleTheme}
          className="ml-4 px-2 py-1 border rounded bg-white text-blue-600 dark:bg-gray-800 dark:text-white"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
