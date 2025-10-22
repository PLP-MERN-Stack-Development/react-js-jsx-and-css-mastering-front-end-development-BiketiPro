export const fetchTasks = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
};
