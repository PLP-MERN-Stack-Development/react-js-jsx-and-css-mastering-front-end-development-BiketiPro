export const filterTasks = (tasks, filter) => {
  if (filter === "Active") return tasks.filter(task => !task.completed);
  if (filter === "Completed") return tasks.filter(task => task.completed);
  return tasks;
};
