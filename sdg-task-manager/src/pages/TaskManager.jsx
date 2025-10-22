import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
      dueDate: dueDate || null,
    };
    setTasks([...tasks, task]);
    setNewTask("");
    setDueDate("");
  };

  const toggleTask = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "Active") return !task.completed;
      if (filter === "Completed") return task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const overdue = (date) =>
    date && new Date(date) < new Date() && !isNaN(new Date(date));

  // Stats
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        Task Manager
      </h1>

      {/* ✅ Summary Section */}
      <div className="flex flex-wrap gap-4">
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg w-48">
          <p className="text-gray-600 dark:text-gray-300 text-sm">Total Tasks</p>
          <h3 className="text-lg font-semibold">{totalTasks}</h3>
        </div>
        <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg w-48">
          <p className="text-gray-600 dark:text-gray-300 text-sm">Completed</p>
          <h3 className="text-lg font-semibold">{completedTasks}</h3>
        </div>
        <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg w-48">
          <p className="text-gray-600 dark:text-gray-300 text-sm">Pending</p>
          <h3 className="text-lg font-semibold">
            {totalTasks - completedTasks}
          </h3>
        </div>
      </div>

      {/* ✅ Add Task Form */}
      <div className="flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="Enter new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border rounded p-2 flex-1 dark:bg-gray-700 dark:text-gray-100"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border rounded p-2 dark:bg-gray-700 dark:text-gray-100"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {/* ✅ Filters + Search */}
      <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
        <div className="space-x-2">
          {["All", "Active", "Completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-gray-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded p-2 w-48 dark:bg-gray-700 dark:text-gray-100"
        />
      </div>

      {/* ✅ Task List */}
      <div className="grid gap-4 mt-6">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-300">No tasks found.</p>
        ) : (
          filteredTasks.map((task) => (
            <Card key={task.id} className="flex justify-between items-center">
              <div>
                <h3
                  className={`${
                    task.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800 dark:text-gray-100"
                  }`}
                >
                  {task.title}
                </h3>
                {task.dueDate && (
                  <p
                    className={`text-sm ${
                      overdue(task.dueDate)
                        ? "text-red-500"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                  </p>
                )}
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="text-sm bg-green-500 text-white px-3 py-1 rounded"
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-sm bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
