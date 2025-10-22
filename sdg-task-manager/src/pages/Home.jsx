import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Welcome to SDG Task Manager</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Organize your tasks efficiently and track your progress toward Sustainable Development Goals.
      </p>
      <Card title="Features" content="Add, delete, and plan tasks. Filter tasks by status. Switch between light/dark mode." />
      <Card title="Get Started" content="Go to the Tasks page to start managing your tasks." />
    </div>
  );
};

export default Home;
