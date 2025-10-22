import { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Card from "../components/Card";
import Button from "../components/Button";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "All") return true;
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div className="max-w-2xl mx-auto">
      <Card title="Add Task">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 border p-2 rounded dark:bg-gray-700 dark:text-white"
            placeholder="Enter new task"
          />
          <Button onClick={addTask}>Add</Button>
        </div>
      </Card>

      <Card title="Filters" className="mt-4">
        <div className="flex gap-2">
          {["All", "Active", "Completed"].map(f => (
            <Button
              key={f}
              variant={filter === f ? "primary" : "secondary"}
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>
      </Card>

      <div className="mt-4 flex flex-col gap-2">
        {filteredTasks.map(task => (
          <Card key={task.id}>
            <div className="flex justify-between items-center">
              <span
                className={`flex-1 ${task.completed ? "line-through text-gray-500" : ""}`}
                onClick={() => toggleTask(task.id)}
              >
                {task.text}
              </span>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
