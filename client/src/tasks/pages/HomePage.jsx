import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Bienvenido a Task Manager</h1>
      <div className="flex gap-6">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
        >
          Iniciar Sesión
        </Link>
        <Link
          to="/register"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-lg font-medium"
        >
          Registrarse
        </Link>
      </div>
    </div>
  );
};
