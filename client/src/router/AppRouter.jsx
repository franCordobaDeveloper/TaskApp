import { Route, Routes, useLocation } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth/pages";
import { HomePage, TaskFormPage, TasksPage } from "../tasks/pages";
import { ProfilePage } from "../profile/pages/ProfilePage";
import { ProtectedRoute } from "../ProtectedRoute";
import { Navbar } from "../components/Navbar";

export const AppRouter = () => {
  const location = useLocation();

  // Rutas donde NO se debe de mostrar navbar
  const noNavbarPaths = ["/", "/login", "/register"];

  return (
    <>
      
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        {/* Rutas protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/add-task" element={<TaskFormPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
};
