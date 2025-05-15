import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate } from "react-router-dom";

export const TaskFormPage = () => {
  const { register, handleSubmit } = useForm();
   const navigate = useNavigate();
    const {createTask} = useTasks();

  const onSubmit = (data) => {
    createTask(data);
    navigate("/tasks");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Crear Tarea</h1>

        <label className="block text-gray-700 mb-2">Título</label>
        <input
          type="text"
          {...register("title", { required: true })}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Título de la tarea"
        />

        <label className="block text-gray-700 mb-2">Descripción</label>
        <textarea
          {...register("description", { required: true })}
          className="w-full p-2 border border-gray-300 rounded mb-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Descripción de la tarea"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Guardar Tarea
        </button>
      </form>
    </div>
  );
};
