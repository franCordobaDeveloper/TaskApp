import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";

export const TasksPage = () => {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Mis Tareas</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{task.title}</h2>
            <p className="text-gray-700">{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
