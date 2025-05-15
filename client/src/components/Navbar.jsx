import { Link } from "react-router-dom";
import { useAuth } from "../auth/context/AuthContext";


export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg text-white">
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/tasks" : "/"}>Task Manager</Link>
      </h1>
      <ul className="flex gap-x-4 items-center">
        {isAuthenticated ? (
          <>
            <li className="mr-4">Welcome, <span className="font-semibold">{user.username}</span></li>
            <li>
              <Link
                to="/add-task"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
              >
                Add Task
              </Link>
            </li>
            <li>
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
