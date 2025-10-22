import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import Support from "./pages/Support";
import Settings from "./pages/Settings";

import { ThemeProvider } from "./context/ThemeContext";


function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Navbar />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<TaskManager />} />
              <Route path="/support" element={<Support />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
