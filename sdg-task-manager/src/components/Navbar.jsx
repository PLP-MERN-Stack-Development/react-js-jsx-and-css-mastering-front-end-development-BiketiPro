import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">SDG Task Manager</h1>
      <div className="space-x-4">
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
        <NavLink to="/tasks" className="hover:underline">
          Tasks
        </NavLink>
        <NavLink to="/support" className="hover:underline">
          Support
        </NavLink>
        <NavLink to="/settings" className="hover:underline">
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
