import { Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../auth/pages"

export const AppRouter = () => {
    
    return (
        <>
           
            <Routes>
                {/* Rutas para el logeo */}
                <Route path="/" element={<h1>home page</h1>} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />}/>

                {/* Rutas para las tareas */}
                <Route path="/tasks-list" element />
                <Route path="/add-tasks" element />
                <Route path="/tasks/:id" element />
                <Route path="/profile" element />
            </Routes>
        </>
    )
}