import Button from "./Button";

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-300 dark:border-gray-700">
      <div className={`flex-1 ${task.completed ? "line-through text-gray-500" : ""}`}>
        {task.title}
      </div>
      <div className="flex gap-2">
        <Button variant="secondary" onClick={() => onToggle(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </Button>
        <Button variant="danger" onClick={() => onDelete(task.id)}>Delete</Button>
      </div>
    </div>
  );
};

export default TaskItem;
