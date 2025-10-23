import React, { useState, useEffect } from "react";
import Button from "../components/Button";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  // ✅ Load tasks from localStorage when app starts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // ✅ Save tasks to localStorage every time they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const handleAddTask = () => {
    if (task.trim() === "") return;
    const newTask = {
      id: Date.now(),
      title: task,
      completed: false,
      planned: dueDate ? true : false,
      dueDate: dueDate || null,
    };
    setTasks([...tasks, newTask]);
    setTask("");
    setDueDate("");
  };

  // Toggle completion
  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Delete task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Begin editing
  const handleEditTask = (id, title) => {
    setEditingTaskId(id);
    setEditedTask(title);
  };

  // Save edit
  const handleSaveEdit = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, title: editedTask } : t
      )
    );
    setEditingTaskId(null);
    setEditedTask("");
  };

  // Filter tasks
  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed && !t.planned;
    if (filter === "completed") return t.completed;
    if (filter === "planned") return t.planned;
    return true;
  });

  // Calculate days remaining for planned tasks
  const getDaysRemaining = (dueDate) => {
    if (!dueDate) return null;
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Alert for tasks due soon
  useEffect(() => {
    const dueSoonTasks = tasks.filter((t) => {
      if (!t.dueDate || t.completed) return false;
      const daysRemaining = getDaysRemaining(t.dueDate);
      return daysRemaining === 0 || daysRemaining === 1;
    });

    if (dueSoonTasks.length > 0) {
      alert(`⏰ Reminder: ${dueSoonTasks.length} task(s) due soon!`);
    }
  }, [tasks]);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        🌍 SDG Task Manager
      </h1>

      {/* Add Task Section */}
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border rounded px-3 py-2 flex-1"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <Button label="Add" onClick={handleAddTask} />
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4 justify-center flex-wrap">
        <Button
          label="All"
          variant={filter === "all" ? "primary" : "secondary"}
          onClick={() => setFilter("all")}
        />
        <Button
          label="Active"
          variant={filter === "active" ? "primary" : "secondary"}
          onClick={() => setFilter("active")}
        />
        <Button
          label="Completed"
          variant={filter === "completed" ? "primary" : "secondary"}
          onClick={() => setFilter("completed")}
        />
        <Button
          label="Planned"
          variant={filter === "planned" ? "primary" : "secondary"}
          onClick={() => setFilter("planned")}
        />
      </div>

      {/* Task List */}
      <ul>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((t) => {
            const daysRemaining = getDaysRemaining(t.dueDate);
            const isDueSoon = daysRemaining === 0 || daysRemaining === 1;

            return (
              <li
                key={t.id}
                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center border rounded p-3 mb-2 transition-all ${
                  t.completed
                    ? "bg-green-100"
                    : isDueSoon
                    ? "bg-red-100 border-red-300"
                    : "bg-white"
                }`}
              >
                {editingTaskId === t.id ? (
                  <div className="flex-1 flex gap-2 mb-2 sm:mb-0">
                    <input
                      type="text"
                      value={editedTask}
                      onChange={(e) => setEditedTask(e.target.value)}
                      className="border rounded px-2 py-1 flex-1"
                    />
                    <Button label="Save" onClick={() => handleSaveEdit(t.id)} />
                  </div>
                ) : (
                  <div>
                    <p
                      className={`${
                        t.completed ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {t.title}
                    </p>
                    {t.dueDate && (
                      <small className="text-gray-600">
                        Due: {new Date(t.dueDate).toLocaleDateString()}
                        {" • "}
                        {daysRemaining > 1 && (
                          <span>{daysRemaining} days left</span>
                        )}
                        {daysRemaining === 1 && (
                          <span className="text-red-600 font-semibold">
                            Due Tomorrow
                          </span>
                        )}
                        {daysRemaining === 0 && (
                          <span className="text-red-700 font-bold">
                            Due Today!
                          </span>
                        )}
                      </small>
                    )}
                  </div>
                )}

                <div className="flex gap-2 mt-2 sm:mt-0">
                  <Button
                    label={t.completed ? "Undo" : "Done"}
                    variant="secondary"
                    onClick={() => handleToggleComplete(t.id)}
                  />
                  {!t.completed && (
                    <Button
                      label="Edit"
                      variant="secondary"
                      onClick={() => handleEditTask(t.id, t.title)}
                    />
                  )}
                  <Button
                    label="Delete"
                    variant="danger"
                    onClick={() => handleDeleteTask(t.id)}
                  />
                </div>
              </li>
            );
          })
        ) : (
          <p className="text-gray-500 text-center mt-4">No tasks found.</p>
        )}
      </ul>
    </div>
  );
};

export default TaskManager;
