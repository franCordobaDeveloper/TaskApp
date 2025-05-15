import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export const LoginPage = () => {
  
  
  const {register, handleSubmit, formState: {errors} } = useForm();
  const { signin, isAuthenticated, errors: signinErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await signin(data);
  };

  useEffect(() => {
      if (isAuthenticated) {
        navigate("/tasks");
      }
  }, [isAuthenticated]);
  
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Iniciar sesión en TaskApp
        </h2>
      </div>

       {/* Mostrar errores del backend si existen */}
        <div className="mt-4 space-y-2">
          {signinErrors.map((error, i) => (
            <div
              key={i}
              className="bg-red-500 text-white p-2 rounded-md text-sm text-center"
            >
              {error}
            </div>
          ))}
        </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="border border-gray-300 shadow-md rounded-xl p-8 bg-white">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  {...register("email", { required: "El email es obligatorio" })}
                  placeholder="email@gmail.com"
                  name="email"
                  type="email"
                  id="email"
                  className="block w-full rounded-md border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Contraseña
              </label>
              <div className="mt-2">
                <input
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    minLength: { value: 6, message: "Mínimo 6 caracteres" },
                  })}
                  type="password"
                  name="password"
                  placeholder="contraseña"
                  id="password"
                  className="block w-full rounded-md border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}
              </div>
            </div>

            {/* Botón */}
            <div>
              <button
                
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar sesión
              </button>
            </div>
          </form>

          {/* Redirección a Register */}
          <p className="mt-6 text-center text-sm text-gray-500">
            ¿No tenés cuenta?{" "}
            <Link
              to="/register"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
