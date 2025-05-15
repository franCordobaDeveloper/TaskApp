import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import { useNavigate } from "react-router-dom";

export const TasksPage = () => {
  const { getTasks, tasks, deleteTask } = useTasks();
  const navigate = useNavigate();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">📋 Mis Tareas</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-blue-600 mb-2">{task.title}</h2>
              <p className="text-gray-700">{task.description}</p>
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => navigate(`/tasks/${task._id}`)}
                className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm font-medium"
              >
                Editar
              </button>
              <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
